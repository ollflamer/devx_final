import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/hookable/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/unctx/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/radix3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/defu/dist/defu.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)} data-v-485f54c9> В разработке </h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/licenses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const licenses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-485f54c9"]]);
export {
  licenses as default
};
//# sourceMappingURL=licenses-DWsnx_E3.js.map
