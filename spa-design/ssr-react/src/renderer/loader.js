import path from 'path';
import fs from 'fs';
import React from 'react';
import {toPairs, noop, find, flow, set, map, values, keyBy, get, keys, pick} from 'lodash/fp';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {createAppContainer} from 'react-redux-modules';
import fetch from 'node-fetch';
import {archiveLoader} from './archive';
import app from '../client/module';

export const unicornLoader = ASSET_DIR => {
  console.log('assets from', ASSET_DIR);

  const manifest = JSON.parse(fs.readFileSync(path.resolve(ASSET_DIR, 'asset-manifest.json')));
  const indexHtml = fs.readFileSync(path.resolve(ASSET_DIR, 'index.html'), 'utf8');

  return (url, {cookie, processAuthentication}) => {
    console.log(`starting run for: ${url}`);
    const modules = [];

    const {Container, store, history, effectRunner} = createAppContainer(app, {
      services: {
        processAuthentication,
        fetch,
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
    ;
  };
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
