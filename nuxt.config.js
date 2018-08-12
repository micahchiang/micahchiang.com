require('dotenv').config();

const entriesData = require('./static/entriesinfo.json');
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/site/' : '/';

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
    vendor: ['axios']
  },
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
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
