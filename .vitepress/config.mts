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
        { text: '여정 1', link: '/beui/journey1' },
        { text: '여정 2', link: '/beui/journey2' },
        { text: '여정 3', link: '/beui/journey3' },
        { text: '여정 4', link: '/beui/journey4' },
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
          text: 'BEUI UI Library',
          items: [
            { text: '소개', link: '/beui/' },
            { text: '여정의 시작 - 통합', link: '/beui/journey1' },
            { text: '여정에 진짜 필요한것 - 정제', link: '/beui/journey2' },
            { text: '각자 가야할 길 - 분리', link: '/beui/journey3' },
            { text: '큰 길로 나아가기 - 확장', link: '/beui/journey4' },
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
      { icon: 'github', link: '/' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2016-present Noistommy'
    }
  }
})
