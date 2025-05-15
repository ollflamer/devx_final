<template>
  <div class="min-h-screen flex flex-col app-container">
    <header class="header">
        <div class="header-container">
            <div class="logo" v-auto-animate>
                <NuxtLink to="/">
                    <img :src="logoImage" alt="DevX" class="dark:invert">
                </NuxtLink>
            </div>

            <nav class="nav" v-auto-animate>
                <li><NuxtLink to="/clients">Клиенты</NuxtLink></li>
                <li><NuxtLink to="/licenses">Лицензии</NuxtLink></li>
                <li><NuxtLink to="/about">О компании</NuxtLink></li>
                <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
            </nav>

            <div class="contacts" v-auto-animate>
                <a href="tel:+998941452332">+998941452332</a>
                <a id="tg" href="#"><img :src="tgImage" alt="Telegram"></a>
                <button id="theme-toggle" @click="toggleTheme">
                    <img :src="themeImage" alt="Theme Toggle">
                </button>
            </div>
            
            <div class="theme-animation-container" ref="themeAnimationContainer">
                <svg class="comet-svg" ref="cometSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="cometTailDark" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#00ffff" stop-opacity="1" />
                            <stop offset="40%" stop-color="#4169e1" stop-opacity="0.8" />
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                        </linearGradient>
                        
                        <linearGradient id="cometTailLight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#000000" stop-opacity="1" />
                            <stop offset="40%" stop-color="#333333" stop-opacity="0.8" />
                            <stop offset="100%" stop-color="#666666" stop-opacity="0" />
                        </linearGradient>
                        
                        <filter id="glowDark" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        
                        <filter id="glowLight" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    
                    <g class="comet-dark-theme">
                        <!-- Основной хвост -->
                        <path class="comet-tail" d="M20,25 L-230,25" stroke="url(#cometTailDark)" stroke-width="15" stroke-linecap="round" />
                        
                        <!-- Дополнительные лучи -->
                        <path d="M20,25 L-180,15" stroke="url(#cometTailDark)" stroke-width="5" stroke-linecap="round" opacity="0.7" />
                        <path d="M20,25 L-180,35" stroke="url(#cometTailDark)" stroke-width="5" stroke-linecap="round" opacity="0.7" />
                        
                        <!-- Голова кометы -->
                        <circle class="comet-head" cx="20" cy="25" r="12" fill="#ffffff" filter="url(#glowDark)" />
                    </g>
                    
                    <g class="comet-light-theme">
                        <!-- Основной хвост -->
                        <path class="comet-tail" d="M20,25 L-230,25" stroke="url(#cometTailLight)" stroke-width="15" stroke-linecap="round" />
                        
                        <!-- Дополнительные лучи -->
                        <path d="M20,25 L-180,15" stroke="url(#cometTailLight)" stroke-width="5" stroke-linecap="round" opacity="0.7" />
                        <path d="M20,25 L-180,35" stroke="url(#cometTailLight)" stroke-width="5" stroke-linecap="round" opacity="0.7" />
                        
                        <!-- Голова кометы -->
                        <circle class="comet-head" cx="20" cy="25" r="12" fill="#000000" filter="url(#glowLight)" />
                    </g>
                </svg>
                
                <div style="display: none;">
                    <!-- SVG для звезды (темная тема) -->
                    <svg id="star-template-dark" viewBox="0 0 24 24" width="100%" height="100%">
                        <path d="M12,1.5l2.4,7.4h7.8l-6.3,4.6l2.4,7.4L12,16.3l-6.3,4.6l2.4-7.4L1.8,8.9h7.8L12,1.5z" fill="#00ffff" />
                        <filter id="star-glow-dark">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </svg>
                    
                    <!-- SVG для звезды (светлая тема) -->
                    <svg id="star-template-light" viewBox="0 0 24 24" width="100%" height="100%">
                        <path d="M12,1.5l2.4,7.4h7.8l-6.3,4.6l2.4,7.4L12,16.3l-6.3,4.6l2.4-7.4L1.8,8.9h7.8L12,1.5z" fill="#000000" />
                        <filter id="star-glow-light">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </svg>
                </div>
                
                <div class="comet-trail" ref="cometTrail"></div>
                
                <div class="stars-container" ref="starsContainer">
                    <template v-for="n in 20" :key="`star-${n}`">
                        <div class="star" :class="`star-${n}`"></div>
                    </template>
                </div>
            </div>
            
            <div class="header__burger-menu" @click="toggleMobileMenu">
                <div class="burger-icon"></div>
            </div>
        </div>
        
        <!-- Навигационный индикатор -->
        <div class="header-indicator">
            <div class="header-line"></div>
            <div class="header-triangle" ref="navTriangle"></div>
        </div>
        
        <!-- Мобильное меню -->
        <div v-if="mobileMenuOpen" :class="['mobile-menu', { 'closing': isClosing }]" v-auto-animate>
            <nav class="mobile-nav">
                <li><NuxtLink @click="closeMobileMenu" to="/orders">Заказы</NuxtLink></li>
                <li><NuxtLink @click="closeMobileMenu" to="/licenses">Лицензии</NuxtLink></li>
                <li><NuxtLink @click="closeMobileMenu" to="/about">О компании</NuxtLink></li>
                <li><NuxtLink @click="closeMobileMenu" to="/contacts">Контакты</NuxtLink></li>
            </nav>
            <div class="mobile-contacts">
                <a href="tel:+998941452332">+998941452332</a>
                <a id="mobile-tg" href="#"><img :src="tgImage" alt="Telegram"></a>
                <button id="mobile-theme-toggle" @click="toggleTheme"><img :src="themeImage" alt="Theme Toggle"></button>
            </div>
        </div>
    </header>

    <main class="flex-grow main-content">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import Footer from '~/components/Footer.vue';
