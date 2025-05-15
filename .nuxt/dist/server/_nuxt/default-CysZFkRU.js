import { _ as __nuxt_component_0 } from "./nuxt-link-BEm_uJn0.js";
import { mergeProps, ref, computed, watch, useSSRContext, defineComponent, createElementBlock, getCurrentInstance, provide, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useAutoAnimate } from "@formkit/auto-animate/vue";
import { useRoute } from "vue-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/hookable/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/klona/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/defu/dist/defu.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/unctx/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/h3/dist/index.mjs";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/radix3/dist/index.mjs";
gsap.registerPlugin(ScrollTrigger);
const _sfc_main$1 = {
  name: "Footer",
  setup() {
    const footerSection = ref(null);
    const footerLine = ref(null);
    const footerColumn1 = ref(null);
    const footerColumn2 = ref(null);
    const footerColumn3 = ref(null);
    const footerBottom = ref(null);
    const route = useRoute();
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    const animateFooter = () => {
      if (!footerSection.value || !footerLine.value || !footerColumn1.value || !footerColumn2.value || !footerColumn3.value || !footerBottom.value) return;
      gsap.set(footerLine.value, { width: 0 });
      gsap.set([footerColumn1.value, footerColumn2.value, footerColumn3.value], {
        y: 30,
        opacity: 0
      });
      gsap.set(footerBottom.value, {
        y: 20,
        opacity: 0
      });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerSection.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      timeline.to(footerLine.value, {
        width: "100%",
        duration: 1,
        ease: "power2.out"
      });
      timeline.to([footerColumn1.value, footerColumn2.value, footerColumn3.value], {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
      timeline.to(footerBottom.value, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");
    };
    watch(() => route.fullPath, () => {
      console.log("Route changed, reinitializing footer animation");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setTimeout(() => {
        animateFooter();
      }, 300);
    });
    return {
      currentYear,
      footerSection,
      footerLine,
      footerColumn1,
      footerColumn2,
      footerColumn3,
      footerBottom
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "footer",
    ref: "footerSection"
  }, _attrs))} data-v-e3dc891d><div class="footer-line" data-v-e3dc891d></div><div class="footer-container" data-v-e3dc891d><div class="footer-content" data-v-e3dc891d><div class="footer-column" data-v-e3dc891d><h3 data-v-e3dc891d>Контактная информация</h3><ul data-v-e3dc891d><li data-v-e3dc891d>Адрес: Тошкент шахар Янгихаёт тумани ул. Райхон, дом F 03-2158 </li><li data-v-e3dc891d>Телефон: <a href="tel:+998941452332" data-v-e3dc891d> +998 94 145 23 32</a></li><li data-v-e3dc891d>Email: <a href="devx.brand@gmail.com" data-v-e3dc891d> devx.brand@gmail.com</a></li><li data-v-e3dc891d>Режим работы: Пн-Пт: 9:00 - 18:00</li></ul></div><div class="footer-column" data-v-e3dc891d><h3 data-v-e3dc891d>Мы в соцсетях</h3><ul data-v-e3dc891d><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Telegram</a></li><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Instagram</a></li></ul></div><div class="footer-column" data-v-e3dc891d><h3 data-v-e3dc891d>Быстрые ссылки</h3><ul data-v-e3dc891d><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Главная</a></li><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Услуги</a></li><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Портфолио</a></li><li data-v-e3dc891d><a href="#" data-v-e3dc891d>О нас</a></li><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Блог</a></li><li data-v-e3dc891d><a href="#" data-v-e3dc891d>Контакты</a></li><li data-v-e3dc891d><a href="/faq" data-v-e3dc891d>FAQ</a></li></ul></div></div><div class="footer-bottom" data-v-e3dc891d><p class="footer-legal" data-v-e3dc891d>Юридическая информация</p><p class="footer-copyright" data-v-e3dc891d>©${ssrInterpolate($setup.currentYear)} DevX. Все права защищены · <a href="#" data-v-e3dc891d>Политика конфиденциальности</a> · <a href="#" data-v-e3dc891d>Пользовательское соглашение</a></p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e3dc891d"]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const logoImg = "data:image/png;base64,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";
const tgImg = publicAssetsURL("/TG.png");
const themeImg = publicAssetsURL("/Theme.png");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const logoImage = ref(logoImg);
    const tgImage = ref(tgImg);
    const themeImage = ref(themeImg);
    const vAutoAnimate = useAutoAnimate({
      duration: 300,
      easing: "ease-in-out"
    });
    const mobileMenuOpen = ref(false);
    const isClosing = ref(false);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const closeMobileMenu = () => {
      isClosing.value = true;
      setTimeout(() => {
        mobileMenuOpen.value = false;
        isClosing.value = false;
        (void 0).body.style.overflow = "";
      }, 500);
    };
    ref("white");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col app-container" }, _attrs))} data-v-4a93b5b6><header class="header" data-v-4a93b5b6><div class="header-container" data-v-4a93b5b6><div${ssrRenderAttrs(mergeProps({ class: "logo" }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-4a93b5b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", logoImage.value)} alt="DevX" class="dark:invert" data-v-4a93b5b6${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: logoImage.value,
                alt: "DevX",
                class: "dark:invert"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav${ssrRenderAttrs(mergeProps({ class: "nav" }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-4a93b5b6><li data-v-4a93b5b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/clients" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Клиенты`);
          } else {
            return [
              createTextVNode("Клиенты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4a93b5b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/licenses" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Лицензии`);
          } else {
            return [
              createTextVNode("Лицензии")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4a93b5b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`О компании`);
          } else {
            return [
              createTextVNode("О компании")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4a93b5b6>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contacts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Контакты`);
          } else {
            return [
              createTextVNode("Контакты")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></nav><div${ssrRenderAttrs(mergeProps({ class: "contacts" }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-4a93b5b6><a href="tel:+998941452332" data-v-4a93b5b6>+998941452332</a><a id="tg" href="#" data-v-4a93b5b6><img${ssrRenderAttr("src", tgImage.value)} alt="Telegram" data-v-4a93b5b6></a><button id="theme-toggle" data-v-4a93b5b6><img${ssrRenderAttr("src", themeImage.value)} alt="Theme Toggle" data-v-4a93b5b6></button></div><div class="theme-animation-container" data-v-4a93b5b6><svg class="comet-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" preserveAspectRatio="none" data-v-4a93b5b6><defs data-v-4a93b5b6><linearGradient id="cometTailDark" x1="0%" y1="0%" x2="100%" y2="0%" data-v-4a93b5b6><stop offset="0%" stop-color="#00ffff" stop-opacity="1" data-v-4a93b5b6></stop><stop offset="40%" stop-color="#4169e1" stop-opacity="0.8" data-v-4a93b5b6></stop><stop offset="100%" stop-color="#ffffff" stop-opacity="0" data-v-4a93b5b6></stop></linearGradient><linearGradient id="cometTailLight" x1="0%" y1="0%" x2="100%" y2="0%" data-v-4a93b5b6><stop offset="0%" stop-color="#000000" stop-opacity="1" data-v-4a93b5b6></stop><stop offset="40%" stop-color="#333333" stop-opacity="0.8" data-v-4a93b5b6></stop><stop offset="100%" stop-color="#666666" stop-opacity="0" data-v-4a93b5b6></stop></linearGradient><filter id="glowDark" x="-50%" y="-50%" width="200%" height="200%" data-v-4a93b5b6><feGaussianBlur stdDeviation="6" result="blur" data-v-4a93b5b6></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-4a93b5b6></feComposite></filter><filter id="glowLight" x="-50%" y="-50%" width="200%" height="200%" data-v-4a93b5b6><feGaussianBlur stdDeviation="3" result="blur" data-v-4a93b5b6></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-4a93b5b6></feComposite></filter></defs><g class="comet-dark-theme" data-v-4a93b5b6><path class="comet-tail" d="M20,25 L-230,25" stroke="url(#cometTailDark)" stroke-width="15" stroke-linecap="round" data-v-4a93b5b6></path><path d="M20,25 L-180,15" stroke="url(#cometTailDark)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-4a93b5b6></path><path d="M20,25 L-180,35" stroke="url(#cometTailDark)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-4a93b5b6></path><circle class="comet-head" cx="20" cy="25" r="12" fill="#ffffff" filter="url(#glowDark)" data-v-4a93b5b6></circle></g><g class="comet-light-theme" data-v-4a93b5b6><path class="comet-tail" d="M20,25 L-230,25" stroke="url(#cometTailLight)" stroke-width="15" stroke-linecap="round" data-v-4a93b5b6></path><path d="M20,25 L-180,15" stroke="url(#cometTailLight)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-4a93b5b6></path><path d="M20,25 L-180,35" stroke="url(#cometTailLight)" stroke-width="5" stroke-linecap="round" opacity="0.7" data-v-4a93b5b6></path><circle class="comet-head" cx="20" cy="25" r="12" fill="#000000" filter="url(#glowLight)" data-v-4a93b5b6></circle></g></svg><div style="${ssrRenderStyle({ "display": "none" })}" data-v-4a93b5b6><svg id="star-template-dark" viewBox="0 0 24 24" width="100%" height="100%" data-v-4a93b5b6><path d="M12,1.5l2.4,7.4h7.8l-6.3,4.6l2.4,7.4L12,16.3l-6.3,4.6l2.4-7.4L1.8,8.9h7.8L12,1.5z" fill="#00ffff" data-v-4a93b5b6></path><filter id="star-glow-dark" data-v-4a93b5b6><feGaussianBlur stdDeviation="1" result="blur" data-v-4a93b5b6></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-4a93b5b6></feComposite></filter></svg><svg id="star-template-light" viewBox="0 0 24 24" width="100%" height="100%" data-v-4a93b5b6><path d="M12,1.5l2.4,7.4h7.8l-6.3,4.6l2.4,7.4L12,16.3l-6.3,4.6l2.4-7.4L1.8,8.9h7.8L12,1.5z" fill="#000000" data-v-4a93b5b6></path><filter id="star-glow-light" data-v-4a93b5b6><feGaussianBlur stdDeviation="1" result="blur" data-v-4a93b5b6></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over" data-v-4a93b5b6></feComposite></filter></svg></div><div class="comet-trail" data-v-4a93b5b6></div><div class="stars-container" data-v-4a93b5b6><!--[-->`);
      ssrRenderList(20, (n) => {
        _push(`<div class="${ssrRenderClass([`star-${n}`, "star"])}" data-v-4a93b5b6></div>`);
      });
      _push(`<!--]--></div></div><div class="header__burger-menu" data-v-4a93b5b6><div class="burger-icon" data-v-4a93b5b6></div></div></div><div class="header-indicator" data-v-4a93b5b6><div class="header-line" data-v-4a93b5b6></div><div class="header-triangle" data-v-4a93b5b6></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["mobile-menu", { "closing": isClosing.value }]
        }, ssrGetDirectiveProps(_ctx, unref(vAutoAnimate))))} data-v-4a93b5b6><nav class="mobile-nav" data-v-4a93b5b6><li data-v-4a93b5b6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/orders"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Заказы`);
            } else {
              return [
                createTextVNode("Заказы")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-4a93b5b6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/licenses"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Лицензии`);
            } else {
              return [
                createTextVNode("Лицензии")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-4a93b5b6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`О компании`);
            } else {
              return [
                createTextVNode("О компании")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-4a93b5b6>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          onClick: closeMobileMenu,
          to: "/contacts"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Контакты`);
            } else {
              return [
                createTextVNode("Контакты")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></nav><div class="mobile-contacts" data-v-4a93b5b6><a href="tel:+998941452332" data-v-4a93b5b6>+998941452332</a><a id="mobile-tg" href="#" data-v-4a93b5b6><img${ssrRenderAttr("src", tgImage.value)} alt="Telegram" data-v-4a93b5b6></a><button id="mobile-theme-toggle" data-v-4a93b5b6><img${ssrRenderAttr("src", themeImage.value)} alt="Theme Toggle" data-v-4a93b5b6></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="flex-grow main-content" data-v-4a93b5b6>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a93b5b6"]]);
export {
  _default as default
};
//# sourceMappingURL=default-CysZFkRU.js.map
