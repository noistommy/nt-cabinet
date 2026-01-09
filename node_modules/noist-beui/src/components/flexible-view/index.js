const onMouseDown = ({ target: resizer, pageX: initX, pageY: initY }) => {
  if (resizer.className && resizer.className.match('flexible-handle')) {
    const container = resizer.parentElement
    const layout = container.className.match('layout-h') ? 'h' : 'v'
    const reverse = container.className.match('reverse')
    let pane, mainPane
    if (reverse) {
      pane = resizer.nextElementSibling
      mainPane = resizer.previousElementSibling
    } else {
      pane = resizer.previousElementSibling
      mainPane = resizer.nextElementSibling
    }

    const initPaneWidth = pane.offsetWidth
    const initPaneHeight = pane.offsetHeight

    const { addEventListener: addEvent, removeEventListener: removeEvent } =
      window

    const resize = (initSize, offset = 0) => {
      const direction = reverse ? -1 : 1
      if (layout === 'h') {
        let paneWidth = initSize + offset * direction
        pane.style.width = `${paneWidth}px`
        // mainPane.style.width = `${container.clientWidth - paneWidth}px`
        container.style.setProperty('--side', paneWidth)
      } else {
        let paneHeight = initSize + offset * direction
        pane.style.height = `${paneHeight}px`
      }
    }

    const onMouseMove = ({ pageX, pageY }) => {
      const offset = layout === 'h' ? pageX - initX : pageY - initY
      const initSize = layout === 'h' ? initPaneWidth : initPaneHeight
      resize(initSize, offset)
    }

    const onMouseUp = () => {
      const size = layout === 'h' ? pane.clientWidth : pane.clientHeight
      resize(size)

      removeEvent('mousemove', onMouseMove)
      removeEvent('mouseup', onMouseUp)
    }

    addEvent('mousemove', onMouseMove)
    addEvent('mouseup', onMouseUp)
  }
}

export default onMouseDown
