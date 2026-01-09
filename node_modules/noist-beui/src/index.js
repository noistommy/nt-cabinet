import './beui/beui.scss'
import * as components from './components'

const install = (app) => {
  // 모든 컴포넌트를 순회하면서 등록
  Object.entries(components).forEach(([name, component]) => {
    // 컴포넌트 이름 정규화
    const componentName = name.startsWith('Be') ? name : `Be${name}`
    app.component(componentName, component)
  })
}

// 컴포넌트 개별 export
export * from './components'

// 기본 플러그인 export
export default {
  install,
  // 개별 컴포넌트도 함께 export
  ...components,
}
