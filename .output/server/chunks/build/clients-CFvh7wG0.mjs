import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { F as FeedbackForm } from './FeedbackForm-CaXsU_ag.mjs';
import { ref, useSSRContext } from 'vue';
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
  __name: "clients",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      { name: "C7Cybersecurity", src: "/companys/C7Cybersecurity.png" },
      { name: "tradevisa", src: "/companys/tradevisa.png" },
      {
        name: "auto-zone-control-systems",
        src: "/companys/auto-zone-control-systems-logo-vector.png"
      },
      { name: "caz", src: "/companys/caz.png" },
      { name: "beta-tea", src: "/companys/beta-tea-logo.png" },
      { name: "islohot", src: "/companys/islohot.png" },
      { name: "mela", src: "/companys/mela.png" },
      { name: "samsung", src: "/companys/samsung.png" },
      { name: "veva", src: "/companys/veva.png" },
      { name: "agroport", src: "/companys/agroport.png" },
      { name: "artel", src: "/companys/artel.png" },
      { name: "akfa", src: "/companys/akfa.png" }
    ];
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="clients" data-v-006cd4f9><div class="page-container" data-v-006cd4f9><div class="wrap" data-v-006cd4f9><h1 class="title" data-v-006cd4f9>\u0412\u0441\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B\xA0DevX</h1><h4 class="subtitle" data-v-006cd4f9>\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432:</h4><div class="box grid" data-v-006cd4f9><div class="company-grid" data-v-006cd4f9><!--[-->`);
      ssrRenderList(companies, (company, idx) => {
        _push(`<div class="company-card" data-v-006cd4f9><div class="logo-wrap" data-v-006cd4f9><img${ssrRenderAttr("src", company.src)}${ssrRenderAttr("alt", company.name)} data-v-006cd4f9></div><div class="company-name" data-v-006cd4f9>${ssrInterpolate(company.name)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clients = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-006cd4f9"]]);

export { clients as default };
//# sourceMappingURL=clients-CFvh7wG0.mjs.map
