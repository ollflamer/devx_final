<template>
  <div class="page-container">
    <section class="hero">
      <div class="hero__wrap">
        <div class="hero__title">
          <h2>Лендинги (Landing Page)</h2>
          <p>
            Одностраничный сайт для продаж, заявок или акций. Фокусирует
            внимание на цели, повышая конверсию. Идеален для быстрых решений.
          </p>


          <div class="hero__title-buttons">
            <AppButton type="1">Обсудить проект</AppButton>
            <AppButton type="2">Заказать</AppButton>
          </div>
        </div>
        
        <div class="hero__main-img">
          <div class="hero__img">
          </div>

        </div>
      </div>
    </section>

    <Faqs/>
    <FeedbackForm/>
  </div>
</template>

<script setup>
  import Faqs from '~/components/Faqs.vue';
  import FeedbackForm from '~/components/FeedbackForm.vue';
</script>

<style scoped>
.page-container {
  padding: 0;
  margin: 0;
  font-family: "DM Sans", sans-serif;
  line-height: 1.3;
}

.hero__wrap {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding: 0 ;
  margin: 0 auto;
}

.hero__title{
    margin-left: 150px;
    max-width: 750px;
    height: 1100px;
    padding: 120px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-image: var(--background-image-faq);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h2{
        color: var(--text-hover-color);
        font-weight: 700;
        font-size: clamp(1.5rem, 0.955rem + 4.36vw, 3rem);
    }

    p{
        color: var(--text-hover-color);
        font-weight: 700;
        font-size: clamp(1.125rem, 0.989rem + 1.09vw, 1.5rem);
        padding-bottom: 30px;
    }

    .hero__title-buttons{
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 20px;
      flex-wrap: wrap;
      padding: 10px 0;
    }
}

.hero__main-img{
  max-width: 473px;
  padding: 40px 0 40px 40px;
  width: 100%;
  max-height: 850px;
  margin-top: 100px;
  border-bottom: 5px solid var(--text-hover-color);
  border-top: 5px solid var(--text-hover-color);
  border-left: 5px solid var(--text-hover-color);
  margin-right: 0;
}
.hero__img{
  height: 100%;
  background-image: var(--background-image-faq-hero);
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}

/* Адаптивный дизайн */
@media (max-width: 1200px) {
  .hero__title {
    margin-left: 80px;
    max-width: 600px;
    height: auto;
    min-height: 800px;
    padding: 80px 40px 40px 40px;
  }
  
  .hero__main-img {
    max-width: 400px;
    margin-top: 80px;
  }
  
  .hero__wrap {
    padding: 0;
  }
}

@media (max-width: 992px) {
  .hero__wrap {
    gap: 30px;
    padding: 0;
  }
  
  .hero__title {
    margin-left: 40px;
    max-width: 500px;
    min-height: 700px;
    padding: 60px 30px 30px 30px;
  }
  
  .hero__main-img {
    max-width: 350px;
    padding: 30px 0 30px 30px;
  }
}

@media (max-width: 900px) {
  .hero__main-img {
    display: none;
  }

  .hero__wrap {
    justify-content: center;
    padding: 0;
  }
  
  .hero__title {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero__wrap {
    flex-direction: column;
    gap: 20px;
    padding: 0;
  }
  
  .hero__title {
    margin: 0 auto;
    max-width: 100%;
    min-height: 600px;
    order: 1;
    padding: 60px 35px 35px 35px;
  }
  
  .hero__main-img {
    max-width: 100%;
    margin: 60px 0 0;
    padding: 20px;
    border-left: none;
    border-right: 5px solid var(--text-hover-color);
    order: 2;
  }
  
  .hero__img {
    background-position: center;
  }
  
  .hero__title-buttons {
    justify-content: center;
    padding: 15px 0;
  }
}

@media (max-width: 576px) {
  
  
  .hero__wrap {
    padding: 0;
  }
  
  .hero__title {
    padding: 40px 25px 25px 25px;
    min-height: 500px;
    margin: 0 5px;
  }
  
  .hero__main-img {
    margin: 40px 0 0;
    padding: 15px;
    max-height: 600px;
  }
  
  .hero__title-buttons {
    flex-direction: column;
    width: 100%;
    padding: 10px 0;
  }
  
  .hero__title-buttons :deep(button) {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
