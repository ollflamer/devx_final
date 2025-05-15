<template>
  <div class="page-container">
    <section class="hero" ref="heroSection">
        <div class="hero__container">
            <h1 ref="heroTitle">Создаем сайты, которые работают на ваш бизнес!</h1>
            <h4 ref="heroSubtitle">
              От концепции до реализации: профессиональная разработка, дизайн и
              поддержка для достижения ваших целей.
            </h4>
            <div class="hero__buttons" ref="heroButtons">
              <AppButton type="1">Подробнее о нас</AppButton>
              <AppButton type="2">Заказать</AppButton>
            </div>
        </div>
    </section>

    <section class="about" ref="aboutSection">
        <div class="about__lines"></div>
        <div class="about__wrap">
            <div class="about__container">
              <h2 class="about__title">Немного о нас</h2>
              <h3 class="about__subtitle">Мы создаем не просто сайты, а истории успеха</h3>
              <p class="about__text">Создаём современные и удобные сайты, которые помогают вашему бизнесу расти и привлекать новых клиентов</p>
            </div>
            
            <CompanyNumbers/>
        </div>
    </section>

    <section class="team" ref="teamSection">
        <img class="team__img" ref="teamImage" src="../public/Command.png" alt="team">
    </section>

   </div>

<TeamSlider/>
<FeedbackForm/>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import FeedbackForm from "~/components/FeedbackForm.vue";
import TeamSlider from "~/components/TeamSlider.vue";
import CompanyNumbers from "~/components/CompanyNumbers.vue";
import AppButton from "~/components/AppButton.vue";

// Создаем refs для элементов, которые будем анимировать
const heroSection = ref(null);
const heroTitle = ref(null);
const heroSubtitle = ref(null);
const heroButtons = ref(null);
const teamSection = ref(null);
const teamImage = ref(null);

// Функция для анимации элементов секции Hero
const animateHeroElements = () => {
  // Устанавливаем начальные состояния элементов
  gsap.set(heroTitle.value, { opacity: 0, y: 50 });
  gsap.set(heroSubtitle.value, { opacity: 0, y: 30 });
  gsap.set(heroButtons.value, { opacity: 0, y: 20 });
  
  // Создаем таймлайн анимации
  const timeline = gsap.timeline();
  
  // Добавляем анимации в таймлайн
  timeline
    .to(heroTitle.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(heroSubtitle.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5') // Начинаем немного раньше, чем закончится предыдущая
    .to(heroButtons.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5'); // Начинаем немного раньше, чем закончится предыдущая
};

// Функция для анимации секции Team
const animateTeamElements = () => {
  if (!teamImage.value) return;
  
  // Устанавливаем начальные состояния
  gsap.set(teamImage.value, { opacity: 0, scale: 0.9, y: 30 });
  
  // Создаем таймлайн анимации
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: teamSection.value,
      start: "top bottom", // Начинаем когда верх секции достигает низа экрана
      once: true, // Запускаем анимацию только один раз
    }
  });
  
  // Анимация появления изображения
  timeline.to(teamImage.value, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    ease: "back.out(1.2)"
  });
};

// Очистка анимаций
const cleanupAnimations = () => {
  if (heroTitle.value) gsap.killTweensOf(heroTitle.value);
  if (heroSubtitle.value) gsap.killTweensOf(heroSubtitle.value);
  if (heroButtons.value) gsap.killTweensOf(heroButtons.value);
  if (teamImage.value) gsap.killTweensOf(teamImage.value);
};

// Запускаем анимацию после монтирования компонента
onMounted(() => {
  // Небольшая задержка для гарантии, что DOM полностью загружен
  setTimeout(() => {
    animateHeroElements();
    animateTeamElements();
  }, 100);
});

// Очищаем анимации при размонтировании компонента
onBeforeUnmount(() => {
  cleanupAnimations();
});
</script>

<style scoped>
.page-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
  overflow: visible;
  line-height: 1.2;
}

.hero{
    margin-top: 100px;
    overflow: visible;
    height: 990px;
    background-image: var(--background-image-hero);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;

    @media (max-width: 1100px) {
        background-size: cover;
        height: 700px;
    }

    .hero__container{
        display: flex;
        flex-direction: column;
        justify-content: start;
        max-width: 1000px;
        gap: 30px;

        h1{
            font-size: clamp(1.75rem, 1.015rem + 3.67vw, 4rem);
            font-weight: 700;
            color: var(--text-hover-color);
            line-height: 1.2;
        }
    
        h4{
            font-size: clamp(1.375rem, 1.171rem + 1.02vw, 2rem);
            font-weight: 400;
            color: var(--text-hover-color);
            margin-bottom: 50px;
            line-height: 1.3;
        }
    
        .hero__buttons{
            display: flex;
            gap: 30px;
            justify-content: start;
            align-items: center;
            flex-wrap: wrap;
        }

    }

}

.about{
    display: flex;
    justify-content: center;
    position: relative;
    overflow: visible;
}

.about__lines{
    position: absolute;
    top: 0;
    left: 240px;
    width: 100%;
    height: 100%;
    background-image: var(--background-lines);
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 1; 
    z-index: 0;
    pointer-events: none;
    margin-left: 70px;
}

.about__wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;
}

.about__container{
    text-align: center;
    max-width: 950px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .about__title{
        font-size: clamp(3rem, 0.46rem + 12.7vw, 8rem);
        font-weight: 700;
        color: var(--text-hover-color);
        z-index: 1;
    }
    
    .about__subtitle{
        font-size: clamp(1.5rem, 1.119rem + 1.9vw, 2.25rem);
        font-weight: 400;
        color: var(--text-hover-color);
    }
    
    .about__text{
        font-size: clamp(1.125rem, 0.681rem + 2.22vw, 2rem);
        font-weight: 400;
        max-width: 830px;
    }
}

.team{
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    
    .team__img{
      border: 5px dashed var(--text-hover-color);
      padding: 45px;
      opacity: 0; /* Начальное состояние для анимации */
      
      @media (max-width: 1000px) {
          padding: 20px;
      }
  
      @media (max-width: 900px) {
          padding: 10px;
      }
    }
}


</style>
