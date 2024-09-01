import { repositoryName, apiEndpoint } from './slicemachine.config.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY,
    },
  },
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
    '@vee-validate/nuxt',
    '@nuxtjs/turnstile',
  ],
  i18n: {
    locales: [
      {
        code: 'en-us',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'es-es',
        iso: 'es-ES',
        file: 'es.json',
      },
    ],
    defaultLocale: 'en-us',
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales/', // Make sure this path is correct
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en-us',
    },
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
  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY,
  },
  veeValidate: {
    autoImports: true,
  },
})
