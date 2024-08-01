import VueRecaptchaPlugin from 'vue-recaptcha'

export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.vueApp._context.provides['vue-recaptcha-context']) {
    const config = useRuntimeConfig().public.recaptcha
    nuxtApp.vueApp.use(VueRecaptchaPlugin, config)
  }
})
