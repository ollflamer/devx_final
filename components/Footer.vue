<template>
  <footer class="footer" ref="footerSection">
    <div class="footer-line" ref="footerLine"></div>
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-column" ref="footerColumn1">
          <h3>Контактная информация</h3>
          <ul>
            <li>Адрес: Тошкент шахар Янгихаёт тумани  ул. Райхон, дом F 03-2158 </li>
            <li>Телефон: <a href="tel:+998941452332"> +998 94 145 23 32</a></li>
            <li>Email: <a href="devx.brand@gmail.com"> devx.brand@gmail.com</a></li>
            <li>Режим работы: Пн-Пт: 9:00 - 18:00</li>
          </ul>
        </div>
        <div class="footer-column" ref="footerColumn2">
          <h3>Мы в соцсетях</h3>
          <ul>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div class="footer-column" ref="footerColumn3">
          <h3>Быстрые ссылки</h3>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Портфолио</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom" ref="footerBottom">
        <p class="footer-legal">Юридическая информация</p>
        <p class="footer-copyright">©{{ currentYear }} DevX. Все права защищены · <a href="#">Политика конфиденциальности</a> · <a href="#">Пользовательское соглашение</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Footer',
  setup() {
    // Refs для элементов анимации
    const footerSection = ref(null);
    const footerLine = ref(null);
    const footerColumn1 = ref(null);
    const footerColumn2 = ref(null);
    const footerColumn3 = ref(null);
    const footerBottom = ref(null);
    
    // Получаем текущий роут
    const route = useRoute();
    
    // Получаем текущий год для копирайта
    const currentYear = computed(() => new Date().getFullYear());
    
    // Функция анимации футера
    const animateFooter = () => {
      if (!footerSection.value || !footerLine.value || !footerColumn1.value || 
          !footerColumn2.value || !footerColumn3.value || !footerBottom.value) return;
      
      // Устанавливаем начальные значения для элементов
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
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
      
      // Анимация линии
      timeline.to(footerLine.value, {
        width: '100%',
        duration: 1,
        ease: 'power2.out'
      });
      
      // Анимация колонок
      timeline.to([footerColumn1.value, footerColumn2.value, footerColumn3.value], {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5');
      
      // Анимация нижней части
      timeline.to(footerBottom.value, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3');
    };
    
    // Функция для обработки изменения размера окна
    const handleResize = () => {
      // Очищаем все анимации ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Переинициализируем анимации
      setTimeout(() => {
        animateFooter();
      }, 300);
    };
    
    // Следим за изменением маршрута
    watch(() => route.fullPath, () => {
      console.log('Route changed, reinitializing footer animation');
      // Очищаем все анимации ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Переинициализируем анимации с небольшой задержкой
      setTimeout(() => {
        animateFooter();
      }, 300);
    });
    
    onMounted(() => {
      // Небольшая задержка для уверенности, что DOM полностью загружен
      setTimeout(() => {
        animateFooter();
      }, 500);
      
      // Добавляем обработчик изменения размера окна
      window.addEventListener('resize', handleResize);
    });
    
    onBeforeUnmount(() => {
      // Удаляем обработчик изменения размера окна
      window.removeEventListener('resize', handleResize);
      
      // Очищаем все анимации ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
</script>

<style scoped>
/* Footer */
.footer {
  color: var(--text-color);
  padding: 120px 0 30px;
  position: relative;
  width: 100%;
  overflow: hidden;
  will-change: transform, opacity;
}

.footer-container {
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  overflow: hidden;
}

.footer-line {
  height: 2px;
  background-image: var(--background-image-footer-line);
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 40px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  will-change: width;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-start;
}

.footer-column {
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  will-change: transform, opacity;
}

.footer-column h3 {
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--text-hover-color);
  text-align: center;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
}

.footer-column ul li {
  color: var(--text-color);
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-column ul li::before {
  content: "•";
  margin-right: 10px;
  color: var(--text-color);
}

.footer-column a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: var(--text-hover-color);
}

.footer-bottom {
  position: relative;
  padding-top: 20px;
  text-align: center;
  overflow: visible;
  will-change: transform, opacity;
}

.footer-bottom::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1px;
  background-color: var(--text-color);
  opacity: 0.2;
  transform: translateX(calc((100% - 100vw) / 2));
}

.footer-legal {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-hover-color);
}

.footer-copyright {
  font-size: 14px;
  color: var(--text-color);
  opacity: 0.7;
}

.footer-copyright a {
  color: var(--text-color);
  text-decoration: none;
}

.footer-copyright a:hover {
  text-decoration: underline;
}

/* Адаптивность */
@media (max-width: 992px) {
  .footer-column h3 {
    font-size: 22px;
  }
  
  .footer-column ul li {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-column {
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
  }
  
  .footer-column:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 80px 0 20px;
  }
  
  .footer-column h3 {
    font-size: 20px;
  }
  
  .footer-column ul li {
    font-size: 14px;
  }
  
  .footer-legal {
    font-size: 16px;
  }
  
  .footer-copyright {
    font-size: 12px;
  }
}
</style>
