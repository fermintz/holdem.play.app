// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  modules:[
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-icon',
    'nuxt-headlessui'
  ],

  css:[
    '@/assets/styles/reset.scss',
    '@/assets/styles/global.scss',
    'material-icons/iconfont/material-icons.css',
  ],


})
