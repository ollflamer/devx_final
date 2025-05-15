import { mergeProps, ref, computed, reactive, watch, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

gsap.registerPlugin(ScrollTrigger);
const _sfc_main = {
  name: "FeedbackForm",
  setup() {
    const feedbackSection = ref(null);
    const feedbackText = ref(null);
    const feedbackForm = ref(null);
    const consultationCard = ref(null);
    const route = useRoute();
    const currentTheme = computed(() => {
      return "white";
    });
    const backgroundImage = computed(() => {
      return currentTheme.value === "white" ? "/bg_Feedback-white.png" : "/bg_Feedback-dark.png";
    });
    const formData = reactive({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const errors = reactive({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    const animationFields = reactive({
      name: false,
      email: false,
      phone: false,
      message: false
    });
    const isSubmitting = ref(false);
    const formStatus = reactive({
      success: false,
      message: ""
    });
    const validateForm = () => {
      let isValid = true;
      if (!formData.name || formData.name.trim().length < 2) {
        errors.name = "\u0418\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432";
        startPulseAnimation("name");
        isValid = false;
      } else {
        errors.name = "";
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email";
        startPulseAnimation("email");
        isValid = false;
      } else {
        errors.email = "";
      }
      const phoneRegex = /^(\+998|998|8)?[\s\-]?(\d{2}|\(\d{2}\))[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$|^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430";
        startPulseAnimation("phone");
        isValid = false;
      } else {
        errors.phone = "";
      }
      if (!formData.message || formData.message.trim().length < 10) {
        errors.message = "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 10 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432";
        startPulseAnimation("message");
        isValid = false;
      } else {
        errors.message = "";
      }
      return isValid;
    };
    const startPulseAnimation = (fieldName) => {
      animationFields[fieldName] = true;
      setTimeout(() => {
        animationFields[fieldName] = false;
      }, 2e3);
    };
    const clearError = (fieldName) => {
      errors[fieldName] = "";
      animationFields[fieldName] = false;
    };
    const submitForm = async () => {
      if (!validateForm()) {
        return;
      }
      isSubmitting.value = true;
      formStatus.success = false;
      formStatus.message = "";
      try {
        const response = await fetch("/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const result = await response.json();
        if (!result.success && result.errors) {
          Object.keys(result.errors).forEach((key) => {
            errors[key] = result.errors[key];
            startPulseAnimation(key);
          });
        } else if (result.success) {
          formData.name = "";
          formData.email = "";
          formData.phone = "";
          formData.message = "";
          formStatus.success = true;
          formStatus.message = result.message;
          if (feedbackForm.value) {
            gsap.fromTo(
              ".success-message",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
          }
          setTimeout(() => {
            formStatus.message = "";
            formStatus.success = false;
          }, 5e3);
        }
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0444\u043E\u0440\u043C\u044B:", error);
        formStatus.success = false;
        formStatus.message = "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0444\u043E\u0440\u043C\u044B. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.";
      } finally {
        isSubmitting.value = false;
      }
    };
    const animateFeedbackSection = () => {
      if (!feedbackText.value || !feedbackForm.value || !consultationCard.value) return;
      gsap.set(feedbackText.value, { y: 50, opacity: 0 });
      gsap.set(feedbackForm.value.querySelectorAll(".form-group"), { y: 30, opacity: 0 });
      gsap.set(feedbackForm.value.querySelector("button"), { y: 0, opacity: 0 });
      gsap.set(consultationCard.value, { x: 50, opacity: 0 });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: feedbackSection.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      timeline.to(feedbackText.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }).to(feedbackForm.value.querySelectorAll(".form-group"), {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4").to(feedbackForm.value.querySelector("button"), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "transform"
      }, "-=0.2").to(consultationCard.value, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");
    };
    watch(() => route.fullPath, () => {
      console.log("Route changed, reinitializing feedback form animation");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      setTimeout(() => {
        animateFeedbackSection();
      }, 300);
    });
    watch(currentTheme, () => {
    });
    return {
      feedbackSection,
      feedbackText,
      feedbackForm,
      consultationCard,
      formData,
      errors,
      animationFields,
      isSubmitting,
      formStatus,
      submitForm,
      clearError,
      backgroundImage
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "feedback-section",
    ref: "feedbackSection"
  }, _attrs))} data-v-3f7cac81><div class="feedback-bg" data-v-3f7cac81><img${ssrRenderAttr("src", $setup.backgroundImage)} alt="\u0424\u043E\u043D\u043E\u0432\u044B\u0439 \u0443\u0437\u043E\u0440" data-v-3f7cac81></div><div class="feedback-container" data-v-3f7cac81><div class="feedback-left" data-v-3f7cac81><div class="feedback-text" data-v-3f7cac81><h2 data-v-3f7cac81>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0441\u0432\u044F\u0437\u044C</h2><p data-v-3f7cac81>\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u043B\u0438 \u0435\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F? \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u2013 \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430 \u0441\u0432\u044F\u0437\u0438!</p></div><div class="feedback-form" data-v-3f7cac81><div class="${ssrRenderClass([{ "error": $setup.errors.name, "pulse-animation": $setup.animationFields.name }, "form-group"])}" data-v-3f7cac81><label for="name" data-v-3f7cac81>\u0418\u043C\u044F</label><input type="text" id="name" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043C\u044F..."${ssrRenderAttr("value", $setup.formData.name)} data-v-3f7cac81>`);
  if ($setup.errors.name) {
    _push(`<span class="error-message" data-v-3f7cac81>${ssrInterpolate($setup.errors.name)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ "error": $setup.errors.email, "pulse-animation": $setup.animationFields.email }, "form-group"])}" data-v-3f7cac81><label for="email" data-v-3f7cac81>Email</label><input type="email" id="email" placeholder="user.name@email.com"${ssrRenderAttr("value", $setup.formData.email)} data-v-3f7cac81>`);
  if ($setup.errors.email) {
    _push(`<span class="error-message" data-v-3f7cac81>${ssrInterpolate($setup.errors.email)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ "error": $setup.errors.phone, "pulse-animation": $setup.animationFields.phone }, "form-group"])}" data-v-3f7cac81><label for="phone" data-v-3f7cac81>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><input type="tel" id="phone" placeholder="+998 90 111 22 33"${ssrRenderAttr("value", $setup.formData.phone)} data-v-3f7cac81>`);
  if ($setup.errors.phone) {
    _push(`<span class="error-message" data-v-3f7cac81>${ssrInterpolate($setup.errors.phone)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ "error": $setup.errors.message, "pulse-animation": $setup.animationFields.message }, "form-group"])}" data-v-3f7cac81><label for="message" data-v-3f7cac81>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</label><textarea id="message" placeholder="\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0437\u0434\u0435\u0441\u044C... (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)" data-v-3f7cac81>${ssrInterpolate($setup.formData.message)}</textarea>`);
  if ($setup.errors.message) {
    _push(`<span class="error-message" data-v-3f7cac81>${ssrInterpolate($setup.errors.message)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><button class="feedback-submit"${ssrIncludeBooleanAttr($setup.isSubmitting) ? " disabled" : ""} data-v-3f7cac81>`);
  if (!$setup.isSubmitting) {
    _push(`<span data-v-3f7cac81>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</span>`);
  } else {
    _push(`<span class="spinner" data-v-3f7cac81></span>`);
  }
  _push(`</button>`);
  if ($setup.formStatus.message) {
    _push(`<div class="form-status" data-v-3f7cac81>`);
    if ($setup.formStatus.success) {
      _push(`<div class="success-message" data-v-3f7cac81>${ssrInterpolate($setup.formStatus.message)}</div>`);
    } else {
      _push(`<div class="error-message-global" data-v-3f7cac81>${ssrInterpolate($setup.formStatus.message)}</div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="feedback-right" data-v-3f7cac81><div class="consultation-card" data-v-3f7cac81><h3 data-v-3f7cac81>\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0443</h3><p data-v-3f7cac81>\u0427\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043E \u043D\u0430\u0448\u0438\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C. \u041C\u044B \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u0432\u0430\u043C, \u043A\u0430\u043A \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u043E\u043C\u043E\u0447\u044C \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443.</p><div class="consultation-info" data-v-3f7cac81><div class="consultation-item" data-v-3f7cac81><span class="consultation-label" data-v-3f7cac81>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</span><span class="consultation-value" data-v-3f7cac81><a href="tel:+998941452332" data-v-3f7cac81> +998 (94) 145-23-32</a></span></div><div class="consultation-item" data-v-3f7cac81><span class="consultation-label" data-v-3f7cac81>Email:</span><span class="consultation-value" data-v-3f7cac81><a href="devx.brand@gmail.com" data-v-3f7cac81> devx.brand@gmail.com</a></span></div><div class="consultation-item" data-v-3f7cac81><span class="consultation-label" data-v-3f7cac81>\u0410\u0434\u0440\u0435\u0441:</span><span class="consultation-value" data-v-3f7cac81>\u0422\u043E\u0448\u043A\u0435\u043D\u0442 \u0448\u0430\u0445\u0430\u0440 \u042F\u043D\u0433\u0438\u0445\u0430\u0451\u0442 \u0442\u0443\u043C\u0430\u043D\u0438 \u0443\u043B. \u0420\u0430\u0439\u0445\u043E\u043D, \u0434\u043E\u043C F 03-2158</span></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeedbackForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeedbackForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3f7cac81"]]);

export { FeedbackForm as F };
//# sourceMappingURL=FeedbackForm-CaXsU_ag.mjs.map
