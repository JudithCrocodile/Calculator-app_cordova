// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    // Simple usage
    // '@nuxtjs/stylelint-module',
    '@nuxt/eslint',
    '@nuxt/scripts'
  ],

  css: ['~/assets/css/global.scss'],

  eslint: {
    config: {
      stylistic: true // <---
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: false
    }
  },
  typescript: {
    typeCheck: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/theme/variable.scss" as *;'
        }
      }
    }
  },
  generate: {
    dir: 'www',
    subFolders: true
  },
  experimental: {
    payloadExtraction: true
  },
  build: {
    publicPath: '/android_asset/www/front-end'
  },
  scripts: [
    {
      src: '/cordova.js',
      type: 'text/javascript'
    }
  ]
})
