import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Frontend Engineer",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/logo_tom.png' }]],
  themeConfig: {
    siteTitle: 'Kim Minyoung', // or false
    logo: { src: '/logo_tom.png', alt: 'logo' },
    nav: [
      { text: 'Resume', link: '/resume' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'Journey for BEUI', link: '/beui/'  },
      { text: 'NT Module', items: [
        { text: 'Modal (Vue)', link: '/module/modal' },
        { text: 'Modal (React)', link: '/module/modal_react' },
        { text: 'Toast (Vue)', link: '/module/toast_vue' },
        { text: 'Toast (React)', link: '/module/toast_react' },
        { text: 'Tooltip (Vue)', link: '/module/tooltip' },
        { text: 'Tooltip (React)', link: '/module/tooltip_react' },
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
          text: 'BEUI를 위한 여정',
          items: [
            { text: '소개', link: '/beui/' },
            { text: '1. 여정의 시작 - 통합', link: '/beui/journey1' },
            { text: '2. 여정에 진짜 필요한것 - 정제', link: '/beui/journey2' },
            { text: '3. 각자 가야할 길 - 분리', link: '/beui/journey3' },
            { text: '4. 큰 길로 나아가기 - 확장', link: '/beui/journey4' },
            { text: '새로운 여정 - AI', link: '/beui/journey5' },
          ]
        }
      ],
      '/module/': [
        {
          text: 'NT Module',
          items: [
            { text: 'Modal(vue)', link: '/module/modal' },
            { text: 'Modal(react)', link: '/module/modal_react' },
            { text: 'Toast(vue)', link: '/module/toast_vue' },
            { text: 'Toast(react)', link: '/module/toast_react' },
            { text: 'Tooltip(vue)', link: '/module/tooltip' },
            { text: 'Tooltip(react)', link: '/module/tooltip_react' },
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

    // socialLinks: [
    //   { icon: 'github', link: '/' }
    // ],
    footer: {
      message: '',
      copyright: 'Copyright © 2016-present Kim Minyoung a.k.a noistommy'
    }
  }
})
