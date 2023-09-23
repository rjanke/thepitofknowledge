import { DefaultTheme, defineConfig } from 'vitepress'

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
    ['meta', { name: 'og:site_name', content: 'The Pit of Knowledge' }],
    ['meta', { name: 'og:type', content: 'article' }],
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
      pattern: 'https://github.com/rjanke/thepitofknowledge/blob/main/pages/:path',
      text: 'View this page on GitHub'
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
        { text: 'Using Signals Between Scenes', link: 'using-signals-between-scenes' },
      ]
    },
    {
      text: 'Python',
      collapsed: true,
      base: '/python/',
      items: [
        { text: 'Automating Website Logins & Maintenance with Selenium', link: 'automating-website-logins-maintenance-selenium' }
      ]
    },
    { text: 'VitePress Reference', link: 'vitepress-reference' }
  ]
}