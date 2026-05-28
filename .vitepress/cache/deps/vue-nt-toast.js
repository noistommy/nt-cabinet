// node_modules/vue-nt-toast/dist/nt-toast.es.js
var a = {
  success: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-check" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M8 12.5L10.5 15L16 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" mask="url(#tick-cut-check)" />
    </svg>
  `,
  info: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-info" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M12 16V12" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="8" r="1" fill="black"/>
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" mask="url(#tick-cut-info)"/>
    </svg>
  `,
  danger: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-err" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M12 8V12" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="16" r="1" fill="black"/>
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="currentColor" mask="url(#tick-cut-err)"/>
    </svg>
  `,
  attention: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tick-cut-warning" maskUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="white" />
          <path d="M12 8V12" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="16" r="1" fill="black"/>
        </mask>
      </defs>
      <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" mask="url(#tick-cut-warning)" />
    </svg>
  `,
  importance: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor"/>
    </svg>
  `
};
var h = class {
  constructor(t, s, e) {
    this.type = t, this.msg = s, this.options = e, this.interval = null, this.toast = null, this.icon = null, this.closeButton = null, this.notify();
  }
  notify() {
    this.toast = document.createElement("div"), this.toast.classList.add("toast", "swing");
    const t = this.setContents();
    return this.setIcon(), this.options.round && this.toast.classList.add("round"), this.options.theme === "light" ? this.toast.classList.add(`${this.type}`, "light") : this.options.theme === "icon" ? this.icon.classList.add(`${this.type}-text`) : this.options.theme === "icon-bg" ? this.icon.classList.add(`${this.type}`) : this.options.theme === "line" ? (this.toast.classList.add("line-left"), t.classList.add(`${this.type}-border`)) : this.toast.classList.add(`${this.type}`), t.classList.add("toast-contents"), this.toast.appendChild(t), this.toast;
  }
  // hide() {
  //   this.toast.classList.remove('swing')
  //   this.toast.addEventListener('transitionend', () => {
  //     this.toast.remove()
  //     clearTimeout(this.interval)
  //   })
  // }
  setIcon() {
    if (!this.options.useIcon || this.options.theme === "line")
      return;
    this.icon = document.createElement("div"), this.icon.classList.add("toast-icon");
    const t = a[this.type] || a.info;
    this.icon.innerHTML = t, this.toast.appendChild(this.icon);
  }
  setContents() {
    const t = document.createElement("div"), s = document.createElement("div");
    s.classList.add("title", "ellipsis");
    const e = document.createElement("div");
    return typeof this.msg == "string" ? (e.innerHTML = this.msg, t.appendChild(e)) : (this.options.useTitle && (s.innerHTML = this.msg.title, t.appendChild(s)), e.innerHTML = this.msg.description, t.appendChild(e)), t;
  }
};
var d = class {
  constructor(t) {
    this.toastId = 0, this.options = t, this.board = null;
  }
  show(t, s, e) {
    const i = { ...this.options, ...e };
    i.snackbar && this.clear();
    let r = null;
    this.toastId++, this.board = this.getBoard(i);
    const n = new h(t, s, i).toast;
    i.closeButton && (r = this.setClose(), n.appendChild(r)), this.board.appendChild(n);
    const l = i.freeze ? null : setTimeout(() => this.hideToast(n, l), i.timeout);
    i.clickToClose && n.addEventListener("click", () => {
      this.hideToast(n, l);
    }), i.closeButton && r.addEventListener("click", () => {
      this.hideToast(n, l);
    });
  }
  getBoard(t) {
    let s = document.querySelector(".toast-board");
    return s || (s = document.createElement("div"), s.classList.add("toast-board"), s.classList.add(t.position), t.displayOnTop && s.classList.add("on-top"), document.body.appendChild(s), s);
  }
  setClose() {
    const t = document.createElement("button");
    return t.classList.add("toast-close"), t.innerHTML = "<span>&times;</span>", t;
  }
  hideToast(t, s) {
    this.toastId--, t.classList.remove("swing"), t.addEventListener("transitionend", () => {
      this.removeToast(t), clearTimeout(s);
    });
  }
  removeToast(t) {
    t.remove(), this.toastId || this.clear();
  }
  clearToast() {
    if (!this.board)
      return;
    this.board.querySelectorAll(".toast").forEach((s) => {
      this.hideToast(s, null);
    });
  }
  clear() {
    this.board && this.board.parentNode && (this.board.remove(), this.board = null), this.toastId = 0;
  }
};
var u = {
  useTitle: true,
  useIcon: true,
  closeButton: true,
  clickToClose: true,
  round: false,
  theme: "default",
  position: "bottom-right",
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  transition: "swing",
  timeout: 5e3
};
var c = {};
var p = (o) => ({ ...u, ...o });
var k = {
  install(o, t = {}) {
    c = p(t), o.config.globalProperties.$ntToast = new d(c), o.provide("$ntToast", new d(c));
  }
};
export {
  k as default
};
//# sourceMappingURL=vue-nt-toast.js.map
