import path from 'path';
import fs from 'fs';
import React from 'react';
import {noop, find, flow, set, map, values, keyBy, get, keys, pick} from 'lodash/fp';
import {renderToString} from 'react-dom/server';
import Helmet from 'react-helmet';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {createAppContainer} from 'react-redux-modules';
import fetch from 'node-fetch';
import cache from './cache';
import {archiveLoader} from './archive';
import app from '../src/module';

export default ASSET_DIR => {
  console.log('assets from', ASSET_DIR);

  const manifest = JSON.parse(fs.readFileSync(path.resolve(ASSET_DIR, 'asset-manifest.json')));
  const indexHtml = fs.readFileSync(path.resolve(ASSET_DIR, 'index.html'), 'utf8');

  return (req, res) => {
    console.log(`starting run for: ${req.url}`);
    const startTime = new Date().getTime();
    const modules = [];

    const fetchProxy = (url, options = {}) => fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        cookie: req.headers.cookie
      }
    });

    // TODO - do not cache html if there is an authorized user
    // (update when user auth works)
    const cacheHtml = true;

    const {Container, store, history, effectRunner} = createAppContainer(app, {
      initialState: cache.getState(req.url),
      services: {
        fetch: fetchProxy,
        loadArchive: archiveLoader,
      },
      initialHistory: [req.url],
      enableDevtools: false,
      loadableReporter: m => modules.push(m),
    });

    effectRunner.down()
      .then(() => {
        const state = store.getState();
        const url = state.Navigation.location.pathname;

        if (url != req.url) {
          res.redirect(url);
          return {status: 301, state}
        }

        return returnPage(res, {modules, Container, state, cacheHtml});
      })
      .then(({status, state, html}) => {
        cache.putState(req.url, state);

        if (status === 200 && html && cacheHtml) {
          cache.putRequest(req.url, html);
        }
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        console.log(`finished rendering ${req.url} in ${new Date().getTime() - startTime}ms`);
      });
    ;
  }

  function returnPage(res, {modules, Container, state, cacheHtml}) {
    const notFound = state.Navigation.match.name === 'Unicorn.NotFound';
    const notAllowed = state.Unicorn.notAllowed;
    const sheet = new ServerStyleSheet()

    const content = renderToString(
       <StyleSheetManager sheet={sheet.instance}>
         <Container />
       </StyleSheetManager>
    );

    const extractAssets = (manifest, chunks) =>
      keys(manifest)
        .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
        .map(asset => manifest[asset]);

    const styles = sheet.getStyleTags();
    const scripts = extractAssets(manifest, modules).map(
      c => `<script type="text/javascript" src="/${c}"></script>`
    );

    const helmet = Helmet.renderStatic();

    const html = injectHTML(indexHtml, {
      html: helmet.htmlAttributes.toString(),
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      body: content,
      state: JSON.stringify(state).replace(/</g, '\\u003c'),
      scripts: scripts,
      styles: styles,
    });

    const status =
      notFound ? 404 :
      notAllowed ? 401 :
      200;

    res.status(status).send(html);

    return {status, state, html}
  }

  function injectHTML(data, {html, title, meta, body, scripts, styles, state}) {
    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}${styles}</head>`);
    data = data.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
    );
    data = data.replace('</body>', scripts.join('') + '</body>');

    return data;
  };
};
