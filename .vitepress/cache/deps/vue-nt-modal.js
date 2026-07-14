import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  inject,
  mergeProps,
  nextTick,
  normalizeProps,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderList,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  withCtx
} from "./chunk-XV6CE6JT.js";

// node_modules/vue-nt-modal/dist/nt-modal.es.js
var w = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [s, l] of t)
    e[s] = l;
  return e;
};
var z = (o) => (pushScopeId("data-v-9f74708e"), o = o(), popScopeId(), o);
var D = { class: "nt-modal-container" };
var K = { class: "modal-header" };
var R = { class: "title" };
var F = z(() => createBaseVNode("i", { class: "xi-close" }, null, -1));
var U = [
  F
];
var q = {
  __name: "NtModal",
  props: {
    id: Number,
    comp: {
      type: Object,
      default: () => ({})
    },
    options: Object,
    props: Object
  },
  emits: ["close"],
  setup(o, { emit: t }) {
    const e = o, s = inject("$ntModal"), l = ref(false), i = ref(null), r = (a) => {
      M(a);
    }, m = computed(() => ({ "--offset": `${e.id % 5 * e.options.offset}px` }));
    onMounted(() => {
      i.value = e.comp, nextTick(() => l.value = i.value), e.options.escapeToClose && window.addEventListener("keydown", r);
    }), onUnmounted(() => {
      window.removeEventListener("keydown", r);
    });
    const d = () => {
      t("close"), s.close(e.id);
    }, M = (a) => {
      console.log(a), (a.keyCode || a.which) === 27 && d();
    }, O = (a) => {
      e.options.clickToClose && a.target.className.indexOf("background") > -1 && s.close(e.id);
    };
    return (a, $) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        l.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "nt-modal",
          style: normalizeStyle(m.value)
        }, [
          createBaseVNode("div", {
            class: "nt-modal-background",
            onClick: O
          }),
          createBaseVNode("div", D, [
            (openBlock(), createBlock(resolveDynamicComponent(i.value), mergeProps({ "modal-id": o.id }, e.props, { onClose: d }), {
              header: withCtx(() => [
                createBaseVNode("div", K, [
                  createBaseVNode("div", R, toDisplayString(e.props.title), 1),
                  createBaseVNode("div", {
                    class: "close-btn",
                    onClick: d
                  }, U)
                ])
              ]),
              _: 1
            }, 16, ["modal-id"]))
          ])
        ], 4)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
};
var G = w(q, [["__scopeId", "data-v-9f74708e"]]);
var H = createBaseVNode("div", { class: "nt-modal-background" }, null, -1);
var J = { class: "nt-modal-container" };
var Q = { class: "modal confirm" };
var W = { class: "modal-header" };
var X = { class: "title" };
var Y = createBaseVNode("i", { class: "xi-close" }, null, -1);
var Z = [
  Y
];
var oo = { class: "modal-contents" };
var eo = { class: "contents" };
var to = { class: "modal-footer align-right" };
var so = {
  __name: "NtConfirm",
  props: {
    id: Number,
    options: Object,
    props: Object
  },
  emits: ["close"],
  setup(o, { emit: t }) {
    const e = inject("$ntModal"), s = () => {
      e.closeAll();
    }, l = () => {
      t("close"), e.close();
    };
    return (i, r) => (openBlock(), createElementBlock("div", {
      class: "nt-confirm",
      style: normalizeStyle({ "--offset": `${o.id % 5 * 20}px` })
    }, [
      H,
      createBaseVNode("div", J, [
        createBaseVNode("div", Q, [
          createBaseVNode("div", W, [
            createBaseVNode("div", X, toDisplayString(o.props.title), 1),
            createBaseVNode("div", {
              class: "close-btn",
              onClick: l
            }, Z)
          ]),
          createBaseVNode("div", oo, [
            createBaseVNode("div", eo, [
              createBaseVNode("div", null, toDisplayString(o.props.description), 1)
            ])
          ]),
          createBaseVNode("div", to, [
            createBaseVNode("button", {
              class: "nt-button text",
              onClick: l
            }, toDisplayString(o.props.nText || "Cancel"), 1),
            createBaseVNode("button", {
              class: "nt-button primary",
              onClick: s
            }, toDisplayString(o.props.pText || "Confirm"), 1)
          ])
        ])
      ])
    ], 4));
  }
};
var no = {
  name: "NtTeleport",
  components: { NtModal: G, NtConfirm: so },
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isOpen: false,
      modalRef: [],
      modalIndex: 0
    };
  },
  computed: {
    isModals() {
      return this.modalRef.length > 0;
    }
  },
  mounted() {
    const o = inject("$ntModal"), { emitter: t } = o;
    t.on("show-modal", (e) => {
      e.id = this.modalIndex, e.options = { ...this.options, ...e.options }, e.options.useStack ? (this.modalRef.push(e), this.modalIndex++) : (this.modalRef[0] = e, this.modalIndex = 0), document.body.style.overflow = "hidden";
    }), t.on("close-modal", (e) => {
      this.modalRef.pop(), this.modalIndex > 0 && this.modalIndex--, document.body.style.overflow = "";
    }), t.on("close-all-modal", () => {
      this.isOpen = false, this.modalRef = [], this.modalIndex = 0, document.body.style.overflow = "";
    });
  },
  methods: {
    toggleMode() {
      this.isOpen = !this.isOpen;
    }
  }
};
var lo = {
  key: 0,
  class: "nt-modals"
};
function co(o, t, e, s, l, i) {
  const r = resolveComponent("nt-confirm"), m = resolveComponent("nt-modal");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    i.isModals ? (openBlock(), createElementBlock("div", lo, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(l.modalRef, (d) => (openBlock(), createElementBlock(Fragment, {
        key: d.id
      }, [
        d.comp === "confirm" ? (openBlock(), createBlock(r, normalizeProps(mergeProps({ key: 0 }, d)), null, 16)) : (openBlock(), createBlock(m, mergeProps({
          key: 1,
          title: "Test"
        }, d), null, 16))
      ], 64))), 128))
    ])) : createCommentVNode("", true)
  ]);
}
var io = w(no, [["render", co]]);
function ao(o) {
  return { all: o = o || /* @__PURE__ */ new Map(), on: function(t, e) {
    var s = o.get(t);
    s ? s.push(e) : o.set(t, [e]);
  }, off: function(t, e) {
    var s = o.get(t);
    s && (e ? s.splice(s.indexOf(e) >>> 0, 1) : o.set(t, []));
  }, emit: function(t, e) {
    var s = o.get(t);
    s && s.slice().map(function(l) {
      l(e);
    }), (s = o.get("*")) && s.slice().map(function(l) {
      l(t, e);
    });
  } };
}
var ro = {
  useStack: true,
  clickToClose: false,
  escapeToClose: false,
  offset: 20
};
var C = {};
var mo = (o) => ({ ...ro, ...o });
var po = () => {
  const o = ao();
  return { show: ({ comp: l, props: i, options: r, handler: m }) => {
    o.emit("show-modal", { comp: l, props: i, options: r, handler: m });
  }, close: (l) => {
    o.emit("close-modal", l);
  }, closeAll: () => {
    o.emit("close-all-modal");
  }, emitter: o };
};
var _o = {
  install(o, t = {}) {
    o.provide("$ntModal", po()), C = mo(t);
    const e = { extends: io, props: { options: { type: Object, default: () => C } } };
    o.component("NtTeleport", e);
  }
};
export {
  _o as default
};
//# sourceMappingURL=vue-nt-modal.js.map
