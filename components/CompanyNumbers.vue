<template>
  <section class="company-numbers" ref="companySection">
    <div class="company-numbers-container" ref="companyContainer">
      <div class="company-numbers-text">
        <span class="company-numbers-text1" ref="companyTitle">Компания DevX в цифрах: комплексная автоматизация управления бизнесом</span>
        <div class="company-numbers-div" ref="companyDiv1">
          <span class="company-numbers-text2" ref="companyText1">> 20 экспертов</span>
          <span class="company-numbers-text3" ref="companyText2">В команде более 20<br>сертифицированных специалистов<br>по автоматизации.</span>
        </div>
        <div class="company-numbers-div" ref="companyDiv2">
          <span class="company-numbers-text2" ref="companyText3">> 250 клиентов</span>
          <span class="company-numbers-text3" ref="companyText4">Оказываем тех поддержку,<br> сопровождение и постпродажное<br>обслуживание более 250 нашим<br>постоянным клиентам.</span>
        </div>
      </div>
      <div class="company-numbers-footer" ref="companyFooter">
        <span class="company-numbers-text4" ref="companyText5">Опытные<br> специалисты</span>
        <div class="company-numbers-verticalLine" ref="verticalLine"></div>
        <span class="company-numbers-text5" ref="companyText6">Наша команда — это профессионалы с многолетним опытом в создании и<br> продвижении сайтов. Мы объединяем экспертов в области веб-разработки, дизайна, маркетинга и<br> аналитики, чтобы предложить вам комплексные решения для вашего бизнеса</span>
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
  name: 'CompanyNumbers',
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
    
    let scrollTriggerInstance = null;

    // Инициализация анимаций
    const initAnimations = () => {
      // Начальные состояния элементов
      gsap.set([companyTitle.value, companyText1.value, companyText2.value, companyText3.value, companyText4.value, companyText5.value, companyText6.value], {
        y: 30,
        opacity: 0
      });
      
      gsap.set([companyDiv1.value, companyDiv2.value], {
        y: 30,
        opacity: 0,
        borderWidth: '0px',
        borderColor: 'transparent'
      });
      
      gsap.set(companyContainer.value, {
        borderWidth: '0px',
        borderColor: 'transparent',
        opacity: 0.8,
        y: 20
      });
      
      gsap.set(verticalLine.value, {
        height: 0,
        opacity: 0
      });
      
      gsap.set(companyFooter.value, {
        y: 30,
        opacity: 0
      });
      
      // Создаем таймлайн для анимации
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: companySection.value,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
      
      // Анимация контейнера
      tl.to(companyContainer.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out'
      })
      
      // Анимация бордера контейнера
      .to(companyContainer.value, {
        borderWidth: '2px',
        borderColor: 'var(--text-hover-color)',
        duration: 0.3,
        ease: 'power1.inOut'
      }, '-=0.2')
      
      // Анимация заголовка
      .to(companyTitle.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out'
      }, '-=0.3')
      
      // Анимация первого блока
      .to(companyDiv1.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out'
      }, '-=0.3')
      
      // Анимация бордера первого блока
      .to(companyDiv1.value, {
        borderWidth: '2px',
        borderColor: 'var(--text-hover-color)',
        duration: 0.3,
        ease: 'power1.inOut'
      }, '-=0.3')
      
      // Анимация текстов в первом блоке
      .to([companyText1.value, companyText2.value], {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
        stagger: 0.1
      }, '-=0.3')
      
      // Анимация второго блока
      .to(companyDiv2.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out'
      }, '-=0.2')
      
      // Анимация бордера второго блока
      .to(companyDiv2.value, {
        borderWidth: '2px',
        borderColor: 'var(--text-hover-color)',
        duration: 0.3,
        ease: 'power1.inOut'
      }, '-=0.3')
      
      // Анимация текстов во втором блоке
      .to([companyText3.value, companyText4.value], {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
        stagger: 0.1
      }, '-=0.3')
      
      // Анимация футера
      .to(companyFooter.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out'
      }, '-=0.2')
      
      // Анимация вертикальной линии
      .to(verticalLine.value, {
        height: '100px',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut'
      }, '-=0.3')
      
      // Анимация текстов в футере
      .to([companyText5.value, companyText6.value], {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
        stagger: 0.1
      }, '-=0.4');
      
      // Сохраняем экземпляр ScrollTrigger для последующей очистки
      scrollTriggerInstance = ScrollTrigger.getAll().find(
        trigger => trigger.vars.trigger === companySection.value
      );
    };
    
    // Функция очистки анимаций
    const clearAnimations = () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }
      
      // Очищаем все ScrollTrigger, связанные с этим компонентом
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === companySection.value) {
          trigger.kill();
        }
      });
    };
    
    // Обработчик изменения размера окна
    const handleWindowResize = () => {
      // Очищаем предыдущие анимации
      clearAnimations();
      
      // Запускаем анимации заново после небольшой задержки
      setTimeout(() => {
        initAnimations();
      }, 300);
    };
    
    onMounted(() => {
      // Инициализация анимации
      setTimeout(() => {
        initAnimations();
      }, 500);
      
      // Добавляем обработчик изменения размера окна
      window.addEventListener('resize', handleWindowResize);
    });
    
    onBeforeUnmount(() => {
      clearAnimations();
      
      // Удаляем обработчик изменения размера окна
      window.removeEventListener('resize', handleWindowResize);
    });
    
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
}
</script>

