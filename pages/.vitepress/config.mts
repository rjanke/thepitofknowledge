import { DefaultTheme, defineConfig } from 'vitepress'
import { ssrIncludeBooleanAttr } from 'vue/server-renderer'

// Docs: https://vitepress.dev/reference/site-config
// Example config: https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config.ts
export default defineConfig({
  lang: 'en-US',
  title: 'The Pit of Knowledge',
  description: 'A programmnig blog.',

  // Docs: https://vitepress.dev/reference/site-config#lastupdated
  lastUpdated: true,

  // Docs: https://vitepress.dev/reference/site-config#cleanurls
  cleanUrls: true,

  // Docs: https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: 'https://thepitofknowledge.com'
  },

  // Configure HTML <head></head> tags.
  // Docs: https://vitepress.dev/reference/site-config#head
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

  // Docs: https://vitepress.dev/reference/default-theme-config
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

    // Docs: https://vitepress.dev/reference/default-theme-config#outline
    outline: {
      level: 'deep'
    },

    // Docs: https://vitepress.dev/reference/default-theme-config#externallinkicon
    externalLinkIcon: true,

    // Docs: https://vitepress.dev/reference/default-theme-config#editlink
    editLink: {
      pattern: 'https://github.com/rjanke/thepitofknowledge/edit/main/pages/:path',
      text: 'Edit this page on GitHub'
    },

    // Outputs: "Last updated: Sep 21, 2023, 9:15 AM"
    // Docs: https://vitepress.dev/reference/default-theme-config#lastupdated
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    // Docs: https://vitepress.dev/reference/default-theme-search
    search: {
      provider: 'local'
    },

    // Docs: https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rjanke/thepitofknowledge' }
    ]
  }
})

// Sidebar menu links.
function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Godot',
      collapsed: true,
      base: '/godot/',
      items: [
        { text: 'Signals - Between Scenes & Reusable - Tutorial', link: 'signals-between-scenes-reusable-tutorial' },
      ]
    },
    {
      text: 'Linux',
      collapsed: true,
      base: '/linux/',
      items: [
        { text: 'Cron Jobs', 
        collapsed: true,
        items: [
          { text: 'test nested', link: ''}
        ]
      }
      ]
    },
    {
      text: 'PHP',
      collapsed: true,
      base: '/php/',
      items: [
        { text: 'Local PHP Dev', link: '' }
      ]
    },
    {
      text: 'Python',
      collapsed: true,
      base: '/python/',
      items: [
        { text: 'Automated website logins', link: '' }
      ]
    },
    { text: 'Vitepress Reference', link: '' }
  ]
}