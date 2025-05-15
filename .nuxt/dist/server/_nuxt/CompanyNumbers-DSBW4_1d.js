import { mergeProps, ref, useSSRContext } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import "C:/Users/ollfl/Desktop/devx/DevX2/node_modules/hookable/dist/index.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
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
        name: "Кучкаров Максим",
        position: "Дизайнер",
        image: "/human.png"
      },
      {
        name: "Флоренко Сергей",
        position: "CEO DevX Group LLC",
        image: "/human.png"
      },
      {
        name: "Лучкин Владислав",
        position: "Тимлид",
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
  }, _attrs))} data-v-dfe57399><div class="team-container" data-v-dfe57399><h2 data-v-dfe57399>Наши сотрудники</h2><div class="team-slider" data-v-dfe57399><div class="team-slider-container" data-v-dfe57399><div class="team-slider-arrow left" data-v-dfe57399><img${ssrRenderAttr("src", _imports_0)} alt="Предыдущий" data-v-dfe57399></div><div class="team-slider-content" data-v-dfe57399><div class="team-slider-items" data-v-dfe57399><!--[-->`);
  ssrRenderList($setup.teamMembers, (member, index) => {
    _push(`<div class="${ssrRenderClass([$setup.getSlideClass(index), "team-slider-item"])}" style="${ssrRenderStyle($setup.getSlideStyle(index))}" data-v-dfe57399><div class="${ssrRenderClass([{ "pulse": index === $setup.currentIndex && $setup.isPulsing }, "team-member-image"])}" data-v-dfe57399><img class="polygon"${ssrRenderAttr("src", _imports_1)} alt="Фигура" data-v-dfe57399><img class="human"${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} data-v-dfe57399></div><img class="human-line"${ssrRenderAttr("src", _imports_2)} alt="Линия" data-v-dfe57399><div class="team-member-info" data-v-dfe57399><h3 data-v-dfe57399>${ssrInterpolate(member.name)}</h3><div class="team-member-line" data-v-dfe57399></div><p data-v-dfe57399>${ssrInterpolate(member.position)}</p></div></div>`);
  });
  _push(`<!--]--></div></div><div class="team-slider-arrow right" data-v-dfe57399><img${ssrRenderAttr("src", _imports_3)} alt="Следующий" data-v-dfe57399></div></div></div></div></section>`);
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
  }, _attrs))} data-v-dd313663><div class="company-numbers-container" data-v-dd313663><div class="company-numbers-text" data-v-dd313663><span class="company-numbers-text1" data-v-dd313663>Компания DevX в цифрах: комплексная автоматизация управления бизнесом</span><div class="company-numbers-div" data-v-dd313663><span class="company-numbers-text2" data-v-dd313663>&gt; 20 экспертов</span><span class="company-numbers-text3" data-v-dd313663>В команде более 20<br data-v-dd313663>сертифицированных специалистов<br data-v-dd313663>по автоматизации.</span></div><div class="company-numbers-div" data-v-dd313663><span class="company-numbers-text2" data-v-dd313663>&gt; 250 клиентов</span><span class="company-numbers-text3" data-v-dd313663>Оказываем тех поддержку,<br data-v-dd313663> сопровождение и постпродажное<br data-v-dd313663>обслуживание более 250 нашим<br data-v-dd313663>постоянным клиентам.</span></div></div><div class="company-numbers-footer" data-v-dd313663><span class="company-numbers-text4" data-v-dd313663>Опытные<br data-v-dd313663> специалисты</span><div class="company-numbers-verticalLine" data-v-dd313663></div><span class="company-numbers-text5" data-v-dd313663>Наша команда — это профессионалы с многолетним опытом в создании и<br data-v-dd313663> продвижении сайтов. Мы объединяем экспертов в области веб-разработки, дизайна, маркетинга и<br data-v-dd313663> аналитики, чтобы предложить вам комплексные решения для вашего бизнеса</span></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompanyNumbers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CompanyNumbers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dd313663"]]);
export {
  CompanyNumbers as C,
  TeamSlider as T
};
//# sourceMappingURL=CompanyNumbers-DSBW4_1d.js.map
