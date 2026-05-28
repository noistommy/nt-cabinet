import DefaultTheme from 'vitepress/theme'
import BEUI from  'noist-beui'
// import 'noist-beui/beui.css'
import './beui.css'

import NtToast from 'vue-nt-toast';
import 'vue-nt-toast/toast.css';

import NtModal from 'vue-nt-modal';
import 'vue-nt-modal/nt-modal.css';

import NtTooltip from 'vue-nt-tooltip';
import 'vue-nt-tooltip/tooltip.css';

import MyLayout from './MyLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(BEUI)
    app.use(NtToast, {useIcon: false})
    app.use(NtModal)
    app.use(NtTooltip)
  },
  Layout: MyLayout
}