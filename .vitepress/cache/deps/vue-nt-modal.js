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
var w = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [s, l] of e)
    t[s] = l;
  return t;
};
var z = (o) => (pushScopeId("data-v-abd989fb"), o = o(), popScopeId(), o);
var D = { class: "nt-modal-container" };
var K = { class: "modal-header" };
var F = { class: "title" };
var R = z(() => createBaseVNode("i", { class: "xi-close" }, null, -1));
var U = [
  R
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
  setup(o, { emit: e }) {
    const t = o, s = inject("$ntModal"), l = ref(false), i = ref(null), r = (a) => {
      M(a);
    }, p = computed(() => ({ "--offset": `${t.id % 5 * t.options.offset}px` }));
    onMounted(() => {
      i.value = t.comp, nextTick(() => l.value = i.value), t.options.escapeToClose && window.addEventListener("keydown", r);
    }), onUnmounted(() => {
      window.removeEventListener("keydown", r);
    });
    const d = () => {
      e("close"), s.close(t.id);
    }, M = (a) => {
      console.log(a), (a.keyCode || a.which) === 27 && d();
    }, O = (a) => {
      t.options.clickToClose && a.target.className.indexOf("background") > -1 && s.close(t.id);
    };
    return (a, $) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        l.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "nt-modal",
          style: normalizeStyle(p.value)
        }, [
          createBaseVNode("div", {
            class: "nt-modal-background",
            onClick: O
          }),
          createBaseVNode("div", D, [
            (openBlock(), createBlock(resolveDynamicComponent(i.value), mergeProps({ "modal-id": o.id }, t.props, { onClose: d }), {
              header: withCtx(() => [
                createBaseVNode("div", K, [
                  createBaseVNode("div", F, toDisplayString(t.props.title), 1),
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
var G = w(q, [["__scopeId", "data-v-abd989fb"]]);
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
var to = { class: "contents" };
var eo = { class: "modal-footer align-right" };
var so = {
  __name: "NtConfirm",
  props: {
    id: Number,
    options: Object,
    props: Object
  },
  emits: ["close"],
  setup(o, { emit: e }) {
    const t = inject("$ntModal"), s = () => {
      t.closeAll();
    }, l = () => {
      e("close"), t.close();
    };
    return (i, r) => (openBlock(), createElementBlock("div", {
      class: "nt-modal",
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
            createBaseVNode("div", to, [
              createBaseVNode("div", null, toDisplayString(o.props.description), 1)
            ])
          ]),
          createBaseVNode("div", eo, [
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
    const o = inject("$ntModal"), { emitter: e } = o;
    e.on("show-modal", (t) => {
      t.id = this.modalIndex, t.options = { ...this.options, ...t.options }, console.log(t.options), t.options.useStack ? (this.modalRef.push(t), this.modalIndex++) : (this.modalRef[0] = t, this.modalIndex = 0), document.body.style.overflow = "hidden";
    }), e.on("close-modal", (t) => {
      this.modalRef.pop(), this.modalIndex > 0 && this.modalIndex--, document.body.style.overflow = "";
    }), e.on("close-all-modal", () => {
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
function co(o, e, t, s, l, i) {
  const r = resolveComponent("nt-confirm"), p = resolveComponent("nt-modal");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    i.isModals ? (openBlock(), createElementBlock("div", lo, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(l.modalRef, (d) => (openBlock(), createElementBlock(Fragment, {
        key: d.id
      }, [
        d.comp === "confirm" ? (openBlock(), createBlock(r, normalizeProps(mergeProps({ key: 0 }, d)), null, 16)) : (openBlock(), createBlock(p, mergeProps({
          key: 1,
          title: "Test"
        }, d), null, 16))
      ], 64))), 128))
    ])) : createCommentVNode("", true)
  ]);
}
var io = w(no, [["render", co]]);
function ao(o) {
  return { all: o = o || /* @__PURE__ */ new Map(), on: function(e, t) {
    var s = o.get(e);
    s ? s.push(t) : o.set(e, [t]);
  }, off: function(e, t) {
    var s = o.get(e);
    s && (t ? s.splice(s.indexOf(t) >>> 0, 1) : o.set(e, []));
  }, emit: function(e, t) {
    var s = o.get(e);
    s && s.slice().map(function(l) {
      l(t);
    }), (s = o.get("*")) && s.slice().map(function(l) {
      l(e, t);
    });
  } };
}
var ro = {
  useStack: true,
  clickToClose: false,
  escapeToClose: false,
  offset: 20
};
var k = {};
var po = (o) => ({ ...ro, ...o });
var mo = () => {
  const o = ao();
  return { show: ({ comp: l, props: i, options: r, handler: p }) => {
    o.emit("show-modal", { comp: l, props: i, options: r, handler: p });
  }, close: (l) => {
    o.emit("close-modal", l);
  }, closeAll: () => {
    o.emit("close-all-modal");
  }, emitter: o };
};
var _o = {
  install(o, e = {}) {
    o.provide("$ntModal", mo()), k = po(e);
    const t = { extends: io, props: { options: { type: Object, default: () => k } } };
    o.component("NtTeleport", t);
  }
};
export {
  _o as default
};
//# sourceMappingURL=vue-nt-modal.js.map
