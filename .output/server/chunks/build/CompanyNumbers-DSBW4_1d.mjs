import { mergeProps, ref, useSSRContext } from 'vue';
import gsap from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = publicAssetsURL("/Vector-right.png");
const _imports_1 = publicAssetsURL("/Polygon.png");
const _imports_2 = publicAssetsURL("/human_line.png");
const _imports_3 = publicAssetsURL("/Vector-left.png");
gsap.registerPlugin(ScrollTrigger);
const _sfc_main$1 = {
  name: "TeamSlider",
  setup() {
    const teamSection = ref(null);
    const teamTitle = ref(null);
    const teamSlider = ref(null);
    const sliderContainer = ref(null);
    const sliderItems = ref([]);
    const leftArrow = ref(null);
    const rightArrow = ref(null);
    const currentIndex = ref(0);
    const isAnimating = ref(false);
    const isPulsing = ref(false);
    const teamMembers = ref([
      {
        name: "\u041A\u0443\u0447\u043A\u0430\u0440\u043E\u0432 \u041C\u0430\u043A\u0441\u0438\u043C",
        position: "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440",
        image: "/human.png"
      },
      {
        name: "\u0424\u043B\u043E\u0440\u0435\u043D\u043A\u043E \u0421\u0435\u0440\u0433\u0435\u0439",
        position: "CEO DevX Group LLC",
        image: "/human.png"
      },
      {
        name: "\u041B\u0443\u0447\u043A\u0438\u043D \u0412\u043B\u0430\u0434\u0438\u0441\u043B\u0430\u0432",
        position: "\u0422\u0438\u043C\u043B\u0438\u0434",
        image: "/human.png"
      }
    ]);
    const getSlideClass = (index) => {
      if (index === currentIndex.value) return "active";
      if (index === (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length) return "prev";
      if (index === (currentIndex.value + 1) % teamMembers.value.length) return "next";
      return "";
    };
    const getSlideStyle = (index) => {
      const baseStyle = {
        transition: "all 1.2s cubic-bezier(0.42, 0, 0.58, 1)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%"
      };
      if (index === currentIndex.value) {
        return {
          ...baseStyle,
          opacity: "1",
          transform: "translateX(0) scale(1)",
          zIndex: "10"
        };
      } else if (index === (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length) {
        return {
          ...baseStyle,
          opacity: "0.7",
          transform: "translateX(-120%) scale(0.8) rotateY(10deg)",
          zIndex: "5"
        };
      } else if (index === (currentIndex.value + 1) % teamMembers.value.length) {
        return {
          ...baseStyle,
          opacity: "0.7",
          transform: "translateX(120%) scale(0.8) rotateY(-10deg)",
          zIndex: "5"
        };
      } else {
        return {
          ...baseStyle,
          opacity: "0",
          transform: "translateX(0) scale(0.5)",
          zIndex: "1"
        };
      }
    };
    const showSlide = (index) => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      currentIndex.value = (index + teamMembers.value.length) % teamMembers.value.length;
      setTimeout(() => {
        isAnimating.value = false;
      }, 1e3);
    };
    return {
      teamSection,
      teamTitle,
      teamSlider,
      sliderContainer,
      sliderItems,
      leftArrow,
      rightArrow,
      teamMembers,
      currentIndex,
      isPulsing,
      showSlide,
      getSlideClass,
      getSlideStyle
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "team-section",
    ref: "teamSection"
  }, _attrs))} data-v-dfe57399><div class="team-container" data-v-dfe57399><h2 data-v-dfe57399>\u041D\u0430\u0448\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438</h2><div class="team-slider" data-v-dfe57399><div class="team-slider-container" data-v-dfe57399><div class="team-slider-arrow left" data-v-dfe57399><img${ssrRenderAttr("src", _imports_0)} alt="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439" data-v-dfe57399></div><div class="team-slider-content" data-v-dfe57399><div class="team-slider-items" data-v-dfe57399><!--[-->`);
  ssrRenderList($setup.teamMembers, (member, index) => {
    _push(`<div class="${ssrRenderClass([$setup.getSlideClass(index), "team-slider-item"])}" style="${ssrRenderStyle($setup.getSlideStyle(index))}" data-v-dfe57399><div class="${ssrRenderClass([{ "pulse": index === $setup.currentIndex && $setup.isPulsing }, "team-member-image"])}" data-v-dfe57399><img class="polygon"${ssrRenderAttr("src", _imports_1)} alt="\u0424\u0438\u0433\u0443\u0440\u0430" data-v-dfe57399><img class="human"${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} data-v-dfe57399></div><img class="human-line"${ssrRenderAttr("src", _imports_2)} alt="\u041B\u0438\u043D\u0438\u044F" data-v-dfe57399><div class="team-member-info" data-v-dfe57399><h3 data-v-dfe57399>${ssrInterpolate(member.name)}</h3><div class="team-member-line" data-v-dfe57399></div><p data-v-dfe57399>${ssrInterpolate(member.position)}</p></div></div>`);
  });
  _push(`<!--]--></div></div><div class="team-slider-arrow right" data-v-dfe57399><img${ssrRenderAttr("src", _imports_3)} alt="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439" data-v-dfe57399></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TeamSlider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-dfe57399"]]);
