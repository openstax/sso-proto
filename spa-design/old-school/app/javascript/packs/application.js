/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'bootstrap/scss/bootstrap'
import 'bootstrap/scss/bootstrap-reboot'

import Turbolinks from 'turbolinks'
import whenDomReady from 'when-dom-ready';
import { bootStaticElements } from '../elements/static';
Turbolinks.start()

const getNav = () => document.querySelector('nav.navbar')


whenDomReady(() => {
  console.log('Hello World from Webpacker')
  const nav = getNav();
  document.addEventListener("turbolinks:load", ({ data: { url } }) => {
    console.log(`Visited: ${url} isNavStatic=${nav === getNav()}`);
  })
  bootStaticElements(document);
})
