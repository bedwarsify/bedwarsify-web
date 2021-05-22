import { NuxtConfig } from '@nuxt/types'
import colors from 'tailwindcss/colors'

const config: NuxtConfig = {
  target: 'static',
  modern: 'client',
  head: {
    title: 'Bedwarsify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A simple but feature-rich Hypixel Bed Wars anti-sniping overlay.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@fontsource/inter/latin.css'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  pwa: {
    meta: {
      favicon: false,
      name: 'Bedwarsify',
      theme_color: '#18181b',
    },
    manifest: {
      name: 'Bedwarsify',
      short_name: 'Bedwarsify',
      start_url: '/',
      background_color: '#18181b',
    },
  },
  content: {},
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui'],
          },
          colors: {
            primary: '#c80028',
            gray: colors.gray,
            blurple: '#5865f2',
          },
        },
      },
      variants: {
        extend: {
          display: ['group-hover'],
        },
      },
    },
  },
  build: {},
}

export default config
