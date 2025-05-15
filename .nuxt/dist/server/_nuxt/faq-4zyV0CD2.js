import { A as AppButton } from "./AppButton-BaRY-lmd.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { gsap } from "gsap";
import { _ as _export_sfc } from "../server.mjs";
import { F as FeedbackForm } from "./FeedbackForm-CaXsU_ag.js";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/hookable/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/unctx/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/radix3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/defu/dist/defu.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/ufo/dist/index.mjs";
import "gsap/ScrollTrigger.js";
const _sfc_main$1 = {
  name: "FaqAccordion",
  data() {
    return {
      faqItems: [
        {
          question: "Что такое лендинг?",
          answer: "Лендинг (Landing Page) — это одностраничный сайт, созданный для решения конкретной задачи: продажи продукта, сбора заявок или продвижения акции. Он фокусирует внимание пользователя на одном предложении.",
          isOpen: false
        },
        {
          question: "Чем лендинг отличается от обычного сайта?",
          answer: "Главная цель лендинга – сфокусировать внимание пользователя на конкретном предложении.",
          isOpen: false
        },
        {
          question: "Сколько времени нужно на создание лендинга?",
          answer: "Зависит от сложности, но в среднем 2-3 дня, включая базовую оптимизацию.",
          isOpen: false
        },
        {
          question: "Можно ли изменить лендинг после запуска?",
          answer: "Да, как правило, он легко редактируется и дорабатывается.",
          isOpen: false
        },
        {
          question: "Как лендинг помогает увеличить продажи?",
          answer: "Благодаря четкой структуре, фокусировке на оффере и призывам к действию.",
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-accordion" }, _attrs))} data-v-3ad595d2><section class="faq-title" data-v-3ad595d2><h1 data-v-3ad595d2>Ответы на часто задаваемые вопросы</h1><h3 data-v-3ad595d2>Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений.</h3></section><!--[-->`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-db62f5e5><section class="hero" data-v-db62f5e5><div class="hero__wrap" data-v-db62f5e5><div class="hero__title" data-v-db62f5e5><h2 data-v-db62f5e5>Лендинги (Landing Page)</h2><p data-v-db62f5e5> Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений. </p><div class="hero__title-buttons" data-v-db62f5e5>`);
      _push(ssrRenderComponent(_component_AppButton, { type: "1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Обсудить проект`);
          } else {
            return [
              createTextVNode("Обсудить проект")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppButton, { type: "2" }, {
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
export {
  faq as default
};
//# sourceMappingURL=faq-4zyV0CD2.js.map
