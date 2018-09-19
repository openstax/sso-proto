import path from 'path';
import fs from 'fs';
import React from 'react';
import {toPairs, noop, find, flow, set, map, values, keyBy, get, keys, pick} from 'lodash/fp';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {createAppContainer} from 'react-redux-modules';
import fetch from 'node-fetch';
import cache from './cache';
import {archiveLoader} from './archive';
import app from '../src/module';

const shouldProcessAuthentication = url =>
  !/^\/$/.test(url) &&
  !/^\/book-content/.test(url)

export const unicornLoader = ASSET_DIR => {
  console.log('assets from', ASSET_DIR);

  const manifest = JSON.parse(fs.readFileSync(path.resolve(ASSET_DIR, 'asset-manifest.json')));
  const indexHtml = fs.readFileSync(path.resolve(ASSET_DIR, 'index.html'), 'utf8');
  
  return (url, {cookie, processAuthentication}) => {
    console.log(`starting run for: ${url}`);
    const modules = [];

    const fetchProxy = processAuthentication
      ? (url, options = {}) => fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          cookie
        }
      })
      : fetch;


    const {Container, store, history, effectRunner} = createAppContainer(app, {
      initialState: cache.getState(url),
      services: {
        processAuthentication,
        fetch: fetchProxy,
        loadArchive: archiveLoader,
      },
      initialHistory: [url],
      enableDevtools: false,
      loadableReporter: m => modules.push(m),
    });

    return effectRunner.down()
      .then(() => {
        const state = store.getState();
        const newUrl = state.Navigation.location.pathname;

        if (newUrl != url) {
          return {status: 301, location: newUrl, state}
        }

        return returnPage({modules, indexHtml, manifest, Container, state});
      })
      .then(response => {
        cache.putState(url, response.state);

        if (response.status === 200 && response.html && !processAuthentication) {
          cache.putRequest(url, response.html);
        }

        return response;
      })
    ;
  };
};

export default ASSET_DIR => {
  const loader = unicornLoader(ASSET_DIR);

  return (req, res) => {
    const url = req.url;
    const cookie = req.headers.cookie
    const startTime = new Date().getTime();
    const processAuthentication = shouldProcessAuthentication(url);

    loader(url, {cookie, processAuthentication})
      .then(response => {
        switch (response.status) {
          case 301:
            res.redirect(response.location);
          default:
            res.status(response.status).send(response.html);
        }

        return response;
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        console.log(`finished rendering ${url} in ${new Date().getTime() - startTime}ms`);
      });
    ;
  }
};

function returnPage({modules, manifest, indexHtml, Container, state}) {
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

  const html = injectHTML(indexHtml, {
    title: `<title>${state.Unicorn.title}</title>`,
    meta: state.Unicorn.meta.map(meta => `<meta ${toPairs(meta).map(([name, value]) => `${name}="${value}"`).join(' ')} />`).join(''),
    body: content,
    state: JSON.stringify(state).replace(/</g, '\\u003c'),
    scripts: scripts,
    styles: styles,
  });

  const status =
    notFound ? 404 :
    notAllowed ? 401 :
    200;

  return {status, state, html}
}

function injectHTML(data, {html, title, meta, body, scripts, styles, state}) {
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace('</head>', `${meta}${styles}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  data = data.replace('</body>', scripts.join('') + '</body>');

  return data;
};
