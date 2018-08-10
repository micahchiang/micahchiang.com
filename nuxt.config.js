const entriesData = require('./static/entriesinfo.json');
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES' ? { router: { base: '/site/' } } : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
  routerBase
};
