// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],

  css:[
    '@/assets/styles/reset.scss',
    '@/assets/styles/global.scss',
    'material-icons/iconfont/material-icons.css',
  ],

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        },
      },
    },
  },
})
