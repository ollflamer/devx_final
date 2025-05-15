<template>
  <section class="clients">
      <div class="page-container">
        <div class="wrap">
          <h1 class="title">Все клиенты DevX</h1>
          <h4 class="subtitle">Таблица клиентов:</h4>
          <div class="box grid">
            <div ref="gridRef" class="company-grid">
              <div
                v-for="(company, idx) in companies"
                :key="company.name"
                class="company-card"
              >
                <div class="logo-wrap">
                  <img :src="company.src" :alt="company.name" />
                </div>
                <div class="company-name">{{ company.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  <FeedbackForm />
</template>

<script setup>
import FeedbackForm from "~/components/FeedbackForm.vue";
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';

const companies = [
  { name: "C7Cybersecurity", src: "/companys/C7Cybersecurity.png" },
  { name: "tradevisa", src: "/companys/tradevisa.png" },
  {
    name: "auto-zone-control-systems",
    src: "/companys/auto-zone-control-systems-logo-vector.png",
  },
  { name: "caz", src: "/companys/caz.png" },
  { name: "beta-tea", src: "/companys/beta-tea-logo.png" },
  { name: "islohot", src: "/companys/islohot.png" },
  { name: "mela", src: "/companys/mela.png" },
  { name: "samsung", src: "/companys/samsung.png" },
  { name: "veva", src: "/companys/veva.png" },
  { name: "agroport", src: "/companys/agroport.png" },
  { name: "artel", src: "/companys/artel.png" },
  { name: "akfa", src: "/companys/akfa.png" },
];

const gridRef = ref(null);

onMounted(async () => {
  await nextTick();
  gsap.from(
    gridRef.value.querySelectorAll('.company-card'),
    {
      opacity: 0,
      scale: 0.7,
      stagger: 0,
      duration: 1.1,
      ease: 'power1.out',
      clearProps: 'all',
    }
  );
});
</script>

<style scoped>

.clients {
  padding-bottom: 100px;
  border-bottom: 5px dashed var(--text-hover-color);
}
.page-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
  line-height: 1.5;
}
.title {
  text-align: start;
  font-size: 64px;
  font-weight: 700;
  color: var(--text-hover-color);
  margin-top: 100px;
  padding-left: 90px;
  
  @media (max-width: 1310px) {
    padding-left: 0;
  }

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
}
.subtitle {
  text-align: start;
  font-size: 24px;
  margin-bottom: 40px;
  color: var(--text-color);
  padding-left: 90px;

  @media (max-width: 1310px) {
    padding-left: 0;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
}
.box.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin-bottom: 10px;
}
.company-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1100px;
}
.company-card {
  background: rgb(255, 255, 255);
  border-radius: 18px;
  box-shadow: 0 0 12px 1px #fff, 0 0 0 1px #111, 0 0 2px 0 #ffffffa8 inset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px 20px 16px;
  min-height: 180px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border: 2px solid #111;
}
.company-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.13);
  border-color: var(--text-hover-color, #333);
}
.logo-wrap {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.logo-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.company-name {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: black;
  margin-top: 8px;
}
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s cubic-bezier(0.6, -0.28, 0.74, 0.05);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
