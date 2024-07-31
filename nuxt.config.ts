import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/ulf8jji.css' },
      ],
      script: [
        {
          src: '//js-na1.hs-scripts.com/46510803.js',
          id: 'hs-script-loader',
          async: true,
          defer: true,
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@vee-validate/nuxt',
  ],

  i18n: {
    locales: ['en-us', 'es-es'],
    defaultLocale: 'en-us',
  },
  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
        {
          type: 'page',
          uid: 'video-learning',
          path: '/video-learning-unauthorized',
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },
  veeValidate: {
    autoImports: true,
  },
})
