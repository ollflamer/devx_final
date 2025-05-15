import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  name: "AppButton",
  props: {
    type: {
      type: [Number, String],
      default: 1,
      validator: (value) => [1, 2, "1", "2"].includes(value)
    },
    className: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: [`btn${$props.type}`, $props.className]
  }, _attrs))} data-v-5764f6a4>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5764f6a4"]]);
export {
  AppButton as A
};
//# sourceMappingURL=AppButton-BaRY-lmd.js.map
