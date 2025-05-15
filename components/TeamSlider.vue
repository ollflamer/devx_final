<template>
  <section class="team-section" ref="teamSection">
    <div class="team-container">
      <h2 ref="teamTitle">Наши сотрудники</h2>
      <div class="team-slider" ref="teamSlider" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        <div class="team-slider-container">
          <div class="team-slider-arrow left" ref="leftArrow" @click="showSlide(currentIndex - 1)">
            <img src="/Vector-right.png" alt="Предыдущий">
          </div>
          <div class="team-slider-content">
            <div class="team-slider-items" ref="sliderContainer">
              <div 
                v-for="(member, index) in teamMembers" 
                :key="index" 
                class="team-slider-item" 
                :class="getSlideClass(index)"
                :style="getSlideStyle(index)"
                ref="sliderItems"
              >
                <div class="team-member-image" :class="{ 'pulse': index === currentIndex && isPulsing }">
                  <img class="polygon" src="/Polygon.png" alt="Фигура">
                  <img class="human" :src="member.image" :alt="member.name">
                </div>
                <img class="human-line" src="/human_line.png" alt="Линия">
                <div class="team-member-info">
                  <h3>{{ member.name }}</h3>
                  <div class="team-member-line"></div>
                  <p>{{ member.position }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="team-slider-arrow right" ref="rightArrow" @click="showSlide(currentIndex + 1)">
            <img src="/Vector-left.png" alt="Следующий">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин ScrollTrigger глобально
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'TeamSlider',
  setup() {
    // Ссылки на DOM-элементы
    const teamSection = ref(null);
    const teamTitle = ref(null);
    const teamSlider = ref(null);
    const sliderContainer = ref(null);
    const sliderItems = ref([]);
    const leftArrow = ref(null);
    const rightArrow = ref(null);
    
    // Состояние слайдера
    const currentIndex = ref(0);
    const isAnimating = ref(false);
    const isPulsing = ref(false);
    let autoSlideInterval = null;
    let pulseInterval = null;
    
    // Данные о сотрудниках
    const teamMembers = ref([
      {
        name: 'Кучкаров Максим',
        position: 'Дизайнер',
        image: '/human.png'
      },
      {
        name: 'Флоренко Сергей',
        position: 'CEO DevX Group LLC',
        image: '/human.png'
      },
      {
        name: 'Лучкин Владислав',
        position: 'Тимлид',
        image: '/human.png'
      }
    ]);
    
    // Функция для определения класса слайда
    const getSlideClass = (index) => {
      if (index === currentIndex.value) return 'active';
      if (index === (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length) return 'prev';
      if (index === (currentIndex.value + 1) % teamMembers.value.length) return 'next';
      return '';
    };
    
    // Функция для определения стиля слайда
    const getSlideStyle = (index) => {
      const baseStyle = {
        transition: 'all 1.2s cubic-bezier(0.42, 0, 0.58, 1)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      };
      
      if (index === currentIndex.value) {
        return {
          ...baseStyle,
          opacity: '1',
          transform: 'translateX(0) scale(1)',
          zIndex: '10'
        };
      } else if (index === (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length) {
        return {
          ...baseStyle,
          opacity: '0.7',
          transform: 'translateX(-120%) scale(0.8) rotateY(10deg)',
          zIndex: '5'
        };
      } else if (index === (currentIndex.value + 1) % teamMembers.value.length) {
        return {
          ...baseStyle,
          opacity: '0.7',
          transform: 'translateX(120%) scale(0.8) rotateY(-10deg)',
          zIndex: '5'
        };
      } else {
        return {
          ...baseStyle,
          opacity: '0',
          transform: 'translateX(0) scale(0.5)',
          zIndex: '1'
        };
      }
    };
    
    // Функция для показа слайда
    const showSlide = (index) => {
      if (isAnimating.value) return;
      isAnimating.value = true;
      
      currentIndex.value = (index + teamMembers.value.length) % teamMembers.value.length;
      
      setTimeout(() => {
        isAnimating.value = false;
      }, 1000);
    };
    
    // Функция для запуска автоматической смены слайдов
    const startAutoSlide = () => {
      // Проверяем, что интервал еще не запущен
      if (!autoSlideInterval) {
        autoSlideInterval = setInterval(() => {
          if (!isAnimating.value) {
            showSlide(currentIndex.value + 1);
          }
        }, 5000);
      }
    };
    
    // Функция для остановки автоматической смены слайдов
    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };
    
    // Функция для добавления эффекта пульсации
    const addPulseEffect = () => {
      // Если автоматическое перелистывание остановлено, не добавляем эффект пульсации
      if (!autoSlideInterval) return;
      
      isPulsing.value = true;
      
      setTimeout(() => {
        isPulsing.value = false;
      }, 1000); // Вернем исходное значение для длительности пульсации
    };
    
    // Функция для обработки свайпа на мобильных устройствах
    const handleTouchStart = (e) => {
      const touchStartX = e.changedTouches[0].screenX;
      
      const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        
        if (touchEndX < touchStartX - 50) {
          showSlide(currentIndex.value + 1);
        } else if (touchEndX > touchStartX + 50) {
          showSlide(currentIndex.value - 1);
        }
        
        sliderContainer.value.removeEventListener('touchend', handleTouchEnd);
      };
      
      sliderContainer.value.addEventListener('touchend', handleTouchEnd);
    };
    
    // Функция для анимации появления секции
    const animateTeamSection = () => {
      if (!teamSection.value || !teamTitle.value || !teamSlider.value) return;
      
      // Проверяем размер экрана для адаптивной анимации
      const isMobile = window.innerWidth <= 768;
      
      // Устанавливаем начальные состояния
      gsap.set(teamTitle.value, {
        y: isMobile ? 20 : 30,
        opacity: 0
      });
      
      gsap.set(teamSlider.value, {
        y: isMobile ? 30 : 50,
        opacity: 0
      });
      
      // Создаем таймлайн для анимации
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamSection.value,
          start: isMobile ? "top 85%" : "top 75%",
          end: isMobile ? "bottom 15%" : "bottom 25%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
      
      // Анимация заголовка
      tl.to(teamTitle.value, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
      
      // Анимация слайдера
      tl.to(teamSlider.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.3');
    };
    
    // Инициализация слайдера
    const initSlider = () => {
      // Добавляем обработчики событий для свайпов
      if (sliderContainer.value) {
        sliderContainer.value.addEventListener('touchstart', handleTouchStart);
      }
      
      // Запускаем автоматическую смену слайдов
      startAutoSlide();
      
      // Запускаем эффект пульсации
      if (pulseInterval) {
        clearInterval(pulseInterval);
      }
      pulseInterval = setInterval(addPulseEffect, 5000); 
      
      // Анимируем появление секции
      animateTeamSection();
    };
    
    // Функция для очистки анимаций
    const clearAnimations = () => {
      // Очищаем интервалы
      stopAutoSlide();
      
      if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
      }
      
      // Удаляем обработчики событий
      if (sliderContainer.value) {
        sliderContainer.value.removeEventListener('touchstart', handleTouchStart);
      }
      
      // Очищаем ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === teamSection.value) {
          trigger.kill();
        }
      });
    };
    
    // Обработчик изменения размера окна
    const handleResize = () => {
      // Очищаем предыдущие анимации
      clearAnimations();
      
      // Запускаем анимации заново после небольшой задержки
      setTimeout(() => {
        initSlider();
      }, 300);
    };
    
    onMounted(() => {
      // Инициализация слайдера с небольшой задержкой
      setTimeout(() => {
        initSlider();
      }, 500);
      
      // Добавляем обработчик изменения размера окна
      window.addEventListener('resize', handleResize);
    });
    
    onBeforeUnmount(() => {
      clearAnimations();
      
      // Удаляем обработчик изменения размера окна
      window.removeEventListener('resize', handleResize);
    });
    
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
}
</script>

