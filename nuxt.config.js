require('dotenv').config();

const entriesData = require('./static/entriesinfo.json');
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/' : '/';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Micah Chiang - the web and other things',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['~/assets/main.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    typographer: true,
    injected: true,
    use: ['markdown-it-container', 'markdown-it-attrs']
  },
  generate: {
    routes: function() {
      return entriesData.entries.map(entry => {
        return '/entries/' + entry.slug;
      });
    }
  },
  router: {
    base: routerBase
  }
};
