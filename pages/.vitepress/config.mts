import { DefaultTheme, defineConfig } from 'vitepress'
import { ssrIncludeBooleanAttr } from 'vue/server-renderer'

// https://vitepress.dev/reference/site-config
// Config example: https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config.ts
export default defineConfig({
  lang: 'en-US',
  title: 'The Pit of Knowledge',
  description: 'A programmnig blog.',

  lastUpdated: true,
  cleanUrls: true,

  // TODO: add sitemap generation.

  // Configure HTML <head></head> tags.
  head: [
    ['link', { rel: 'icon', href: '/thepitofknowledge-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#242222' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'The Pit of Knowledge' }],
    ['meta',
      { name: 'og:image', content: 'https://thepitofknowledge.com/thepitofknowledge-og.jpg' }
    ],
    ['meta',
      {
        name: 'twitter:image',
        content: 'https://thepitofknowledge.com/thepitofknowledge-og.jpg'
      }
    ],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: {
      src: '/thepitofknowledge-icon.svg',
      width: 50,
      height: 50
    },

    sidebar: {
      '/': {
        base: '/', items: sidebar()
      }
    },

    externalLinkIcon: true,

    editLink: {
      pattern: 'https://github.com/rjanke/thepitofknowledge/edit/main/pages/:path',
      text: 'Edit this page on GitHub'
    },

    // Example (Last updated: Sep 21, 2023, 9:15 AM)
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
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

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Godot',
      collapsed: true,
      items: 
      [
        { text: 'Signals are cool', link: '' },
      ]
    },
    {
      text: 'Linux',
      collapsed: true,
      items:
      [
        { text: 'Cron Jobs', link: '' }
      ]
    },
    {
      text: 'PHP',
      collapsed: true,
      items:
      [
        { text: 'Local PHP Dev', link: '' }
      ]
    },
    {
      text: 'Python',
      collapsed: true,
      items:
      [
        { text: 'Automated website logins', link: '' }
      ]
    },
    { text: 'Vitepress Reference', link: ''}
  ]
}