import { type DefaultTheme, defineConfig } from 'vitepress';

const logo = 'https://pinia.vuejs.org/logo.svg';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site Testing',
  head: [['link', { rel: 'icon', href: logo }]],
  base: '/try-vitepress', // https://vitepress.dev/guide/deploy#setting-a-public-base-path
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo,

    docFooter: {
      next: 'Susunod',
    },

    nav: nav(),

    sidebar: {
      '/defaults/': {
        base: '/defaults/',
        items: sbDefaults(),
      },

      '/more-examples/': {
        base: '/more-examples/',
        items: sbMoreExamples(),
      },
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
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    {
      text: 'Examples',
      link: '/defaults/markdown-examples',
      activeMatch: '/defaults/',
    },
    {
      text: 'More Examples',
      link: '/more-examples/introduction',
      activeMatch: '/more-examples/',
    },
    { text: 'Google', link: 'https://google.com' },
  ];
}

function sbDefaults(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Examples',
      base: '/defaults/',
      items: [
        { text: 'Markdown Examples', link: 'markdown-examples' },
        { text: 'Runtime API Examples', link: 'api-examples' },
        { text: 'Extra', link: 'extra' },
      ],
    },

    { text: 'More Examples', link: '../more-examples/introduction' },
  ];
}

function sbMoreExamples(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'More',
      collapsed: false,
      items: [
        {
          text: 'Introduction',
          link: 'introduction',
        },
      ],
    },
  ];
}
