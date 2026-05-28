import ToastBoard from './toastBoard'
import './toast.scss'
// import '@fortawesome/fontawesome-free/js/all.js'

const defaultOptions = {
  useTitle: true,
  useIcon: true,
  closeButton: true,
  clickToClose: true,
  round: false,
  theme: 'default',
  position: 'bottom-right',
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  transition: 'swing',
  timeout: 5000
}

let extendOptions = {}
const setOption = option => {
  return { ...defaultOptions, ...option }
}

export default {
  install(app, options = {}) {
    extendOptions = setOption(options)
    app.config.globalProperties.$ntToast = new ToastBoard(extendOptions)
    app.provide('$ntToast', new ToastBoard(extendOptions))
  }
}
