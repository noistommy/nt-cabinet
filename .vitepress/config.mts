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
      { text: 'Projects', items: [
        { text: 'Frog UI', link: '/project/frogui' },
        { text: 'BEUI', link: '/project/beui' },
      ] },
      { text: 'NT Module', link: '/module/modal_react'},
      { text: 'Works', items: [
        { text: 'Souple', link: '/pages/souple' },
        { text: 'Scrollspy', link: '/pages/scrollspy' },
        { text: 'Number Puzzle', link: '/pages/number-puzzle' },
        { text: 'Roulette', link: '/pages/roulette' },
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
            {text: "Modal" , items: [
              { text: 'React', link: '/module/modal_react'},
              { text: 'Vue', link: '/module/modal'},
            ]},
            {text: "Toast" , items: [
              { text: 'React', link: '/module/toast_react'},
              { text: 'Vue', link: '/module/toast_vue'},
            ]},
            {text: "Tooltip" , items: [
              { text: 'React', link: '/module/tooltip'},
              { text: 'Vue', link: '/module/tooltip_vue'},
            ]},
          ]
        }
      ],
      '/pages/': [
        {
          text: 'Pages',
          items: [
            { text: 'Souple', link: '/pages/souple' },
            { text: 'Scrollspy', link: '/pages/scrollspy' },
            { text: 'Number Puzzle', link: '/pages/number-puzzle' },
            { text: 'Roulette', link: '/pages/roulette' },
          ]
        }
      ],
      '/project/': [
        {
          text: 'Project',
          items: [
            { text: 'Frog UI', link: '/project/frogui' },
            { text: 'BEUI', link: '/project/beui' },
          ]
        }
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: '/' }
    // ],
    footer: {
      message: '',
      copyright: 'Copyright 2016-present Kim Minyoung a.k.a noistommy.'
    }
  }
})