import gsap from 'gsap';
import { useNuxtApp } from '#app';

import logoImg from '~/assets/images/DevX.png';
import tgImg from '/TG.png';
import themeImg from '/Theme.png';

const logoImage = ref(logoImg);
const tgImage = ref(tgImg);
const themeImage = ref(themeImg);

const vAutoAnimate = useAutoAnimate({
  duration: 300,
  easing: 'ease-in-out'
});

const mobileMenuOpen = ref(false);
const isClosing = ref(false);

const themeAnimationContainer = ref(null);
const cometSvg = ref(null);
const starsContainer = ref(null);
const navTriangle = ref(null);

// Функция для открытия/закрытия мобильного меню
const toggleMobileMenu = () => {
  if (mobileMenuOpen.value) {
    closeMobileMenu();
  } else {
    mobileMenuOpen.value = true;
    document.body.style.overflow = 'hidden';
  }
};

const closeMobileMenu = () => {
  isClosing.value = true;
  setTimeout(() => {
    mobileMenuOpen.value = false;
    isClosing.value = false;
    document.body.style.overflow = '';
  }, 500); 
};

// Текущая тема. Изначально значение не важно, оно установится в onMounted
const theme = ref('white'); 

onMounted(() => {
  // Проверяем, сохранена ли тема в localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
  } else {
    // Если темы не сохранены, определяем системную тему через prefers-color-scheme
    theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'white';
  }
  // Устанавливаем data-theme на <html>
  document.documentElement.setAttribute('data-theme', theme.value);
  
  if (themeAnimationContainer.value) {
    gsap.set(themeAnimationContainer.value, { autoAlpha: 0 });
  }
  if (starsContainer.value) {
    gsap.set(starsContainer.value, { autoAlpha: 0 });
  }
  
  // Инициализация индикатора навигации
  nextTick(() => {
    updateNavIndicator();
    
    // Добавляем обработчики наведения для ссылок в навигации
    const navLinks = document.querySelectorAll('.nav li a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => updateNavIndicator(link));
      link.addEventListener('mouseleave', () => updateNavIndicator());
    });
    
    // Обновляем индикатор при изменении маршрута
    const nuxtApp = useNuxtApp();
    nuxtApp.$router.afterEach(() => {
      setTimeout(() => updateNavIndicator(), 100);
    });
  });
});

