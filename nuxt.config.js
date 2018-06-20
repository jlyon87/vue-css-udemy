module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-css-grid',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    ['nuxt-sass-resources-loader']
  ],
  sassResources: [
    '@/assets/scss/variables.scss'
  ]
}
