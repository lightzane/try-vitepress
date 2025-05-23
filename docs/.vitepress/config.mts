import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site Testing",
  head: [
    ['link', { rel: 'icon', href: 'https://pinia.vuejs.org/logo.svg' }]
  ],
  base: '/try-vitepress', // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://pinia.vuejs.org/logo.svg',

    docFooter: {
      next: 'Susunod'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/defaults/markdown-examples' },
      { text: 'More Examples', link: '/more-examples' },
      { text: 'Google', link: 'https://google.com' }
    ],

    sidebar: {
      '/defaults/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'Getting Started',
              link: 'https://google.com'
            }
          ]
        },
        {
          text: 'Examples',
          base: '/defaults',
          docFooterText: 'The Default Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
            { text: 'Extra', link: '/extra' },
          ]
        },
      ],

      '/more-examples/': [
        {
          text: 'More',
          collapsed: true,
          items: [
            {
              text: 'More Examples', link: '/more-examples/'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://google.com' },
      { icon: 'discord', link: 'https://google.com' },
      { icon: 'instagram', link: 'https://google.com' },
      { icon: 'youtube', link: 'https://google.com' },
      { icon: 'tiktok', link: 'https://google.com' },
      { icon: 'twitter', link: 'https://google.com' },
      { icon: 'twitch', link: 'https://google.com' },
      { icon: 'facebook', link: 'https://google.com' },
      { icon: 'messenger', link: 'https://google.com' },
      { icon: 'whatsapp', link: 'https://google.com' },
      { icon: 'viber', link: 'https://google.com' },
    ],

    search: {
      provider: 'local',
    }
    
  }
})