<style scoped>
/* company numbers section */
.company-numbers {
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 150px;
  margin-top:-50px;
  z-index: 3;
}

.company-numbers-container {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  gap: 42px;
  border: 2px solid var(--text-hover-color);
  border-radius: 4px;
  padding: 51px 40px;
  background-color: var(--background-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1540px;
  max-width: 95%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  will-change: transform, opacity, border;
}

@media (max-width: 1600px) {
  .company-numbers-container {
    width: 100%;
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .company-numbers-container {
    width: 100%;
    max-width: 900px;
  }
}
@media (max-width: 900px) {
  .company-numbers-container {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }
}

.company-numbers-text {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
}

.company-numbers-footer {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
}

.company-numbers-div {
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 2px dashed var(--text-hover-color);
  border-radius: 2px;
  padding: 25px;
  background-color: var(--background-color);
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s ease;
  will-change: transform, opacity, border;
}

.company-numbers-div:hover {
  border-style: solid;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.company-numbers-verticalLine {
  width: 1px;
  height: 100px;
  background-color: var(--text-hover-color);
  margin: 0 20px;
  will-change: transform, opacity, height;
}

.company-numbers-text1 {
  font-weight: 400;
  font-size: 24px;
  color: var(--text-hover-color);
  line-height: 1.3;
  will-change: transform, opacity;
}

.company-numbers-text2 {
  font-weight: 700;
  font-size: 24px;
  color: var(--text-color);
  margin-bottom: 10px;
  will-change: transform, opacity;
}

.company-numbers-text3 {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
  line-height: 1.4;
  will-change: transform, opacity;
}

.company-numbers-text4 {
  font-weight: 700;
  font-size: 24px;
  color: var(--text-color);
  white-space: nowrap;
  will-change: transform, opacity;
}

.company-numbers-text5 {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  width: 100%;
  margin: 0 auto;
  line-height: 1.5;
  will-change: transform, opacity;
}

@media (max-width: 1024px) {
  .company-numbers {
    padding: 120px 0;
  }
  
  .company-numbers-container {
    padding: 40px 30px;
    margin-top: -120px;
  }
  
  .company-numbers-text {
    flex-direction: column;
    padding: 10px;
  }
  
  .company-numbers-text1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  
  .company-numbers-div {
    padding: 20px;
    gap: 20px;
  }
  
  .company-numbers-footer {
    flex-direction: column;
    text-align: center;
  }
  
  .company-numbers-verticalLine {
    display: none;
  }
}

@media (max-width: 768px) {
  .company-numbers {
    padding: 100px 0;
  }
  
  .company-numbers-container {
    padding: 30px 20px;
  }
  
  .company-numbers-text1, 
  .company-numbers-text2, 
  .company-numbers-text4 {
    font-size: 20px;
  }
  
  .company-numbers-text3, 
  .company-numbers-text5 {
    font-size: 14px;
  }
  .company-numbers-verticalLine {
    display: none;
  }
}

@media (max-width: 425px) {
  .company-numbers {
    padding: 80px 0;
  }
  
  .company-numbers-container {
    padding: 25px 15px;
  }
  
  .company-numbers-text1, 
  .company-numbers-text2, 
  .company-numbers-text4 {
    font-size: 18px;
  }
  
  .company-numbers-text3, 
  .company-numbers-text5 {
    font-size: 12px;
  }
  
  .company-numbers-div {
    padding: 15px;
  }
  .company-numbers-verticalLine {
    display: none;
  }
}
</style>
