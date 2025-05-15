<template>
  <div class="faq-accordion">

    <section class="faq-title">
        <h1>Ответы на часто задаваемые вопросы</h1>
        <h3>Одностраничный сайт для продаж, заявок или акций. Фокусирует внимание на цели, повышая конверсию. Идеален для быстрых решений.</h3>
    </section>

    <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
      <button class="faq-question" @click="toggle(index)">
        {{ item.question }}
        <span class="faq-icon" :class="{ open: item.isOpen }">
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path
              d="M12 5v14M5 12h14"
              stroke= "var(--btn2-color-text)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>

      <transition @enter="enterAnimation" @leave="leaveAnimation">
        <div v-show="item.isOpen" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "FaqAccordion",
  data() {
    return {
      faqItems: [
        {
          question: "Что такое лендинг?",
          answer:
            "Лендинг (Landing Page) — это одностраничный сайт, созданный для решения конкретной задачи: продажи продукта, сбора заявок или продвижения акции. Он фокусирует внимание пользователя на одном предложении.",
          isOpen: false,
        },
        {
          question: "Чем лендинг отличается от обычного сайта?",
          answer:
            "Главная цель лендинга – сфокусировать внимание пользователя на конкретном предложении.",
          isOpen: false,
        },
        {
          question: "Сколько времени нужно на создание лендинга?",
          answer:
            "Зависит от сложности, но в среднем 2-3 дня, включая базовую оптимизацию.",
          isOpen: false,
        },
        {
          question: "Можно ли изменить лендинг после запуска?",
          answer: "Да, как правило, он легко редактируется и дорабатывается.",
          isOpen: false,
        },
        {
          question: "Как лендинг помогает увеличить продажи?",
          answer:
            "Благодаря четкой структуре, фокусировке на оффере и призывам к действию.",
          isOpen: false,
        },
      ],
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
        },
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
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.faq-title{
    margin-top: 100px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-bottom: 60px;
    padding-left: 5px;
    padding-right: 5px;
    gap: 30px;

    h1{
        font-size: clamp(1.5rem, 0.632rem + 6.32vw, 3rem);
        color: var(--text-hover-color);
        font-weight: 700;
    }

    h3{
        font-size: clamp(1.125rem, 0.908rem + 1.58vw, 1.5rem);
        font-weight: 700;
    }
}

.faq-accordion {
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 10px 100px 10px;
}

.faq-item {
  border: 4px solid var(--text-hover-color);
  padding: 30px 15px;
  margin-bottom: 25px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  font-size: clamp(1.5rem, 1.318rem + 0.91vw, 2rem);
  color: var(--text-hover-color);
  font-weight: 700;
  cursor: pointer;
}

.faq-icon {
  display: flex;
  align-items: center;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.faq-icon.open {
  transform: rotate(45deg);
}

.faq-answer {
  overflow: hidden !important;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.faq-answer::-webkit-scrollbar {
  display: none;
}

.faq-answer p {
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
  font-weight: 700;
}

/* Адаптивные стили */
@media (max-width: 1200px) {
  .faq-accordion {
    max-width: 100%;
    padding: 80px 5px;
  }
}

@media (max-width: 992px) {
  .faq-accordion {
    max-width: 100%;
    padding: 70px 5px;
  }
  
  .faq-title {
    margin-top: 60px;
    padding-bottom: 40px;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  
  .faq-item {
    padding: 25px 10px;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .faq-accordion {
    padding: 50px 0;
  }
  
  .faq-title {
    margin-top: 40px;
    padding-bottom: 30px;
    gap: 15px;
  }
  
  .faq-item {
    padding: 20px 10px;
    margin-bottom: 15px;
    border-width: 3px;
  }
  
  .faq-icon svg {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 576px) {
  .faq-accordion {
    padding: 30px 10px;
  }
  
  .faq-title {
    margin-top: 30px;
    padding-bottom: 20px;
    gap: 10px;
  }
  
  .faq-item {
    padding: 15px 8px;
    margin-bottom: 10px;
    border-width: 2px;
  }
  
  .faq-question {
    font-size: clamp(1.125rem, 0.943rem + 0.91vw, 1.5rem);
    gap: 5px;
  }
  
  .faq-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .faq-answer p {
    padding-top: 10px;
    font-size: clamp(0.875rem, 0.693rem + 0.91vw, 1.25rem);
  }
}
</style>
