// node_modules/vue-nt-tooltip/dist/nt-tooltip.es.js
var p = null;
var l = {};
var E = (o, e) => {
  if (e.value === "")
    return;
  p && v();
  const s = document.createElement("div");
  w(s, e), e.value.self ? o.append(s) : document.body.append(s), P(o, e, s);
};
var L = (o, e) => {
  l = e, o.opt = {}, o.opt.trigger = o.value.trigger || "hover", o.opt.isUse = o.value.isUse === void 0 ? l.isUse : o.value.isUse;
};
var w = (o, e) => {
  var s;
  o.innerHTML = typeof e.value == "object" ? e.value.contents : e.value, o.classList.add("base-tooltip", l.customClass, `theme-${((s = e.value) == null ? void 0 : s.theme) || l.theme}`, l.size), o.style.maxWidth = e.value.size ? e.value.size + "px" : l.maxWidth + "px", e.value.padding && (reEl.style.padding = e.value.padding), o.style.textAlign = e.value.textAlign ? e.value.textAlign : l.textAlign, p = o;
};
var P = (o, e, s) => {
  const f = window.innerWidth, c = window.innerHeight;
  let n = e.arg || "top", r = "center";
  Object.keys(e.modifiers).length > 0 && (r = Object.keys(e.modifiers)[0]);
  const t = o.getBoundingClientRect(), i = s.getBoundingClientRect(), u = l.offset || 10, a = e.value.offset || 0;
  let m = t.top - i.height - u, g = t.bottom + u, x = t.left - (i.width + u), y = t.right + u;
  if (n === "top" && m < 0 && (n = "bottom"), n === "bottom" && c - (g + i.height) < 0 && (n = "top"), n === "left" && x < 0 && (n = "right"), n === "right" && f - (y + i.width) < 0 && (n = "left"), n === "top" || n === "bottom") {
    s.style.top = n === "top" ? m + "px" : g + "px";
    const h = t.left + t.width / 2 - i.width / 2, d = t.right - i.width;
    t.width >= i.width ? r = "center" : (r === "center" && h < 0 && (r = "start"), f - t.right - (i.width / 2 - t.width / 2) < 0 && (r = "end")), s.style.left = r === "center" ? h + "px" : r === "end" ? a + d + "px" : a + t.left + "px";
  } else {
    s.style.left = n === "left" ? `${x}px` : `${y}px`;
    const h = t.top + t.height / 2 - i.height / 2, d = t.bottom - i.height;
    t.height >= i.height ? r = "center" : (r === "center" && h < 0 && (r = "start"), f - t.right - (i.width / 2 - t.width / 2) < 0 && (r = "end")), s.style.top = r === "center" ? h + "px" : r === "end" ? d + "px" : t.top + "px";
  }
  s.classList.add(`${n}-${r}`);
};
var v = () => {
  p && p.remove();
};
var k = (o, e) => {
  if (!o && !e)
    return false;
  if (!o || !e)
    return true;
  if (typeof o == "string" && typeof e == "string")
    return o !== e;
  if (typeof o != typeof e)
    return true;
  if (typeof o == "object" && typeof e == "object") {
    const s = ["contents", "trigger", "theme", "isUse", "self", "size", "padding", "textAlign", "offset"];
    for (const f of s)
      if (o[f] !== e[f])
        return true;
    return false;
  }
  return o !== e;
};
var A = (o) => {
  let e, s, f, c = false;
  const n = (t, i) => {
    var a;
    e = () => {
      E(t, i), c = true;
    }, s = () => {
      v(), c = false;
    }, f = () => {
      c ? (v(), c = false) : (E(t, i), c = true), console.log(c);
    };
    const u = ((a = i.value) == null ? void 0 : a.trigger) || o.trigger;
    u === "click" && t.addEventListener("click", f), u === "hover" && (t.addEventListener("mouseenter", e), t.addEventListener("mouseleave", s), t.addEventListener("touchstart", e), t.addEventListener("touchend", s));
  }, r = (t) => {
    e && s && (s(), t.removeEventListener("click", f), t.removeEventListener("mouseenter", e), t.removeEventListener("mouseleave", s), t.removeEventListener("touchstart", e), t.removeEventListener("touchend", s));
  };
  return {
    // v-ga-tooltip:arg.modifiers
    created(t, i) {
      r(t), L(i, o);
    },
    // 엘리먼트가 mount 되기 전 호출 -> bind
    // beforeMount(el, binding) {
    //   console.log(binding, options)
    // },
    // 엘리먼트가 mount 된 후 호출 -> inserted
    mounted(t, i) {
      i.opt.isUse && n(t, i);
    },
    // parent component 가 업데이트 되기 전 호출
    // beforeUpdate(el) {
    // },
    // parent, child component 가 업데이트 된 후 노출
    updated(t, i) {
      r(t), k(i.value, i.oldValue) && n(t, i);
    },
    // parent component 가 unmount 되기 전 호출
    // beforeUnmount(el, binding, vnode, prevVnode) {},
    // parent component 가 unmount 된 후 호출 -> unbind
    unmounted(t) {
      r(t);
    }
  };
};
var U = {
  trigger: "hover",
  maxWidth: 200,
  size: "normal",
  theme: "dark",
  direction: "top",
  alignment: "center",
  transition: "linear",
  textAlign: "left",
  offset: 10,
  customClass: "ga-tooltip",
  isUse: true
};
var O = {
  install(o, e = {}) {
    const s = { ...U, ...e };
    o.directive("nt-tooltip", A(s));
  }
};
export {
  O as default
};
//# sourceMappingURL=vue-nt-tooltip.js.map
