// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/fonts.css'],

  // Geração estática (SSG)
  nitro: {
    preset: 'static'
  },

  // Ativa auto-import de componentes
  components: true,
})