// Функция для очистки звезд (анимация)
function clearAllStars() {
  const trailStars = document.querySelectorAll('.trail-star');
  trailStars.forEach(star => {
    gsap.killTweensOf(star);
    if (star.parentNode) {
      star.parentNode.removeChild(star);
    }
  });
  
  if (starsContainer.value) {
    gsap.set(starsContainer.value, { autoAlpha: 0, display: 'none' });
    
    const stars = starsContainer.value.querySelectorAll('.star');
    stars.forEach(star => {
      gsap.killTweensOf(star);
      gsap.set(star, { opacity: 0, scale: 0, x: 0, y: 0, rotation: 0 });
    });
  }
}

// Функция переключения темы с сохранением анимации
const toggleTheme = () => {
  const targetTheme = theme.value === 'white' ? 'black' : 'white';
  
  const header = document.querySelector('.header');
  const headerRect = header.getBoundingClientRect();
  const headerWidth = headerRect.width;
  const headerHeight = headerRect.height;
  
  const tl = gsap.timeline();
  
  clearAllStars();
  
  tl.set(themeAnimationContainer.value, { 
    autoAlpha: 1,
    width: headerWidth,
    height: headerHeight,
    top: 0,
    left: 0
  });
  
  const currentTheme = theme.value;
  const darkThemeComet = document.querySelector('.comet-dark-theme');
  const lightThemeComet = document.querySelector('.comet-light-theme');
  
  if (currentTheme === 'white') {
    darkThemeComet.style.display = 'none';
    lightThemeComet.style.display = 'block';
  } else {
    darkThemeComet.style.display = 'block';
    lightThemeComet.style.display = 'none';
  }
  
  tl.fromTo(cometSvg.value, 
    { 
      x: -300, 
      y: -75, 
      autoAlpha: 0,
      scale: 0.8
    },
    { 
      x: headerWidth + 300, 
      y: 130, 
      autoAlpha: 1,
      scale: 1.5,
      duration: 1.5, 
      ease: "power1.in",
      onUpdate: function() {
        if (Math.random() > 0.7) { 
          createStar();
        }
      }
    }
  );
  
  tl.set(starsContainer.value, { 
    autoAlpha: 0,
    display: 'block'
  }, "-=0.4");
  
  tl.to(starsContainer.value, {
    autoAlpha: 1,
    duration: 0.3
  });
  
  tl.to('.star', {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.03,
    ease: "back.out(1.7)",
    onComplete: animateStars
  }, "-=0.2");
  
  tl.to('.star', {
    opacity: 0,
    scale: 0,
    duration: 0.3,
    stagger: 0.02,
    delay: 0.3,
    ease: "power1.in"
  });
  
  tl.to(starsContainer.value, {
    autoAlpha: 0,
    duration: 0.2,
    onComplete: () => {
      gsap.set(starsContainer.value, { display: 'none' });
    }
  });
  
  tl.to(themeAnimationContainer.value, {
    autoAlpha: 0,
    duration: 0.3,
    onComplete: () => {
      // После завершения анимации обновляем тему,
      // устанавливаем data-theme и сохраняем в localStorage
      theme.value = targetTheme;
      document.documentElement.setAttribute('data-theme', theme.value);
      localStorage.setItem('theme', theme.value);
    }
  });
};