<style scoped>
/* team section */
.team-section {
  padding: 200px 0;
  position: relative;
  z-index: 2;
  margin-top: 30px;
  overflow: hidden;
  line-height: 1; 
}

.team-container {
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
}

.team-container h2 {
  font-weight: 700;
  font-size: 96px;
  color: var(--text-hover-color);
  text-align: center;
  margin-bottom: 80px;
  will-change: transform, opacity;
}

.team-slider {
  position: relative;
  width: 100%;
  overflow: visible;
  will-change: transform, opacity;
}

.team-slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
}

.team-slider-arrow {
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s ease;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.team-slider-arrow:hover {
  transform: scale(1.2);
  filter: brightness(1.2);
}

.team-slider-arrow.left {
  margin-right: 50px;
}

.team-slider-arrow.right {
  margin-left: 50px;
}

.team-slider-arrow img {
  width: 100%;
  height: auto;
  filter: invert(var(--logo-invert));
}

.team-slider-content {
  position: relative;
  overflow: visible;
  width: 600px;
  height: 600px;
  border-radius: 8px;
}

.team-slider-items {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  overflow: visible;
}

.team-slider-item {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.42, 0, 0.58, 1);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 20px; /* Добавляем отступ снизу */
}

.team-slider-item.active {
  opacity: 1;
  transform: translateX(0) scale(1) !important;
  z-index: 10;
}

