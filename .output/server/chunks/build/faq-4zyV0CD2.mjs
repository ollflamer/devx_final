import { A as AppButton } from './AppButton-BaRY-lmd.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { gsap } from 'gsap';
import { _ as _export_sfc } from './server.mjs';
import { F as FeedbackForm } from './FeedbackForm-CaXsU_ag.mjs';
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
import 'vue-router';
import '../_/ScrollTrigger.mjs';

const _sfc_main$1 = {
  name: "FaqAccordion",
  data() {
    return {
      faqItems: [
        {
          question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043B\u0435\u043D\u0434\u0438\u043D\u0433?",
          answer: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433 (Landing Page) \u2014 \u044D\u0442\u043E \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438: \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430, \u0441\u0431\u043E\u0440\u0430 \u0437\u0430\u044F\u0432\u043E\u043A \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0430\u043A\u0446\u0438\u0438. \u041E\u043D \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u0443\u0435\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438.",
          isOpen: false
        },
        {
          question: "\u0427\u0435\u043C \u043B\u0435\u043D\u0434\u0438\u043D\u0433 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430?",
          answer: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0430 \u2013 \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438.",
          isOpen: false
        },
        {
          question: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0443\u0436\u043D\u043E \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0430?",
          answer: "\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043D\u043E \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C 2-3 \u0434\u043D\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044E.",
          isOpen: false
        },
        {
          question: "\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043B\u0435\u043D\u0434\u0438\u043D\u0433 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430?",
          answer: "\u0414\u0430, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u043E\u043D \u043B\u0435\u0433\u043A\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438 \u0434\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F.",
          isOpen: false
        },
        {
          question: "\u041A\u0430\u043A \u043B\u0435\u043D\u0434\u0438\u043D\u0433 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438?",
          answer: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0447\u0435\u0442\u043A\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435, \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u0435 \u043D\u0430 \u043E\u0444\u0444\u0435\u0440\u0435 \u0438 \u043F\u0440\u0438\u0437\u044B\u0432\u0430\u043C \u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E.",
          isOpen: false
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.faqItems.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false;
        }
      });
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
    },
    enterAnimation(el) {
      gsap.set(el, { height: 0, opacity: 0 });
      const fullHeight = el.scrollHeight;
      gsap.to(el, {
        duration: 0.3,
        height: fullHeight,
        opacity: 1,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(el, { height: "auto" });
        }
      });
    },
    // Добавляем колбэк done, чтобы Vue Transition дождался завершения анимации
    leaveAnimation(el, done) {
      const currentHeight = el.scrollHeight;
      gsap.set(el, { height: currentHeight, opacity: 1 });
      gsap.to(el, {
        duration: 0.3,
        height: 0,
        opacity: 0,
        ease: "power2.out",
        onComplete: done
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-accordion" }, _attrs))} data-v-3ad595d2><section class="faq-title" data-v-3ad595d2><h1 data-v-3ad595d2>\u041E\u0442\u0432\u0435\u0442\u044B\xA0\u043D\u0430 \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h1><h3 data-v-3ad595d2>\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0436, \u0437\u0430\u044F\u0432\u043E\u043A \u0438\u043B\u0438 \u0430\u043A\u0446\u0438\u0439. \u0424\u043E\u043A\u0443\u0441\u0438\u0440\u0443\u0435\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0446\u0435\u043B\u0438, \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E. \u0418\u0434\u0435\u0430\u043B\u0435\u043D \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</h3></section><!--[-->`);
  ssrRenderList($data.faqItems, (item, index) => {
    _push(`<div class="faq-item" data-v-3ad595d2><button class="faq-question" data-v-3ad595d2>${ssrInterpolate(item.question)} <span class="${ssrRenderClass([{ open: item.isOpen }, "faq-icon"])}" data-v-3ad595d2><svg width="40" height="40" viewBox="0 0 24 24" data-v-3ad595d2><path d="M12 5v14M5 12h14" stroke="var(--btn2-color-text)" stroke-width="2" stroke-linecap="round" data-v-3ad595d2></path></svg></span></button><div style="${ssrRenderStyle(item.isOpen ? null : { display: "none" })}" class="faq-answer" data-v-3ad595d2><p data-v-3ad595d2>${ssrInterpolate(item.answer)}</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faqs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Faqs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3ad595d2"]]);
const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = AppButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-db62f5e5><section class="hero" data-v-db62f5e5><div class="hero__wrap" data-v-db62f5e5><div class="hero__title" data-v-db62f5e5><h2 data-v-db62f5e5>\u041B\u0435\u043D\u0434\u0438\u043D\u0433\u0438 (Landing Page)</h2><p data-v-db62f5e5> \u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0436, \u0437\u0430\u044F\u0432\u043E\u043A \u0438\u043B\u0438 \u0430\u043A\u0446\u0438\u0439. \u0424\u043E\u043A\u0443\u0441\u0438\u0440\u0443\u0435\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0446\u0435\u043B\u0438, \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E. \u0418\u0434\u0435\u0430\u043B\u0435\u043D \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. </p><div class="hero__title-buttons" data-v-db62f5e5>`);
      _push(ssrRenderComponent(_component_AppButton, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442`);
          } else {
            return [
              createTextVNode("\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppButton, { type: "2" }, {
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
      _push(`</div></div><div class="hero__main-img" data-v-db62f5e5><div class="hero__img" data-v-db62f5e5></div></div></div></section>`);
      _push(ssrRenderComponent(Faqs, null, null, _parent));
      _push(ssrRenderComponent(FeedbackForm, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db62f5e5"]]);

export { faq as default };
//# sourceMappingURL=faq-4zyV0CD2.mjs.map
