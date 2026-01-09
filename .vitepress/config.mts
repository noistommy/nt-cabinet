import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Frontend Engineer",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/logo_tom.png' }]],
  themeConfig: {
    siteTitle: false, // or false
    logo: { src: '/logo_tom.png', alt: 'logo' },
    nav: [
      { text: 'Resume', link: '/resume' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'BEUI', items: [
        { text: 'Intro', link: '/beui/' },
        { text: 'React', link: '/beui/react-beui' },
        { text: 'Vue', link: '/beui/vue-beui' },
      ]  },
      { text: 'NT Module', items: [
        { text: 'Modal', link: '/module/modal' },
        { text: 'Toast (Vue)', link: '/module/toast_vue' },
        { text: 'Toast (React)', link: '/module/toast_react' },
        { text: 'Tooltip', link: '/module/tooltip' },
      ] },
      { text: 'Works', items: [
        // { text: 'Test Page', link: '/pages/test-page' },
        { text: 'NT Scrollspy', link: '/pages/scrollspy' },
        { text: 'NT Number Puzzle', link: '/pages/number-puzzle' },
        { text: 'NT Roulette', link: '/pages/roulette' },
      ] },
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/beui/': [
        {
          text: 'Be UI 라이브러리',
          items: [
            { text: '소개', link: '/beui/' },
            { text: 'React', link: '/beui/react-beui' },
            { text: 'Vue', link: '/beui/vue-beui' },
          ]
        }
      ],
      '/module/': [
        {
          text: 'NT Module',
          items: [
            { text: 'Modal', link: '/module/modal' },
            { text: 'Toast(vue)', link: '/module/toast_vue' },
            { text: 'Toast(react)', link: '/module/toast_react' },
            { text: 'Tooltip', link: '/module/tooltip' },
          ]
        }
      ],
      '/pages/': [
        {
          text: 'Pages',
          items: [
            { text: 'NT Scrollspy', link: '/pages/scrollspy' },
            { text: 'NT Number Puzzle', link: '/pages/number-puzzle' },
            { text: 'NT Roulette', link: '/pages/roulette' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