.team-slider-item.prev {
  opacity: 0.7;
  transform: translateX(-120%) scale(0.8) rotateY(10deg) !important;
  z-index: 5;
}

.team-slider-item.next {
  opacity: 0.7;
  transform: translateX(120%) scale(0.8) rotateY(-10deg) !important;
  z-index: 5;
}

.team-member-image {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.team-member-image .polygon {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.team-member-image .human {
  position: relative;
  z-index: 2;
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.team-member-info {
  text-align: center;
  color: var(--text-hover-color);
  margin-top: 10px;
  width: 100%;
}

.team-member-info h3 {
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: 600;
}

.team-member-info p {
  font-size: 18px;
  margin-top: 5px;
  opacity: 0.8;
}

.team-member-line {
  width: 222px;
  height: 2px;
  background-color: var(--text-hover-color);
  margin: 0 auto 10px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.team-member-image.pulse {
  animation: pulse 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивные стили */
@media (max-width: 1200px) {
  .team-container h2 {
    font-size: 72px;
    margin-bottom: 60px;
  }
  
  .team-slider-content {

  }
  
  .team-member-image {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 992px) {
  .team-container h2 {
    font-size: 60px;
    margin-bottom: 50px;
  }
  
  .team-slider-content {
  }
  
  .team-member-image {
    width: 300px;
    height: 300px;
  }
  
  .team-slider-arrow.left {
    margin-right: 30px;
  }
  
  .team-slider-arrow.right {
    margin-left: 30px;
  }
  
  .team-member-info h3 {
    font-size: 24px;
  }
  
  .team-member-info p {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .team-section {
    padding: 80px 0;
  }
  
  .team-container h2 {
    font-size: 48px;
    margin-bottom: 40px;
  }
  
  .team-slider-content {
  }
  
  .team-member-image {
    width: 250px;
    height: 250px;
  }
  
  .team-slider-arrow {
    width: 50px;
    height: 50px;
  }
  
  .team-slider-arrow.left {
    margin-right: 20px;
  }
  
  .team-slider-arrow.right {
    margin-left: 20px;
  }
  
  .team-member-info h3 {
    font-size: 20px;
  }
  
  .team-member-info p {
    font-size: 16px;
  }
  
  .team-member-line {
    width: 180px;
  }
}

@media (max-width: 576px) {
  .team-section {
    padding: 60px 0;
  }
  
  .team-container h2 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  
  .team-slider-content {

  }
  
  .team-member-image {
    width: 220px;
    height: 220px;
  }
  
  .team-slider-arrow {
    width: 40px;
    height: 40px;
  }
  
  .team-slider-arrow.left {
    margin-right: 10px;
  }
  
  .team-slider-arrow.right {
    margin-left: 10px;
  }
  
  .team-member-info h3 {
    font-size: 18px;
  }
  
  .team-member-info p {
    font-size: 14px;
  }
  
  .team-member-line {
    width: 150px;
  }
}
</style>