// Функция создания звезды (анимация)
function createStar() {
  const cometRect = cometSvg.value.getBoundingClientRect();
  const headerRect = themeAnimationContainer.value.getBoundingClientRect();
  
  const currentTheme = theme.value;
  
  const star = document.createElement('div');
  star.className = 'trail-star';
  
  const starTemplate = currentTheme === 'white' 
    ? document.getElementById('star-template-light').cloneNode(true)
    : document.getElementById('star-template-dark').cloneNode(true);
  
  starTemplate.removeAttribute('id');
  
  const size = 6 + Math.random() * 14; 
  const offsetX = -20 - Math.random() * 60; 
  const offsetY = -15 + Math.random() * 30; 
  
  const starX = (cometRect.left - headerRect.left) + offsetX;
  const starY = (cometRect.top - headerRect.top) + offsetY;
  
  star.style.position = 'absolute';
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${starX}px`;
  star.style.top = `${starY}px`;
  star.style.transform = `rotate(${Math.random() * 360}deg)`; 
  star.style.zIndex = '1'; 
  
  star.appendChild(starTemplate);
  
  themeAnimationContainer.value.appendChild(star);
  
  gsap.fromTo(star, 
    { opacity: 0, scale: 0 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 0.3,
      delay: 0.1, 
      onComplete: () => {
        const movementTimeline = animateTrailStar(star);
        
        movementTimeline.eventCallback("onComplete", () => {
          gsap.to(star, {
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            ease: "power1.out",
            onComplete: () => {
              if (star.parentNode) {
                star.parentNode.removeChild(star);
              }
            }
          });
        });
      }
    }
  );
}

// Функция анимации следящей звезды
function animateTrailStar(star) {
  const container = themeAnimationContainer.value;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  
  const starRect = star.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const currentX = starRect.left - containerRect.left;
  const currentY = starRect.top - containerRect.top;
  
  const masterTl = gsap.timeline();
  
  const endX = Math.random() * containerWidth - currentX;
  const endY = Math.random() * containerHeight - currentY;
  
  const movementTl = gsap.timeline();
  
  movementTl.to(star, {
    x: `+=${-10 + Math.random() * 20}`,
    y: `+=${-10 + Math.random() * 20}`,
    duration: 0.3,
    ease: "sine.inOut"
  });
  
  const segments = 3 + Math.floor(Math.random() * 3); 
  
  for (let i = 1; i <= segments; i++) {
    const progress = i / segments;
    const segmentX = endX * progress;
    const segmentY = endY * progress;
    
    const deviationX = -30 + Math.random() * 60; 
    const deviationY = -30 + Math.random() * 60; 
    
    const finalX = i === segments ? endX : segmentX + deviationX;
    const finalY = i === segments ? endY : segmentY + deviationY;
    
    movementTl.to(star, {
      x: finalX,
      y: finalY,
      opacity: 0.4 + Math.random() * 0.6,
      scale: 0.8 + Math.random() * 0.5,
      rotation: `+=${-45 + Math.random() * 90}`, 
      duration: 0.7 + Math.random() * 0.8, 
      ease: i % 2 === 0 ? "power2.inOut" : "sine.inOut"
    });
  }
  masterTl.add(movementTl);
  
  gsap.to(star, {
    x: "+=random(-15,15)", 
    y: "+=random(-15,15)", 
    duration: 0.5,
    repeat: 6, 
    yoyo: true, 
    ease: "sine.inOut",
    modifiers: {
      x: (x) => parseFloat(x) + (-5 + Math.random() * 10),
      y: (y) => parseFloat(y) + (-5 + Math.random() * 10)
    }
  });
  
  gsap.to(star, {
    opacity: "+=random(-0.5,0.3)", 
    duration: 0.4,
    repeat: 8,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  gsap.to(star, {
    rotation: "+=random(-180,180)", 
    duration: 2 + Math.random() * 1.5,
    repeat: 1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  return masterTl;
}

// Функция анимации звезд в контейнере
function animateStars() {
  const stars = document.querySelectorAll('.star');
  
  stars.forEach(star => {
    const starTl = gsap.timeline({ repeat: -1, yoyo: true });
    
    starTl.to(star, {
      opacity: 0.3 + Math.random() * 0.7,
      scale: 0.8 + Math.random() * 0.4,
      duration: 1 + Math.random() * 2,
      delay: Math.random() * 0.5,
      ease: "sine.inOut"
    });
  });
}

// Функция для обновления индикатора навигации
function updateNavIndicator(target = null) {
  if (!navTriangle.value) return;
  
  // Если цель не указана, найдем активную ссылку
  if (!target) {
    const activeLink = document.querySelector('.nav li a.router-link-active');
    if (activeLink) {
      target = activeLink;
    } else {
      // Если активной ссылки нет, скрываем треугольник
      navTriangle.value.style.opacity = '0';
      return;
    }
  }
  
  // Получаем координаты target элемента
  const targetRect = target.getBoundingClientRect();
  const headerRect = document.querySelector('.header').getBoundingClientRect();
  
  // Устанавливаем позицию треугольника по центру целевого элемента
  const trianglePosition = targetRect.left + targetRect.width / 2 - headerRect.left;
  
  // Анимируем перемещение треугольника
  gsap.to(navTriangle.value, {
    left: trianglePosition,
    opacity: 1,
    duration: 0.3,
    ease: "power2.out"
  });
}
</script>



<style scoped>
.app-container {
    transition: color 0.3s ease;
    color: var(--text-color);
    overflow-x: hidden;
    width: 100%;
    overflow-y: hidden;
}

.main-content {
    transition: background-color 0.3s ease;
    overflow-x: hidden;
    width: 100%;
    overflow-y: hidden;
}

.header {
    padding: 36px 120px;
    box-shadow: 0 4px 6px rgb(240, 240, 240);
    height: 130px;
    background-image: var(--background-image);
    background-color: var(--background-color);
    position: relative;
    z-index: 100;
    transition: all 0.3s ease;
    overflow: visible;

    @media (max-width: 1560px) {
        padding: 20px;
    }
}

.header-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    transition: all 0.3s ease;
    overflow: visible;

    @media (max-width: 1560px) {
        flex-wrap: nowrap;
        justify-content: space-between;
        gap: 50px;
    }
}

.logo {
    position: relative;
    padding: 5px;
    overflow: visible;
}

.logo img {
    height: 60px;
    filter: invert(var(--logo-invert));
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: scale(1.05);
}

.nav {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    gap: 15.5px;
    transition: all 0.3s ease;
    overflow: visible;
    position: relative;

    @media (max-width: 1560px) {
        display: none;
    }
}

.nav li {
    margin: 0 10px;
    font-weight: 400;
    font-size: 24px;
    list-style-type: none;
    transition: transform 0.3s ease;
    position: relative;
    padding: 5px 0;
}

.nav li:hover {
    transform: translateY(-2px);
}

.nav li a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav li a:hover {
    color: var(--text-hover-color);
}

.contacts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    gap: 15.5px;
    font-weight: 400;
    font-size: 24px;
    transition: all 0.3s ease;
    overflow: visible;

    @media (max-width: 1560px) {
        display: none;
    }
}

.contacts a, .contacts button {
    color: var(--text-color);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 5px;
    transition: all 0.3s ease;
    position: relative;
}

.contacts a:hover, .contacts button:hover {
    color: var(--text-hover-color);
    transform: translateY(-2px);
}

.contacts img {
    filter: invert(var(--logo-invert));
    transition: transform 0.3s ease;
    position: relative;
}

.contacts img:hover {
    transform: scale(1.1);
}

.header__burger-menu {
    display: none;
    transition: all 0.3s ease;
    
    .burger-icon {
        background-image: var(--burger);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: transform 0.3s ease;
        filter: brightness(1.5) contrast(1.2); 
    }

    .burger-icon:hover {
        transform: scale(1.1);
    }

    @media (max-width: 1560px) {
        display: block;
    }
}

/* Мобильное меню */
.mobile-menu {
    position: fixed;
    top: 130px;
    left: 0;
    width: 100%;
    height: calc(100vh - 130px);
    background-color: var(--background-color);
    z-index: 99;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    overflow-y: auto;
    animation: slideDown 0.5s ease-in-out;
}

.mobile-menu.closing {
    animation: slideUp 0.5s ease-in-out forwards;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    text-align: center;
}

.mobile-nav li {
    list-style-type: none;
    margin: 10px 0;
    font-size: 28px;
    font-weight: 400;
    animation: fadeIn 0.5s ease-in-out forwards;
    opacity: 0;
}

.mobile-nav li:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav li:nth-child(2) { animation-delay: 0.2s; }
.mobile-nav li:nth-child(3) { animation-delay: 0.3s; }
.mobile-nav li:nth-child(4) { animation-delay: 0.4s; }

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

.mobile-nav li a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

.mobile-nav li a:hover {
    color: var(--text-hover-color);
}

.mobile-contacts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
    animation: fadeIn 0.5s ease-in-out 0.5s forwards;
    opacity: 0;
}

.mobile-contacts a, .mobile-contacts button {
    color: var(--text-color);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
    transition: all 0.3s ease;
}

.mobile-contacts a:hover, .mobile-contacts button:hover {
    color: var(--text-hover-color);
}

.mobile-contacts img {
    filter: invert(var(--logo-invert));
    transition: transform 0.3s ease;
    width: 40px;
    height: 40px;
}

.mobile-contacts img:hover {
    transform: scale(1.1);
}

.theme-animation-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
  visibility: hidden;
  background: transparent;
}

.comet-svg {
  position: absolute;
  width: 300px;
  height: 150px;
  filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.8));
  z-index: 1010;
  pointer-events: none;
  top: 0; 
  left: 0; 
  transform-origin: top left; 
}

.comet-dark-theme, .comet-light-theme {
  transition: opacity 0.3s ease;
}

/* Звезды в следе кометы */
.trail-star {
  position: absolute;
  z-index: 1;
  filter: drop-shadow(0 0 2px rgba(0, 0, 255, 0.3));
  will-change: transform, opacity, scale; 
}

body.white-theme .trail-star {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
}

body.black-theme .trail-star {
  filter: drop-shadow(0 0 3px rgba(0, 255, 255, 0.8));
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  opacity: 0;
  scale: 0;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease;
  will-change: transform, opacity, width, height; 
}

/* Позиционирование звезд */
.star-1 { width: 3px; height: 3px; top: 15%; left: 10%; }
.star-2 { width: 2px; height: 2px; top: 25%; left: 20%; }
.star-3 { width: 4px; height: 4px; top: 10%; left: 30%; }
.star-4 { width: 2px; height: 2px; top: 35%; left: 40%; }
.star-5 { width: 3px; height: 3px; top: 20%; left: 50%; }
.star-6 { width: 2px; height: 2px; top: 30%; left: 60%; }
.star-7 { width: 4px; height: 4px; top: 15%; left: 70%; }
.star-8 { width: 2px; height: 2px; top: 25%; left: 80%; }
.star-9 { width: 3px; height: 3px; top: 10%; left: 90%; }
.star-10 { width: 2px; height: 2px; top: 40%; left: 15%; }
.star-11 { width: 4px; height: 4px; top: 50%; left: 25%; }
.star-12 { width: 3px; height: 3px; top: 60%; left: 35%; }
.star-13 { width: 2px; height: 2px; top: 45%; left: 45%; }
.star-14 { width: 4px; height: 4px; top: 55%; left: 55%; }
.star-15 { width: 3px; height: 3px; top: 65%; left: 65%; }
.star-16 { width: 2px; height: 2px; top: 70%; left: 75%; }
.star-17 { width: 4px; height: 4px; top: 75%; left: 85%; }
.star-18 { width: 3px; height: 3px; top: 80%; left: 95%; }
.star-19 { width: 2px; height: 2px; top: 85%; left: 5%; }
.star-20 { width: 4px; height: 4px; top: 90%; left: 15%; }

/* Стили для индикатора в шапке */
.header-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    z-index: 5;
    pointer-events: none;
}

.header-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
}

.header-triangle {
    position: absolute;
    bottom: 2px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 12px solid #fff;
    border-top: none;
    outline: none;
    outline-offset: 0;
    filter: drop-shadow(0px 0px 1px #000) drop-shadow(0px 0px 1px #000);
    z-index: 2;
    
    @media (max-width: 1560px) {
        display: none;
    }
}

html[data-theme="black"] .header-line {
    filter: invert(1);
}

html[data-theme="black"] .header-triangle {
    border-bottom-color: #000;
    filter: drop-shadow(0px 0px 1px #fff) drop-shadow(0px 0px 1px #fff);
}
</style>
