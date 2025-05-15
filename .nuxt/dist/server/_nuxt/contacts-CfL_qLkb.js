import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { F as FeedbackForm } from "./FeedbackForm-CaXsU_ag.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "vue-router";
import "gsap";
import "gsap/ScrollTrigger.js";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/hookable/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/unctx/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/h3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/radix3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/defu/dist/defu.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`<div class="google__map" data-v-d2da74d1><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d750.5462282721593!2d69.24626726965434!3d41.195942007337706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDExJzQ1LjQiTiA2OcKwMTQnNDguOSJF!5e0!3m2!1sru!2s!4v1746799908874!5m2!1sru!2s" width="100%" height="700" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-d2da74d1></iframe></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2da74d1"]]);
export {
  contacts as default
};
//# sourceMappingURL=contacts-CfL_qLkb.js.map
