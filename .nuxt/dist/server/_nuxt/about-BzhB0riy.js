import { ref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { F as FeedbackForm } from "./FeedbackForm-CaXsU_ag.js";
import { C as CompanyNumbers, T as TeamSlider } from "./CompanyNumbers-DSBW4_1d.js";
import { A as AppButton } from "./AppButton-BaRY-lmd.js";
import { _ as _export_sfc } from "../server.mjs";
import "vue-router";
import "gsap";
import "gsap/ScrollTrigger.js";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/hookable/dist/index.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/unctx/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/h3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/radix3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/defu/dist/defu.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/ufo/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("Command.Cz1jwC24.png");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="page-container" data-v-bcf83666><section class="hero" data-v-bcf83666><div class="hero__container" data-v-bcf83666><h1 data-v-bcf83666>Создаем сайты, которые работают на ваш бизнес!</h1><h4 data-v-bcf83666> От концепции до реализации: профессиональная разработка, дизайн и поддержка для достижения ваших целей. </h4><div class="hero__buttons" data-v-bcf83666>`);
      _push(ssrRenderComponent(AppButton, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Подробнее о нас`);
          } else {
            return [
              createTextVNode("Подробнее о нас")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppButton, { type: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Заказать`);
          } else {
            return [
              createTextVNode("Заказать")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="about" data-v-bcf83666><div class="about__lines" data-v-bcf83666></div><div class="about__wrap" data-v-bcf83666><div class="about__container" data-v-bcf83666><h2 class="about__title" data-v-bcf83666>Немного о нас</h2><h3 class="about__subtitle" data-v-bcf83666>Мы создаем не просто сайты, а истории успеха</h3><p class="about__text" data-v-bcf83666>Создаём современные и удобные сайты, которые помогают вашему бизнесу расти и привлекать новых клиентов</p></div>`);
      _push(ssrRenderComponent(CompanyNumbers, null, null, _parent));
      _push(`</div></section><section class="team" data-v-bcf83666><img class="team__img"${ssrRenderAttr("src", _imports_0)} alt="team" data-v-bcf83666></section></div>`);
      _push(ssrRenderComponent(TeamSlider, null, null, _parent));
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bcf83666"]]);
export {
  about as default
};
//# sourceMappingURL=about-BzhB0riy.js.map
