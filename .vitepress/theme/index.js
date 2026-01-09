import DefaultTheme from 'vitepress/theme'
import BEUI from  'noist-beui'
import 'noist-beui/beui.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(BEUI)
  }
}