import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { F as FeedbackForm } from './FeedbackForm-CaXsU_ag.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
import 'gsap';
import '../_/ScrollTrigger.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

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

export { contacts as default };
//# sourceMappingURL=contacts-CfL_qLkb.mjs.map
