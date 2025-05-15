import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import gsap from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
import { A as AppButton } from './AppButton-BaRY-lmd.mjs';
import { C as CompanyNumbers, T as TeamSlider } from './CompanyNumbers-DSBW4_1d.mjs';
import { F as FeedbackForm } from './FeedbackForm-CaXsU_ag.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-1eede774><main class="main-section" data-v-1eede774><div class="particles-container" data-v-1eede774></div><div class="triangle-effect" data-v-1eede774><div class="triangle-glow" data-v-1eede774></div><img${ssrRenderAttr("src", "/bg_treugol.png")} alt="" data-v-1eede774></div><div class="main-punkitir" data-v-1eede774><img class="main-punkitir-img"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></div><div class="main-container" data-v-1eede774><div class="main-rectangle" data-v-1eede774><h1 data-v-1eede774>\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432<br data-v-1eede774>\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434 \u0432\u0430\u0441</h1><p data-v-1eede774>\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0440\u0430\u0441\u0442\u0438 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</p></div></div></main><section class="about-section" data-v-1eede774><div class="about-container" data-v-1eede774><h2 data-v-1eede774>\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u043E \u043D\u0430\u0441</h2><h3 data-v-1eede774>\u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0430\u0439\u0442\u044B, \u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0443\u0441\u043F\u0435\u0445\u0430</h3><p data-v-1eede774>\u0421\u043E\u0437\u0434\u0430\u0451\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0440\u0430\u0441\u0442\u0438 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</p><div class="about-btn" data-v-1eede774>`);
      _push(ssrRenderComponent(AppButton, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043D\u0430\u0441`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043D\u0430\u0441")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppButton, { type: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="about-lines" data-v-1eede774></div></section>`);
      _push(ssrRenderComponent(CompanyNumbers, null, null, _parent));
      _push(`<section class="uslugi" data-v-1eede774><div class="mirror" data-v-1eede774></div><div class="uslugi-container" data-v-1eede774><div class="uslugi-text" data-v-1eede774><h2 data-v-1eede774>\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438</h2><p data-v-1eede774>\u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F<br data-v-1eede774> \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F. \u0412\u043E\u0442 \u0447\u0442\u043E \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u043B\u044F \u0432\u0430\u0441:</p></div><div class="uslugi-grid-container" data-v-1eede774><div class="grid-uslugi" data-v-1eede774><div class="button-spray" data-v-1eede774></div><div class="grid-item-uslugi" data-v-1eede774><div class="grid-item-uslgi-text-div" data-v-1eede774><h3 data-v-1eede774>\u041B\u0435\u043D\u0434\u0438\u043D\u0433\u0438 (Landing Page)</h3><p data-v-1eede774>\u0421\u0440\u043E\u043A: 1 \u043C\u0435\u0441\u044F\u0446</p></div><div class="grid-item-uslgi-description" data-v-1eede774><p data-v-1eede774>\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, \u0443\u0441\u043B\u0443\u0433\u0438 \u0438\u043B\u0438 \u0430\u043A\u0446\u0438\u0438. \u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043D\u0430 \u043E\u0434\u043D\u0443 \u0446\u0435\u043B\u044C: \u0437\u0430\u044F\u0432\u043A\u0430, \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A.</p></div><button class="grid-item-uslgi-arrow-button" data-v-1eede774><img class="grid-item-uslgi-arrow"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></button></div></div><div class="grid-uslugi" data-v-1eede774><div class="button-spray" data-v-1eede774></div><div class="grid-item-uslugi" data-v-1eede774><div class="grid-item-uslgi-text-div" data-v-1eede774><h3 data-v-1eede774>\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B</h3><p data-v-1eede774>\u0421\u0440\u043E\u043A: 1 \u043C\u0435\u0441\u044F\u0446</p></div><div class="grid-item-uslgi-description" data-v-1eede774><p data-v-1eede774>\u041C\u043D\u043E\u0433\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B \u0434\u043B\u044F \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0438\u043C\u0438\u0434\u0436\u0430 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.</p></div><button class="grid-item-uslgi-arrow-button" data-v-1eede774><img class="grid-item-uslgi-arrow"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></button></div></div><div class="grid-uslugi" data-v-1eede774><div class="button-spray" data-v-1eede774></div><div class="grid-item-uslugi" data-v-1eede774><div class="grid-item-uslgi-text-div" data-v-1eede774><h3 data-v-1eede774>\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B</h3><p data-v-1eede774>\u0421\u0440\u043E\u043A: 1 \u043C\u0435\u0441\u044F\u0446</p></div><div class="grid-item-uslgi-description" data-v-1eede774><p data-v-1eede774>\u041F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u0440\u043E\u0434\u0430\u0436. \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u043A\u043E\u0440\u0437\u0438\u043D\u0430, \u043E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430. \u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043B\u044E\u0431\u043E\u0433\u043E \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430.</p></div><button class="grid-item-uslgi-arrow-button" data-v-1eede774><img class="grid-item-uslgi-arrow"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></button></div></div><div class="grid-uslugi" data-v-1eede774><div class="button-spray" data-v-1eede774></div><div class="grid-item-uslugi" data-v-1eede774><div class="grid-item-uslgi-text-div" data-v-1eede774><h3 data-v-1eede774>\u0421\u0430\u0439\u0442\u044B-\u0432\u0438\u0437\u0438\u0442\u043A\u0438</h3><p data-v-1eede774>\u0421\u0440\u043E\u043A: 1 \u043C\u0435\u0441\u044F\u0446</p></div><div class="grid-item-uslgi-description" data-v-1eede774><p data-v-1eede774>\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0438\u043B\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B: \u0443\u0441\u043B\u0443\u0433\u0438, \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B.</p></div><button class="grid-item-uslgi-arrow-button" data-v-1eede774><img class="grid-item-uslgi-arrow"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></button></div></div><div class="grid-uslugi" data-v-1eede774><div class="button-spray" data-v-1eede774></div><div class="grid-item-uslugi" data-v-1eede774><div class="grid-item-uslgi-text-div" data-v-1eede774><h3 data-v-1eede774>\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</h3><p data-v-1eede774>\u0421\u0440\u043E\u043A: 1 \u043C\u0435\u0441\u044F\u0446</p></div><div class="grid-item-uslgi-description" data-v-1eede774><p data-v-1eede774>\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043E\u0442. \u0423\u0434\u043E\u0431\u043D\u0430\u044F \u0433\u0430\u043B\u0435\u0440\u0435\u044F, \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439.</p></div><button class="grid-item-uslgi-arrow-button" data-v-1eede774><img class="grid-item-uslgi-arrow"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></button></div></div><div class="grid-uslugi" data-v-1eede774><div class="button-spray" data-v-1eede774></div><div class="grid-item-uslugi" data-v-1eede774><div class="grid-item-uslgi-text-div" data-v-1eede774><h3 data-v-1eede774>\u041F\u0440\u043E\u043C\u043E-\u0441\u0430\u0439\u0442\u044B</h3><p data-v-1eede774>\u0421\u0440\u043E\u043A: 1 \u043C\u0435\u0441\u044F\u0446</p></div><div class="grid-item-uslgi-description" data-v-1eede774><p data-v-1eede774>\u0421\u0430\u0439\u0442\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0438\u043B\u0438 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432. \u042F\u0440\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438 \u0430\u043A\u0446\u0435\u043D\u0442 \u043D\u0430 \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438.</p></div><button class="grid-item-uslgi-arrow-button" data-v-1eede774><img class="grid-item-uslgi-arrow"${ssrRenderAttr("src", "")} alt="" data-v-1eede774></button></div></div></div></div></section>`);
      _push(ssrRenderComponent(TeamSlider, null, null, _parent));
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1eede774"]]);

export { index as default };
//# sourceMappingURL=index-CTh3XfpI.mjs.map
