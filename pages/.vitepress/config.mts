import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// Config example: https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config.ts
export default defineConfig({
  lang: 'en-US',
  title: 'The Pit of Knowledge',
  description: 'My blog.',

  lastUpdated: true,
  cleanUrls: true,

  // Configure HTML <head></head> tags.
  head: [
    ['link', { rel: 'icon', href: '/thepitofknowledge-icon.svg' }]
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: {
      src: '/thepitofknowledge-icon.svg',
      width: 50,
      height: 50
    },

    externalLinkIcon: true,

    editLink: {
      pattern: 'https://github.com/rjanke/thepitofknowledge/edit/main/pages/:path',
      text: 'Edit this page on GitHub'
    },

    // https://vitepress.dev/reference/default-theme-search
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rjanke/thepitofknowledge' }
    ]
  }
})
