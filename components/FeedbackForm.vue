<template>
  <section class="feedback-section" ref="feedbackSection">
    <div class="feedback-bg">
      <img :src="backgroundImage" alt="Фоновый узор">
    </div>
    <div class="feedback-container">
      <div class="feedback-left">
        <div class="feedback-text" ref="feedbackText">
          <h2>Оставить обратную связь</h2>
          <p>Остались вопросы или есть предложения? Напишите нам – мы всегда на связи!</p>
        </div>
        <div class="feedback-form" ref="feedbackForm">
          <div class="form-group" :class="{ 'error': errors.name, 'pulse-animation': animationFields.name }">
            <label for="name">Имя</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Ваше имя..." 
              v-model="formData.name"
              @focus="clearError('name')"
            >
            <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
          </div>
          <div class="form-group" :class="{ 'error': errors.email, 'pulse-animation': animationFields.email }">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="user.name@email.com" 
              v-model="formData.email"
              @focus="clearError('email')"
            >
            <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
          </div>
          <div class="form-group" :class="{ 'error': errors.phone, 'pulse-animation': animationFields.phone }">
            <label for="phone">Телефон</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="+998 90 111 22 33" 
              v-model="formData.phone"
              @focus="clearError('phone')"
            >
            <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
          </div>
          <div class="form-group" :class="{ 'error': errors.message, 'pulse-animation': animationFields.message }">
            <label for="message">Сообщение</label>
            <textarea 
              id="message" 
              placeholder="Пожалуйста, введите ваше сообщение здесь... (необязательно)" 
              v-model="formData.message"
              @focus="clearError('message')"
            ></textarea>
            <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
          </div>
          <button 
            class="feedback-submit" 
            @click.prevent="submitForm"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Отправить сообщение</span>
            <span v-else class="spinner"></span>
          </button>
          <div class="form-status" v-if="formStatus.message">
            <div class="success-message" v-if="formStatus.success">
              {{ formStatus.message }}
            </div>
            <div class="error-message-global" v-else>
              {{ formStatus.message }}
            </div>
          </div>
        </div>
      </div>
      <div class="feedback-right">
        <div class="consultation-card" ref="consultationCard">
          <h3>Консультация по проекту</h3>
          <p>Чтобы узнать больше о наших услугах, заполните заявку или позвоните нам. Мы расскажем вам, как мы можем помочь вашему бизнесу.</p>
          <div class="consultation-info">
            <div class="consultation-item">
              <span class="consultation-label">Телефон:</span>
              <span class="consultation-value"><a href="tel:+998941452332"> +998 (94) 145-23-32</a></span>
            </div>
            <div class="consultation-item">
              <span class="consultation-label">Email:</span>
              <span class="consultation-value"><a href="devx.brand@gmail.com"> devx.brand@gmail.com</a></span>
            </div>
            <div class="consultation-item">
              <span class="consultation-label">Адрес:</span>
              <span class="consultation-value">Тошкент шахар Янгихаёт тумани  ул. Райхон, дом F 03-2158</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'FeedbackForm',
  setup() {
    // Refs для анимации
    const feedbackSection = ref(null);
    const feedbackText = ref(null);
    const feedbackForm = ref(null);
    const consultationCard = ref(null);
    
    // Получаем текущий роут
    const route = useRoute();
    
    // Определяем текущую тему для изображения
    const currentTheme = computed(() => {
      if (typeof window !== 'undefined') {
        return document.documentElement.getAttribute('data-theme') || 'white';
      }
      return 'white';
    });
    
    // Получаем путь к изображению в зависимости от темы
    const backgroundImage = computed(() => {
      return currentTheme.value === 'white' ? '/bg_Feedback-white.png' : '/bg_Feedback-dark.png';
    });
    
    // Данные формы
    const formData = reactive({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Ошибки валидации
    const errors = reactive({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Состояние анимации для полей
    const animationFields = reactive({
      name: false,
      email: false,
      phone: false,
      message: false
    });
    
    // Состояние формы
    const isSubmitting = ref(false);
    const formStatus = reactive({
      success: false,
      message: ''
    });
    
    // Функция для валидации формы
    const validateForm = () => {
      let isValid = true;
      
      // Валидация имени
      if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Имя должно содержать не менее 2 символов';
        startPulseAnimation('name');
        isValid = false;
      } else {
        errors.name = '';
      }
      
      // Валидация email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = 'Пожалуйста, введите корректный email';
        startPulseAnimation('email');
        isValid = false;
      } else {
        errors.email = '';
      }
      
      // Валидация телефона
      // Обновленное регулярное выражение для поддержки узбекских (+998) и российских номеров
      const phoneRegex = /^(\+998|998|8)?[\s\-]?(\d{2}|\(\d{2}\))[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$|^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = 'Пожалуйста, введите корректный номер телефона';
        startPulseAnimation('phone');
        isValid = false;
      } else {
        errors.phone = '';
      }
      
      // Валидация сообщения
      if (!formData.message || formData.message.trim().length < 10) {
        errors.message = 'Сообщение должно содержать не менее 10 символов';
        startPulseAnimation('message');
        isValid = false;
      } else {
        errors.message = '';
      }
      
      return isValid;
    };
    
    // Функция для запуска пульсирующей анимации
    const startPulseAnimation = (fieldName) => {
      animationFields[fieldName] = true;
      
      // Останавливаем анимацию через 2 секунды
      setTimeout(() => {
        animationFields[fieldName] = false;
      }, 2000);
    };
    
    // Функция для очистки ошибки при фокусе на поле
    const clearError = (fieldName) => {
      errors[fieldName] = '';
      animationFields[fieldName] = false;
    };
    
    // Функция отправки формы
    const submitForm = async () => {
      // Проверяем валидацию
      if (!validateForm()) {
        return;
      }
      
      // Устанавливаем состояние отправки
      isSubmitting.value = true;
      formStatus.success = false;
      formStatus.message = '';
      
      try {
        // Отправляем данные на сервер
        const response = await fetch('/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        // Если есть ошибки валидации с сервера
        if (!result.success && result.errors) {
          // Устанавливаем ошибки
          Object.keys(result.errors).forEach(key => {
            errors[key] = result.errors[key];
            startPulseAnimation(key);
          });
        } else if (result.success) {
          // Сбрасываем форму при успешной отправке
          formData.name = '';
          formData.email = '';
          formData.phone = '';
          formData.message = '';
          
          // Устанавливаем статус успеха
          formStatus.success = true;
          formStatus.message = result.message;
          
          // Анимация успешной отправки
          if (feedbackForm.value) {
            gsap.fromTo('.success-message', 
              { opacity: 0, y: 20 }, 
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
          }
          
          // Сбрасываем статус через 5 секунд
          setTimeout(() => {
            formStatus.message = '';
            formStatus.success = false;
          }, 5000);
        }
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        formStatus.success = false;
        formStatus.message = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.';
      } finally {
        // Завершаем отправку
        isSubmitting.value = false;
      }
    };
    
    // Функция анимации секции обратной связи
    const animateFeedbackSection = () => {
      if (!feedbackText.value || !feedbackForm.value || !consultationCard.value) return;
      
      // Устанавливаем начальные значения для элементов
      gsap.set(feedbackText.value, { y: 50, opacity: 0 });
      gsap.set(feedbackForm.value.querySelectorAll('.form-group'), { y: 30, opacity: 0 });
      gsap.set(feedbackForm.value.querySelector('button'), { y: 0, opacity: 0 });
      gsap.set(consultationCard.value, { x: 50, opacity: 0 });
      
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: feedbackSection.value,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
      
      timeline
        .to(feedbackText.value, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        })
        .to(feedbackForm.value.querySelectorAll('.form-group'), {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.4')
        .to(feedbackForm.value.querySelector('button'), {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'transform'
        }, '-=0.2')
        .to(consultationCard.value, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.6');
    };
    
    // Следим за изменением маршрута
    watch(() => route.fullPath, () => {
      console.log('Route changed, reinitializing feedback form animation');
      // Очищаем все анимации ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Переинициализируем анимации с небольшой задержкой
      setTimeout(() => {
        animateFeedbackSection();
      }, 300);
    });
    
    // Отслеживаем изменение темы
    watch(currentTheme, () => {
      // При изменении темы переинициализируем анимации
      if (typeof window !== 'undefined') {
        // Очищаем все анимации ScrollTrigger
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        // Переинициализируем анимации
        setTimeout(() => {
          animateFeedbackSection();
        }, 300);
      }
    });
    
    // Инициализация анимаций при монтировании компонента
    onMounted(() => {
      // Небольшая задержка для уверенности, что DOM полностью загружен
      setTimeout(() => {
        animateFeedbackSection();
      }, 500);
      
      // Добавляем обработчик изменения размера окна
      window.addEventListener('resize', handleResize);
    });
    
    // Функция для обработки изменения размера окна
    const handleResize = () => {
      // Очищаем все анимации ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Переинициализируем анимации
      setTimeout(() => {
        animateFeedbackSection();
      }, 300);
    };
    
    // Очистка при размонтировании компонента
    onBeforeUnmount(() => {
      // Удаляем обработчик изменения размера окна
      window.removeEventListener('resize', handleResize);
      
      // Очищаем все анимации ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
</script>

<style scoped>
/* Feedback section */
.feedback-section {
  position: relative;
  background-color: var(--background-color);
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  line-height: 1;
  padding: 150px 0;
}

.feedback-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feedback-bg img {
  width: 100%;
  height: auto;
  opacity: 0.4;
}

.feedback-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  z-index: 0;
}

.feedback-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 1;
}

.feedback-left {
  flex: 1;
  min-width: 300px;
  max-width: 600px;

  button{
    span{
      color: var(--text-hover-color);
    }
  }
}

.feedback-text h2 {
  font-weight: 400;
  font-size: 50px;
  margin-bottom: 20px;
  color: var(--text-hover-color);
}

.feedback-text p {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  color: var(--text-color);
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.form-group label {
  font-weight: 700;
  font-size: 18px;
  color: var(--text-hover-color);
}

.form-group input,
.form-group textarea {
  padding: 15px;
  border: 3px solid var(--text-hover-color);
  background-color: transparent;
  color: var(--text-color);
  font-size: 18px;
  border-radius: 0;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-color);
  opacity: 0.5;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.feedback-submit {
  align-self: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 16px 32px;
  background-color: var(--btn1-color);
  color: #fff;
  border: 3px solid var(--text-hover-color);
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  min-width: 220px;
  z-index: 5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  opacity: 1 !important;
  box-sizing: content-box;
  overflow: visible;

  @media (max-width: 576px) {
    width: 150px;
    padding: 10px 20px;
  }
}

.form-group:last-of-type {
  margin-bottom: 15px;
}

.form-status {
  margin-top: 20px;
  margin-bottom: 10px;
}

.success-message {
  background-color: rgba(46, 204, 113, 0.1);
  border-left: 3px solid #2ecc71;
  padding: 10px 15px;
  color: #2ecc71;
  border-radius: 4px;
}

.error-message-global {
  background-color: rgba(231, 76, 60, 0.1);
  border-left: 3px solid #e74c3c;
  padding: 10px 15px;
  color: #e74c3c;
  border-radius: 4px;
  margin-top: 15px;
}

/* Стили для анимации ошибок */
.form-group.error input,
.form-group.error textarea {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}

/* Пульсирующая анимация для ошибок */
@keyframes pulse-error {
  0% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(231, 76, 60, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
  }
}

.pulse-animation input,
.pulse-animation textarea {
  animation: pulse-error 1.5s infinite;
}

/* Спиннер для кнопки отправки */
@keyframes spinner {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: spinner 0.8s linear infinite;
}

.feedback-submit:hover {
  background-color: var(--btn1-color-hover);
  transform: translateY(-2px);
  border-color: var(--btn1-color-hover);
}

.feedback-submit:disabled {
  opacity: 0.7 !important;
  cursor: not-allowed;
}

.feedback-right {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  align-items: center;
}

.consultation-card {
  width: 100%;
  padding: 30px;
  border: 5px dashed var(--btn1-color-text);
  background-color: var(--text-hover-color);
  position: relative;
  color: var(--text-color);
  max-width: 371px;
}

.consultation-card h3 {
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 15px;
  color: var(--btn1-color-text);
}

.consultation-card p {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 30px;
  color: var(--feedback-text-color);
}

.consultation-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.consultation-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.consultation-label {
  font-weight: 700;
  font-size: 16px;
  color: var(--btn1-color-text);
}

.consultation-value {
  font-weight: 400;
  font-size: 16px;
  color: var(--feedback-text-color);
  
  a{
    &:hover{
      color: var(--background-color);
    }
  }
}

/* Адаптивность */
@media (max-width: 1200px) {
  .feedback-container {
    max-width: 960px;
  }
  
  .feedback-text h2 {
    font-size: 42px;
  }
}

@media (max-width: 992px) {
  .feedback-container {
    max-width: 720px;
  }
  
  .feedback-text h2 {
    font-size: 36px;
  }
  
  .consultation-card h3 {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .feedback-section {
    padding: 80px 0;
  }
  
  .feedback-container {
    max-width: 540px;
    flex-direction: column;
    align-items: center;
  }
  
  .feedback-left,
  .feedback-right {
    max-width: 100%;
  }
  
  .feedback-text h2 {
    font-size: 32px;
  }
  
  .consultation-card {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .feedback-section {
    padding: 60px 0;
    max-width: none;
  }
  
  .feedback-text h2 {
    font-size: 28px;
  }
  
  .feedback-text p {
    font-size: 16px;
  }
  
  .form-group label {
    font-size: 16px;
  }
  
  .form-group input,
  .form-group textarea {
    font-size: 16px;
    padding: 12px;
    max-width: none;
    width: 100%;
  }
  
  .consultation-card h3 {
    font-size: 24px;
  }
  
  .consultation-card p {
    font-size: 14px;
  }
  
  .consultation-label,
  .consultation-value {
    font-size: 14px;
  }
}
</style>
