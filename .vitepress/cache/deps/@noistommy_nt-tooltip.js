import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __publicField
} from "./chunk-PETI6O6C.js";

// node_modules/@noistommy/nt-tooltip/dist/nt-tooltip.es.js
function e(e2) {
  return e2.replace(/-([a-z])/g, (e3, t2) => t2.toUpperCase());
}
function t(e2) {
  let t2 = e2.trim();
  if (t2 === "true") return true;
  if (t2 === "false") return false;
  if (t2 !== "" && !isNaN(Number(t2))) return Number(t2);
  if (t2.startsWith("{") && t2.endsWith("}") || t2.startsWith("[") && t2.endsWith("]")) try {
    return JSON.parse(t2);
  } catch {
    return t2;
  }
  return t2;
}
function n(n2) {
  let r2 = {};
  return n2 && n2.split(";").forEach((n3) => {
    let i2 = n3.indexOf(":");
    if (i2 === -1) return;
    let a2 = n3.slice(0, i2).trim(), o2 = n3.slice(i2 + 1);
    if (!a2 || o2 === void 0) return;
    let s2 = e(a2);
    r2[s2] = t(o2);
  }), r2;
}
var _e, _r_instances, t_fn, _a;
var r = (_a = class {
  constructor(e2, t2 = {}) {
    __privateAdd(this, _r_instances);
    __privateAdd(this, _e, {
      content: "",
      pos: "top-center",
      invert: true,
      show: false,
      trigger: "hover",
      selector: "nt-tooltip",
      size: null,
      padding: 8,
      maxWidth: 250,
      textAlign: "center",
      offset: 10,
      customClass: "",
      external: null,
      zIndex: null
    });
    __publicField(this, "root");
    __publicField(this, "options");
    __publicField(this, "tooltip", null);
    __publicField(this, "currenPos", null);
    __publicField(this, "touchTimer", null);
    __publicField(this, "longTouch", false);
    __publicField(this, "_show");
    __publicField(this, "setShow", () => {
      this._show || (this._show = true, this.setTooltip());
    });
    __publicField(this, "setClose", () => {
      this._show = false, this.tooltip && (this.tooltip = (this.tooltip.classList.remove("show"), this.tooltip.remove(), null)), window.removeEventListener("scroll", this.setPosition, true), window.removeEventListener("resize", this.setPosition);
    });
    __publicField(this, "setToggle", () => {
      this._show ? this.setClose() : this.setShow();
    });
    __publicField(this, "setPosition", () => {
      if (!this._show || !this.tooltip) return;
      let e2 = window.innerWidth, t2 = window.innerHeight, [n2, r2] = this.options.pos.split("-") || ["top", "center"], i2 = this.root.getBoundingClientRect(), a2 = this.tooltip.getBoundingClientRect(), o2 = Number(this.options.offset), s2 = i2.top - a2.height - o2, c2 = i2.bottom + o2, l2 = i2.left - (a2.width + o2), u2 = i2.right + o2;
      if (n2 === "top" && s2 < 0 && (n2 = "bottom"), n2 === "bottom" && t2 - (c2 + a2.height) < 0 && (n2 = "top"), n2 === "left" && l2 < 0 && (n2 = "right"), n2 === "right" && e2 - (u2 + a2.width) < 0 && (n2 = "left"), n2 === "top" || n2 === "bottom") {
        this.tooltip.style.top = n2 === "top" ? s2 + "px" : c2 + "px";
        let t3 = i2.left + i2.width / 2 - a2.width / 2, o3 = i2.right - a2.width;
        i2.width >= a2.width ? r2 = "center" : (r2 === "center" && t3 < 0 && (r2 = "start"), e2 - i2.right - (a2.width / 2 - i2.width / 2) < 0 && (r2 = "end")), this.tooltip.style.left = r2 === "center" ? t3 + "px" : r2 === "end" ? 0 + o3 + "px" : 0 + i2.left + "px";
      } else {
        this.tooltip.style.left = n2 === "left" ? `${l2}px` : `${u2}px`;
        let t3 = i2.top + i2.height / 2 - a2.height / 2, o3 = i2.bottom - a2.height;
        i2.height >= a2.height ? r2 = "center" : (r2 === "center" && t3 < 0 && (r2 = "start"), e2 - i2.right - (a2.width / 2 - i2.width / 2) < 0 && (r2 = "end")), this.tooltip.style.top = r2 === "center" ? t3 + "px" : r2 === "end" ? o3 + "px" : i2.top + "px";
      }
      this.currenPos && this.tooltip.classList.remove(this.currenPos), this.currenPos = `${n2}-${r2}`, this.tooltip.classList.add(this.currenPos);
    });
    this.root = e2, this.options = {
      ...__privateGet(this, _e),
      ...t2
    }, this._show = false, this.options.external ? this.setExternal(this.options.external) : __privateMethod(this, _r_instances, t_fn).call(this);
  }
  update(e2) {
    this.options = {
      ...this.options,
      ...e2
    }, this.options.external && this.setExternal(this.options.external), this._show && (this.setAttribute(), this.setPosition());
  }
  destroy() {
    this.setClose(), this.options.trigger === "hover" ? (this.root.removeEventListener("mouseenter", this.setShow), this.root.removeEventListener("mouseleave", this.setClose)) : this.options.trigger === "focus" ? (this.root.removeEventListener("focusin", this.setShow), this.root.removeEventListener("focusout", this.setClose)) : this.root.removeEventListener("click", this.setToggle);
  }
  setExternal(e2) {
    e2 === "show" ? this.setShow() : this.setClose();
  }
  setTooltip() {
    this.tooltip && this._show && this.setClose(), this.tooltip = document.createElement("div"), this.setAttribute(), document.body.append(this.tooltip), this.setPosition(), window.addEventListener("scroll", this.setPosition, true), window.addEventListener("resize", this.setPosition), requestAnimationFrame(() => {
      var _a2;
      (_a2 = this.tooltip) == null ? void 0 : _a2.classList.add("show");
    });
  }
  setAttribute() {
    var _a2;
    this.tooltip && (this.tooltip.innerHTML = this.options.content ? this.options.content : ((_a2 = this.root.querySelector("[nt-target]")) == null ? void 0 : _a2.innerHTML) ?? "", this.tooltip.classList.add(...[
      this.options.selector,
      this.options.invert ? "invert" : null,
      this.options.size,
      this.options.customClass ? `${this.options.customClass}`.trim() : null
    ].filter(Boolean)), this.tooltip.style.maxWidth = this.options.maxWidth + "px", this.tooltip.style.paddingBlock = this.options.padding + "px", this.tooltip.style.paddingInline = Number(this.options.padding) * 1.5 + "px", this.tooltip.style.textAlign = this.options.textAlign, this.options.zIndex && (this.tooltip.style.zIndex = this.options.zIndex));
  }
  get show() {
    return this._show;
  }
  set show(e2) {
    e2 ? this.setShow() : this.setClose();
  }
}, _e = new WeakMap(), _r_instances = new WeakSet(), t_fn = function() {
  this.options.trigger === "hover" ? (this.root.addEventListener("mouseenter", this.setShow), this.root.addEventListener("mouseleave", this.setClose)) : this.options.trigger === "focus" ? (this.root.addEventListener("focusin", this.setShow), this.root.addEventListener("focusout", this.setClose)) : this.root.addEventListener("click", this.setToggle);
}, _a);
var i = /* @__PURE__ */ new Map();
var a = "nt-tooltip";
var o = null;
function s() {
  p(), c(document.body), f(), console.log(`${i.size}개의 툴팁 활성`);
}
function c(e2) {
  if (e2.nodeType !== 1) return;
  let t2 = e2;
  t2.hasAttribute(a) && l(t2), t2.querySelectorAll(`[${a}]`).forEach(l);
}
function l(e2) {
  let t2 = new r(e2, n(e2.getAttribute(a) ?? ""));
  i.set(e2, t2);
}
function u(e2) {
  var _a2;
  let t2 = n(e2.getAttribute(a) ?? ""), r2 = i.get(e2);
  if (!r2) {
    l(e2);
    return;
  }
  typeof r2.update == "function" ? r2.update(t2) : ((_a2 = r2.destroy) == null ? void 0 : _a2.call(r2), l(e2));
}
function d(e2) {
  var _a2;
  let t2 = i.get(e2);
  t2 && ((_a2 = t2.destroy) == null ? void 0 : _a2.call(t2), i.delete(e2));
}
function f() {
  o = new MutationObserver((e2) => {
    for (let t2 of e2) {
      if (t2.type === "attributes" && t2.attributeName === a) {
        let e3 = t2.target;
        e3.hasAttribute(a) ? u(e3) : d(e3);
        continue;
      }
      t2.type === "childList" && (t2.addedNodes.forEach((e3) => {
        e3.nodeType === 1 && c(e3);
      }), t2.removedNodes.forEach((e3) => {
        var _a2;
        if (e3.nodeType !== 1) return;
        let t3 = e3;
        d(t3), (_a2 = t3.querySelectorAll) == null ? void 0 : _a2.call(t3, `[${a}]`).forEach(d);
      }));
    }
  }), o.observe(document.body, {
    attributes: true,
    attributeFilter: [a],
    childList: true,
    subtree: true
  });
}
function p() {
  i.forEach((e2) => {
    var _a2;
    return (_a2 = e2.destroy) == null ? void 0 : _a2.call(e2);
  }), i.clear(), o == null ? void 0 : o.disconnect(), o = null;
}
export {
  r as Tooltip,
  p as clearTooltip,
  s as initTooltip
};
//# sourceMappingURL=@noistommy_nt-tooltip.js.map