gsap.registerPlugin(ScrollTrigger);
const _sfc_main = {
  name: "CompanyNumbers",
  setup() {
    const companySection = ref(null);
    const companyContainer = ref(null);
    const companyTitle = ref(null);
    const companyDiv1 = ref(null);
    const companyDiv2 = ref(null);
    const companyText1 = ref(null);
    const companyText2 = ref(null);
    const companyText3 = ref(null);
    const companyText4 = ref(null);
    const companyText5 = ref(null);
    const companyText6 = ref(null);
    const companyFooter = ref(null);
    const verticalLine = ref(null);
    return {
      companySection,
      companyContainer,
      companyTitle,
      companyDiv1,
      companyDiv2,
      companyText1,
      companyText2,
      companyText3,
      companyText4,
      companyText5,
      companyText6,
      companyFooter,
      verticalLine
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "company-numbers",
    ref: "companySection"
  }, _attrs))} data-v-dd313663><div class="company-numbers-container" data-v-dd313663><div class="company-numbers-text" data-v-dd313663><span class="company-numbers-text1" data-v-dd313663>\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F DevX \u0432 \u0446\u0438\u0444\u0440\u0430\u0445: \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C</span><div class="company-numbers-div" data-v-dd313663><span class="company-numbers-text2" data-v-dd313663>&gt; 20 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432</span><span class="company-numbers-text3" data-v-dd313663>\u0412 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0431\u043E\u043B\u0435\u0435 20<br data-v-dd313663>\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432<br data-v-dd313663>\u043F\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438.</span></div><div class="company-numbers-div" data-v-dd313663><span class="company-numbers-text2" data-v-dd313663>&gt; 250 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</span><span class="company-numbers-text3" data-v-dd313663>\u041E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0442\u0435\u0445 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443,<br data-v-dd313663> \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u0441\u0442\u043F\u0440\u043E\u0434\u0430\u0436\u043D\u043E\u0435<br data-v-dd313663>\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0431\u043E\u043B\u0435\u0435 250 \u043D\u0430\u0448\u0438\u043C<br data-v-dd313663>\u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C.</span></div></div><div class="company-numbers-footer" data-v-dd313663><span class="company-numbers-text4" data-v-dd313663>\u041E\u043F\u044B\u0442\u043D\u044B\u0435<br data-v-dd313663> \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B</span><div class="company-numbers-verticalLine" data-v-dd313663></div><span class="company-numbers-text5" data-v-dd313663>\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u2014 \u044D\u0442\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044B \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0438<br data-v-dd313663> \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438 \u0441\u0430\u0439\u0442\u043E\u0432. \u041C\u044B \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0434\u0438\u0437\u0430\u0439\u043D\u0430, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u0438<br data-v-dd313663> \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0432\u0430\u043C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430</span></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompanyNumbers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CompanyNumbers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dd313663"]]);

export { CompanyNumbers as C, TeamSlider as T };
//# sourceMappingURL=CompanyNumbers-DSBW4_1d.mjs.map
