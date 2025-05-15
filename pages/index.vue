<template>
  <div class="page-container">
    <main class="main-section" ref="mainSection">
        <div class="particles-container" ref="particlesContainer"></div>
        <div class="triangle-effect" ref="triangleEffect">
          <div class="triangle-glow" ref="triangleGlow"></div>
          <img :src="'/bg_treugol.png'" alt="" ref="triangleImage">
        </div>
        <div class="main-punkitir">
            <img class="main-punkitir-img" src="" alt="" ref="punkitirImg">
        </div>
        <div class="main-container">
            <div class="main-rectangle" ref="mainRectangle">
                <h1 ref="mainTitle">Разработка сайтов<br>специально под вас</h1>
                <p ref="mainDescription">Создаём современные и удобные сайты, которые помогают вашему бизнесу расти и привлекать новых клиентов</p>
            </div>
        </div>
    </main>
    <section class="about-section" ref="aboutSection">
      <div class="about-container">
        <h2 ref="aboutTitle">Немного о нас</h2>
        <h3 ref="aboutSubtitle">Мы создаем не просто сайты, а истории успеха</h3>
        <p ref="aboutText">Создаём современные и удобные сайты, которые помогают вашему бизнесу расти и привлекать новых клиентов</p>
        <div class="about-btn" ref="aboutButtons">
          <AppButton type="1">Подробнее о нас</AppButton>
          <AppButton type="2">Заказать</AppButton>
        </div>
      </div>
      <div class="about-lines" ref="aboutLines"></div>
    </section>
    <CompanyNumbers />
    <section class="uslugi" ref="uslugiSection">
        <div class="mirror" ref="uslugiMirror"></div>
        <div class="uslugi-container" ref="uslugiContainer">
            <div class="uslugi-text" ref="uslugiText">
                <h2 ref="uslugiTitle">Наши услуги</h2>
                <p ref="uslugiDescription">Мы предлагаем полный спектр услуг для создания и продвижения<br> вашего онлайн-присутствия. Вот что мы можем сделать для вас:</p>
            </div>
            <div class="uslugi-grid-container" ref="uslugiGridContainer">
                <div class="grid-uslugi" ref="gridUslugi1">
                    <div class="button-spray" ref="buttonSpray1"></div>
                    <div class="grid-item-uslugi" ref="gridItemUslugi1">
                        <div class="grid-item-uslgi-text-div" ref="gridItemTextDiv1">
                            <h3 ref="gridItemTitle1">Лендинги (Landing Page)</h3>
                            <p ref="gridItemTerm1">Срок: 1 месяц</p>
                        </div>
                        <div class="grid-item-uslgi-description" ref="gridItemDesc1">
                            <p ref="gridItemDescText1">Одностраничные сайты для продвижения продукта, услуги или акции. Максимум внимания на одну цель: заявка, покупка или звонок.</p>
                        </div>
                        <button class="grid-item-uslgi-arrow-button" ref="gridItemButton1"><img class="grid-item-uslgi-arrow" src="" alt=""></button>
                    </div>
                </div>
                <div class="grid-uslugi" ref="gridUslugi2">
                    <div class="button-spray" ref="buttonSpray2"></div>
                    <div class="grid-item-uslugi" ref="gridItemUslugi2">
                        <div class="grid-item-uslgi-text-div" ref="gridItemTextDiv2">
                            <h3 ref="gridItemTitle2">Корпоративные сайты</h3>
                            <p ref="gridItemTerm2">Срок: 1 месяц</p>
                        </div>
                        <div class="grid-item-uslgi-description" ref="gridItemDesc2">
                            <p ref="gridItemDescText2">Многостраничные платформы для презентации компании. Идеальны для укрепления имиджа и привлечения клиентов.</p>
                        </div>
                        <button class="grid-item-uslgi-arrow-button" ref="gridItemButton2"><img class="grid-item-uslgi-arrow" src="" alt=""></button>
                    </div>
                </div>
                <div class="grid-uslugi" ref="gridUslugi3">
                    <div class="button-spray" ref="buttonSpray3"></div>
                    <div class="grid-item-uslugi" ref="gridItemUslugi3">
                        <div class="grid-item-uslgi-text-div" ref="gridItemTextDiv3">
                            <h3 ref="gridItemTitle3">Интернет-магазины</h3>
                            <p ref="gridItemTerm3">Срок: 1 месяц</p>
                        </div>
                        <div class="grid-item-uslgi-description" ref="gridItemDesc3">
                            <p ref="gridItemDescText3">Полноценные платформы для онлайн-продаж. Каталог товаров, корзина, оплата и доставка. Подходит для бизнеса любого масштаба.</p>
                        </div>
                        <button class="grid-item-uslgi-arrow-button" ref="gridItemButton3"><img class="grid-item-uslgi-arrow" src="" alt=""></button>
                    </div>
                </div>
                <div class="grid-uslugi" ref="gridUslugi4">
                    <div class="button-spray" ref="buttonSpray4"></div>
                    <div class="grid-item-uslugi" ref="gridItemUslugi4">
                        <div class="grid-item-uslgi-text-div" ref="gridItemTextDiv4">
                            <h3 ref="gridItemTitle4">Сайты-визитки</h3>
                            <p ref="gridItemTerm4">Срок: 1 месяц</p>
                        </div>
                        <div class="grid-item-uslgi-description" ref="gridItemDesc4">
                            <p ref="gridItemDescText4">Минималистичные сайты для представления услуг или персонального бренда. Основные разделы: услуги, портфолио, контакты.</p>
                        </div>
                        <button class="grid-item-uslgi-arrow-button" ref="gridItemButton4"><img class="grid-item-uslgi-arrow" src="" alt=""></button>
                    </div>
                </div>
                <div class="grid-uslugi" ref="gridUslugi5">
                    <div class="button-spray" ref="buttonSpray5"></div>
                    <div class="grid-item-uslugi" ref="gridItemUslugi5">
                        <div class="grid-item-uslgi-text-div" ref="gridItemTextDiv5">
                            <h3 ref="gridItemTitle5">Портфолио</h3>
                            <p ref="gridItemTerm5">Срок: 1 месяц</p>
                        </div>
                        <div class="grid-item-uslgi-description" ref="gridItemDesc5">
                            <p ref="gridItemDescText5">Креативные платформы для демонстрации работ. Удобная галерея, фильтры и описание проектов. Подходит для творческих профессий.</p>
                        </div>
                        <button class="grid-item-uslgi-arrow-button" ref="gridItemButton5"><img class="grid-item-uslgi-arrow" src="" alt=""></button>
                    </div>
                </div>
                <div class="grid-uslugi" ref="gridUslugi6">
                    <div class="button-spray" ref="buttonSpray6"></div>
                    <div class="grid-item-uslugi" ref="gridItemUslugi6">
                        <div class="grid-item-uslgi-text-div" ref="gridItemTextDiv6">
                            <h3 ref="gridItemTitle6">Промо-сайты</h3>
                            <p ref="gridItemTerm6">Срок: 1 месяц</p>
                        </div>
                        <div class="grid-item-uslgi-description" ref="gridItemDesc6">
                            <p ref="gridItemDescText6">Сайты для продвижения событий, мероприятий или новых продуктов. Яркий дизайн, интерактивные элементы и акцент на вовлечение аудитории.</p>
                        </div>
                        <button class="grid-item-uslgi-arrow-button" ref="gridItemButton6"><img class="grid-item-uslgi-arrow" src="" alt=""></button>
                    </div>
                </div>
            </div>
            <!-- <img class="uslugi-background" src="/bg_uslugi.png" alt="" ref="uslugiBackground"> -->
        </div>
    </section>
    <TeamSlider />
    <FeedbackForm />
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import AppButton from '~/components/AppButton.vue';
import CompanyNumbers from '~/components/CompanyNumbers.vue';
import TeamSlider from '~/components/TeamSlider.vue';
import FeedbackForm from '~/components/FeedbackForm.vue';

const mainSection = ref(null);
const triangleEffect = ref(null);
const triangleImage = ref(null);
const triangleGlow = ref(null);
const mainRectangle = ref(null);
const mainTitle = ref(null);
const mainDescription = ref(null);
const punkitirImg = ref(null);
const particlesContainer = ref(null);

const aboutSection = ref(null);
const aboutTitle = ref(null);
const aboutSubtitle = ref(null);
const aboutText = ref(null);
const aboutButtons = ref(null);
const aboutLines = ref(null);

const uslugiSection = ref(null);
const uslugiMirror = ref(null);
const uslugiContainer = ref(null);
const uslugiText = ref(null);
const uslugiTitle = ref(null);
const uslugiDescription = ref(null);
const uslugiGridContainer = ref(null);

const gridUslugi1 = ref(null);
const buttonSpray1 = ref(null);
const gridItemUslugi1 = ref(null);
const gridItemTextDiv1 = ref(null);
const gridItemTitle1 = ref(null);
const gridItemTerm1 = ref(null);
const gridItemDesc1 = ref(null);
const gridItemDescText1 = ref(null);
const gridItemButton1 = ref(null);

const gridUslugi2 = ref(null);
const buttonSpray2 = ref(null);
const gridItemUslugi2 = ref(null);
const gridItemTextDiv2 = ref(null);
const gridItemTitle2 = ref(null);
const gridItemTerm2 = ref(null);
const gridItemDesc2 = ref(null);
const gridItemDescText2 = ref(null);
const gridItemButton2 = ref(null);

const gridUslugi3 = ref(null);
const buttonSpray3 = ref(null);
const gridItemUslugi3 = ref(null);
const gridItemTextDiv3 = ref(null);
const gridItemTitle3 = ref(null);
const gridItemTerm3 = ref(null);
const gridItemDesc3 = ref(null);
const gridItemDescText3 = ref(null);
const gridItemButton3 = ref(null);

const gridUslugi4 = ref(null);
const buttonSpray4 = ref(null);
const gridItemUslugi4 = ref(null);
const gridItemTextDiv4 = ref(null);
const gridItemTitle4 = ref(null);
const gridItemTerm4 = ref(null);
const gridItemDesc4 = ref(null);
const gridItemDescText4 = ref(null);
const gridItemButton4 = ref(null);

const gridUslugi5 = ref(null);
const buttonSpray5 = ref(null);
const gridItemUslugi5 = ref(null);
const gridItemTextDiv5 = ref(null);
const gridItemTitle5 = ref(null);
const gridItemTerm5 = ref(null);
const gridItemDesc5 = ref(null);
const gridItemDescText5 = ref(null);
const gridItemButton5 = ref(null);

const gridUslugi6 = ref(null);
const buttonSpray6 = ref(null);
const gridItemUslugi6 = ref(null);
const gridItemTextDiv6 = ref(null);
const gridItemTitle6 = ref(null);
const gridItemTerm6 = ref(null);
const gridItemDesc6 = ref(null);
const gridItemDescText6 = ref(null);
const gridItemButton6 = ref(null);

const uslugiBackground = ref(null);

let triangleTimeline = null;
let glowTimeline = null;
let particlesArray = [];
let mouseHandler = null;
let aboutTimeline = null;
let uslugiScrollTrigger = null;

const initParticles = () => {
  particlesArray = [];
  const particlesCount = 5;
  
  for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
  
    if (particlesContainer.value) {
      particlesContainer.value.appendChild(particle);
    }
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const size = Math.random() * 10 + 5;
    
    gsap.set(particle, {
      x: startX + '%',
      y: startY + '%',
      width: size,
      height: size,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '50%',
      position: 'absolute'
    });
    
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: Math.random() * 2
    });
    
    tl.to(particle, {
      x: startX + Math.random() * 20 - 10 + '%',
      y: startY + Math.random() * 20 - 10 + '%',
      duration: Math.random() * 3 + 2,
      ease: "sine.inOut"
    })
    .to(particle, {
      x: startX + Math.random() * 20 - 10 + '%',
      y: startY + Math.random() * 20 - 10 + '%',
      duration: Math.random() * 3 + 2,
      ease: "sine.inOut"
    })
    .to(particle, {
      opacity: 0,
      duration: 1,
      ease: "power1.in"
    }, "-=3");
    
    particlesArray.push({ particle, timeline: tl });
  }
};

const initAnimations = () => {
  gsap.set(triangleImage.value, {
    scale: 0.1,
    opacity: 0,
    rotation: -15,
    filter: 'drop-shadow(0 0 0px rgba(255, 0, 0, 0)) brightness(0.8) blur(10px)'
  });
  
  gsap.set(triangleGlow.value, {
    scale: 0.5,
    opacity: 0
  });
  

  gsap.set(mainRectangle.value, {
    autoAlpha: 0,
    y: 40,
    scale: 0.98,
    backdropFilter: "blur(0px)",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
  });
  
  const mainTimeline = gsap.timeline();
  
  mainTimeline.to(mainRectangle.value, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    backdropFilter: "blur(15px)",
    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.15)",
    duration: 0.8,
    ease: "power4.out",
    clearProps: "transform"
  });
  
  mainTimeline.to(mainTitle.value, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.7,
    ease: "power4.out",
    clearProps: "transform"
  }, "-=0.4");
  
  mainTimeline.to(mainDescription.value, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.7,
    ease: "power4.out",
    clearProps: "transform"
  }, "-=0.4");
  
  mainTimeline.call(() => {
    animateTriangle();
  });
  
  gsap.set([mainTitle.value, mainDescription.value], {
    autoAlpha: 0,
    y: 15,
    scale: 0.95
  });
  
  return mainTimeline;
};

const animateTriangle = () => {
  gsap.to(triangleImage.value, {
    scale: 1,
    opacity: 1,
    rotation: 0,
    filter: 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.3)) brightness(1) blur(0px)',
    duration: 1.2,
    ease: "elastic.out(1, 0.5)",
    onComplete: () => {
      startTriangleFloatingAnimation();
    }
  });
  
  gsap.to(triangleGlow.value, {
    scale: 1,
    opacity: 0.5,
    duration: 1.5,
    ease: "power2.out"
  });
  
  const handleMouseMove = (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 8;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 8;
    
    gsap.to(triangleEffect.value, {
      rotationY: xPos,
      rotationX: -yPos,
      duration: 2.5,
      ease: "power1.out"
    });
    
    gsap.to(triangleGlow.value, {
      x: xPos * 0.3,
      y: yPos * 0.3,
      duration: 2.5,
      ease: "power1.out"
    });
  };
  
  mainSection.value.addEventListener('mousemove', handleMouseMove);

  mouseHandler = handleMouseMove;
};

const startTriangleFloatingAnimation = () => {
  triangleTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  triangleTimeline.to(triangleImage.value, {
    y: -25,
    rotation: 3,
    scale: 1.03,
    filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.5)) brightness(1.15) hue-rotate(5deg)',
    duration: 8,
    ease: "sine.inOut"
  });
  
  triangleTimeline.to(triangleImage.value, {
    y: 0,
    rotation: -2,
    scale: 1,
    filter: 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.3)) brightness(1) hue-rotate(0deg)',
    duration: 8,
    ease: "sine.inOut"
  });
  
  glowTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  glowTimeline.to(triangleGlow.value, {
    opacity: 0.8,
    scale: 1.2,
    duration: 4,
    ease: "sine.inOut"
  });
  
  glowTimeline.to(triangleGlow.value, {
    opacity: 0.4,
    scale: 0.95,
    duration: 4,
    ease: "sine.inOut"
  });
  
  gsap.to(triangleEffect.value, {
    rotationY: 5,
    rotationX: 3,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
};

const animateAboutSection = () => {
  if (!aboutSection.value || aboutTimeline) return;
  
  aboutTimeline = gsap.timeline();
  
  gsap.set([aboutTitle.value, aboutSubtitle.value, aboutText.value, aboutButtons.value], {
    y: 50,
    opacity: 0
  });
  
  gsap.set(aboutLines.value, {
    opacity: 0,
    scale: 0.8
  });
  
  aboutTimeline
    .to(aboutTitle.value, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(aboutSubtitle.value, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to(aboutText.value, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to(aboutButtons.value, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to(aboutLines.value, {
      opacity: 0.15,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out'
    }, '-=0.8');
};

const animateUslugiSection = () => {
  if (!uslugiSection.value || !uslugiContainer.value) return;
  
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
  
  const titleAndDesc = [uslugiTitle.value, uslugiDescription.value].filter(Boolean);
  
  if (titleAndDesc.length > 0) {
    gsap.set(titleAndDesc, {
      y: isMobile ? 20 : 30,
      opacity: 0
    });
  }
  
  const gridItems = [
    gridItemUslugi1.value, gridItemUslugi2.value, gridItemUslugi3.value, 
    gridItemUslugi4.value, gridItemUslugi5.value, gridItemUslugi6.value
  ].filter(Boolean);
  
  const buttonSprays = [
    buttonSpray1.value, buttonSpray2.value, buttonSpray3.value,
    buttonSpray4.value, buttonSpray5.value, buttonSpray6.value
  ].filter(Boolean);
  
  const gridTitles = [
    gridItemTitle1.value, gridItemTitle2.value, gridItemTitle3.value,
    gridItemTitle4.value, gridItemTitle5.value, gridItemTitle6.value
  ].filter(Boolean);
  
  const gridTerms = [
    gridItemTerm1.value, gridItemTerm2.value, gridItemTerm3.value,
    gridItemTerm4.value, gridItemTerm5.value, gridItemTerm6.value
  ].filter(Boolean);
  
  const gridDescTexts = [
    gridItemDescText1.value, gridItemDescText2.value, gridItemDescText3.value,
    gridItemDescText4.value, gridItemDescText5.value, gridItemDescText6.value
  ].filter(Boolean);
  
  const gridButtons = [
    gridItemButton1.value, gridItemButton2.value, gridItemButton3.value,
    gridItemButton4.value, gridItemButton5.value, gridItemButton6.value
  ].filter(Boolean);
  
  gsap.set(uslugiContainer.value, {
    borderWidth: '0px',
    borderColor: 'transparent',
    opacity: 0.8,
    y: isMobile ? 15 : 20
  });
  
  if (gridItems.length > 0) {
    gsap.set(gridItems, {
      y: isMobile ? 20 : 30,
      opacity: 0
    });
  }
  
  if (buttonSprays.length > 0) {
    gsap.set(buttonSprays, {
      opacity: 0,
      scale: 0.9
    });
  }
  
  const textElements = [...gridTitles, ...gridTerms, ...gridDescTexts].filter(Boolean);
  if (textElements.length > 0) {
    gsap.set(textElements, {
      y: isMobile ? 10 : 15,
      opacity: 0
    });
  }
  
  if (gridButtons.length > 0) {
    gsap.set(gridButtons, {
      opacity: 0,
      x: isMobile ? 5 : 10
    });
  }
  
  if (uslugiMirror.value) {
    gsap.set(uslugiMirror.value, {
      opacity: 0,
      x: isMobile ? -10 : -20
    });
  }
  
  if (uslugiBackground.value) {
    gsap.set(uslugiBackground.value, {
      opacity: 0,
      scale: 1.05
    });
  }
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: uslugiSection.value,
      start: isMobile ? "top 85%" : "top 75%",
      end: isMobile ? "bottom 15%" : "bottom 25%",
      toggleActions: "play none none reverse",
      markers: false
    }
  });
  
  if (uslugiBackground.value) {
    tl.to(uslugiBackground.value, {
      opacity: 0.9,
      scale: 1,
      duration: isMobile ? 0.6 : 0.8,
      ease: 'power1.out'
    });
  }
  
  if (uslugiMirror.value) {
    tl.to(uslugiMirror.value, {
      opacity: 1,
      x: 0,
      duration: isMobile ? 0.4 : 0.5,
      ease: 'power2.out'
    }, '-=0.5');
  }
  
  tl.to(uslugiContainer.value, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out'
  }, '-=0.6');
  
  if (titleAndDesc.length > 0) {
    tl.to(titleAndDesc, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: isMobile ? 0.05 : 0.1,
      ease: 'power1.out'
    }, '-=0.2');
  }
  
  if (gridItems.length > 0) {
    tl.to(gridItems, {
      y: 0,
      opacity: 1,
      duration: isMobile ? 0.4 : 0.5,
      stagger: isMobile ? 0.08 : 0.1,
      ease: 'power1.out'
    }, '-=0.2');
  }
  
  if (textElements.length > 0) {
    tl.to(textElements, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: isMobile ? 0.03 : 0.05,
      ease: 'power1.out'
    }, '-=0.3');
  }
  
  if (gridButtons.length > 0) {
    tl.to(gridButtons, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      stagger: isMobile ? 0.03 : 0.05,
      ease: 'power1.out'
    }, '-=0.2');
  }
  
  if (buttonSprays.length > 0) {
    tl.to(buttonSprays, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger: isMobile ? 0.05 : 0.1,
      ease: 'power1.out'
    }, '-=0.3');
  }
  
  uslugiScrollTrigger = ScrollTrigger.getAll().find(
    trigger => trigger.vars.trigger === uslugiSection.value
  );
};

const handleScroll = () => {
  if (!aboutSection.value || aboutTimeline) return;
  
  const aboutSectionTop = aboutSection.value.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (aboutSectionTop < windowHeight * 0.8) {
    animateAboutSection();
    window.removeEventListener('scroll', handleScroll);
  }
  
  if (uslugiSection.value) {
    const uslugiSectionTop = uslugiSection.value.getBoundingClientRect().top;
    if (uslugiSectionTop < windowHeight * 0.8) {
      animateUslugiSection();
    }
  }
};

const handleResize = () => {
  clearAnimations();
  
  setTimeout(() => {
    initAnimations();
    handleScroll();
  }, 300);
};

const clearAnimations = () => {
  if (triangleTimeline) {
    triangleTimeline.kill();
    triangleTimeline = null;
  }
  
  if (glowTimeline) {
    glowTimeline.kill();
    glowTimeline = null;
  }
  
  if (particlesArray.length > 0) {
    particlesArray.forEach(particle => {
      if (particle.timeline) {
        particle.timeline.kill();
      }
    });
    particlesArray = [];
  }

  const aboutScrollTrigger = ScrollTrigger.getAll().find(
    trigger => trigger.vars.trigger === aboutSection.value
  );
  if (aboutScrollTrigger) {
    aboutScrollTrigger.kill();
  }
  
  if (uslugiScrollTrigger) {
    uslugiScrollTrigger.kill();
  }
  
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  gsap.killTweensOf("*");
  
  if (mainSection.value && mouseHandler) {
    mainSection.value.removeEventListener('mousemove', mouseHandler);
  }
};

onMounted(() => {
  initParticles();
  
  const arrowButtons = [
    gridItemButton1.value, gridItemButton2.value, gridItemButton3.value,
    gridItemButton4.value, gridItemButton5.value, gridItemButton6.value
  ];
  
  arrowButtons.forEach(button => {
    if (button && button.querySelector('img')) {
      const arrowImg = button.querySelector('img');
      arrowImg.src = '/arrow.png';
      
      button.addEventListener('mouseenter', () => {
        arrowImg.src = '/arrow-active.png';
      });
      
      button.addEventListener('mouseleave', () => {
        arrowImg.src = '/arrow.png';
      });
    }
  });
  
  setTimeout(() => {
    initAnimations();
  }, 500);
  
  window.addEventListener('scroll', handleScroll);
  
  window.addEventListener('resize', handleResize);
  
  handleScroll();
});

onBeforeUnmount(() => {
  clearAnimations();
  
  const arrowButtons = [
    gridItemButton1.value, gridItemButton2.value, gridItemButton3.value,
    gridItemButton4.value, gridItemButton5.value, gridItemButton6.value
  ];
  
  arrowButtons.forEach(button => {
    if (button && button.querySelector('img')) {
      const arrowImg = button.querySelector('img');
      
      button.removeEventListener('mouseenter', () => {
        arrowImg.src = '/arrow-active.png';
      });
      
      button.removeEventListener('mouseleave', () => {
        arrowImg.src = '/arrow.png';
      });
    }
  });
  
  window.removeEventListener('scroll', handleScroll);
  
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.page-container {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.main-section {
    position: relative;
    height: 120vh;
    min-height: 900px;
    width: 100%;
    padding-top: 120px;
    overflow: hidden;
    margin-bottom: -150px;
    z-index: 1;
}

.main-container {
    text-align: center;
    position: relative;
    color: var(--text-color);
    z-index: 2;
    width: 100%;
    perspective: 1200px;
}

.main-rectangle {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 2%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
    padding: 51px 40px;
    position: relative;
    padding-bottom: 1100px;
    border-radius: 2px;
    transform-style: preserve-3d;
    transition: box-shadow 0.5s ease, backdrop-filter 0.5s ease;
    overflow: hidden;
}

.main-rectangle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    opacity: 0.7;
}

.main-rectangle::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    opacity: 0.5;
}

.main-rectangle h1 {
    font-weight: 700;
    font-size: 70px;
    margin-bottom: 24px;
    line-height: 1;
    color: var(--text-hover-color);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.main-rectangle p {
    font-weight: 400;
    font-size: 24px;
    color: var(--text-color);
    line-height: 1.4;
    max-width: 90%;
    margin: 0 auto;
    transition: color 0.3s ease;
}

.triangle-effect {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 120%;
    width: 80%;
    top: 30%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    perspective: 1000px;
    transform-style: preserve-3d;
}

.triangle-effect img {
    width: 100%;
    height: auto;
    object-fit: contain;
    transform-style: preserve-3d;
    filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.3));
    transition: filter 1s ease;
    will-change: transform, filter;
    position: relative;
    z-index: 2;
}

.triangle-glow {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
    will-change: transform, opacity, scale;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
}

.particle {
    position: absolute;
    background-color: rgba(255, 0, 0, 0.5);
    border-radius: 50%;
    pointer-events: none;
    will-change: transform, opacity;
}

.particle:nth-child(3n) {
    background-color: rgba(255, 100, 0, 0.5);
}

.particle:nth-child(5n) {
    background-color: rgba(255, 50, 50, 0.5);
}

.particle:nth-child(7n) {
    background-color: rgba(255, 150, 0, 0.5);
}

.main-punkitir-img {
    position: absolute;
    top: 206px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: auto;
    z-index: 1;
    content: var(--background-puncitr);
}

.about-section {
    position: relative;
    min-height: 100vh;
    align-items: center;
    display: flex;
    margin-left: 250px;
    padding-top: 150px;
    line-height: 1;
    background: linear-gradient(to bottom, transparent, var(--background-color) 150px);
    overflow: hidden; 
    border-bottom: 3px dashed var(--text-hover-color);
    z-index: 2;
}

.about-container {
    color: var(--text-color);
    position: relative;
    z-index: 3;
}

.about-container h2 {
    font-weight: 700;
    font-size: 96px;
    color: var(--text-hover-color);
}

.about-container h3 {
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 40px;
    color: var(--text-hover-color);
}

.about-container p {
    font-weight: 400;
    font-size: 32px;
    color: var(--text-color);
}

.about-btn {
    display: flex;
    gap: 20px;
    margin-top: 70px;
}

.about-lines {
    position: absolute;
    top: 0;
    left: 240px;
    width: 100%;
    height: 100%;
    background-image: var(--background-lines);
    background-repeat: repeat;
    opacity: 1; 
    z-index: 0;
    pointer-events: none;
}

.uslugi {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 42px;
    margin: 0 auto;
    position: relative;
    margin-top: 200px;
    line-height: 1;
}
.uslugi-container {
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
}
.uslugi-text {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding-bottom: 100px;
}
.uslugi-text h2 {
    font-weight: 700;
    font-size: 128px;
    color: var(--text-hover-color);
}
.uslugi-text p {
    font-weight: 400;
    font-size: 30px;
    color: var(--text-color);
}
.uslugi-grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin: 0 auto;
    z-index: 2;
    padding: 20px;
}
.grid-uslugi {
    display: flex;
    flex-direction: row;
    gap: 20px;
    max-width: 560px;
    border-radius: 4px;
    padding: 30px;
    position: relative;
    z-index: 2;
    background-color: var(--background-color);
    overflow: visible;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.grid-uslugi:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
}
.grid-item-uslugi {
    gap: 33px;
    display: flex;
    flex-direction: column;
}
.grid-item-uslgi-text-div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: 5;
}
.grid-item-uslgi-text-div h3 {
    font-weight: 700;
    font-size: 32px;
    color: var(--text-hover-color);
}
.grid-item-uslgi-text-div p {
    font-weight: 400;
    font-size: 16px;
    color: var(--text-color);
}
.grid-item-uslgi-description {
    display: flex;
    flex-direction: row;
    z-index: 5;
}
.grid-item-uslgi-description p {
    font-weight: 400;
    font-size: 20px;
    color: var(--text-color);
}
.grid-item-uslgi-arrow-button {
    cursor: pointer;
    position: absolute;
    top: 1px;
    right: 1px;
    z-index: 5;
    transition: all 0.3s ease;
    background: transparent;
    border: none;
    padding: 0;
    overflow: visible;
    outline: none;
}
.grid-item-uslgi-arrow-button:hover {
    transform: scale(1.1);
}
.grid-item-uslgi-arrow {
    max-width: 130px;
    max-height: 130px;
    object-fit: cover;
    position: absolute;
    top: 1px;
    right: 1px;
    transition: all 0.3s ease;
    filter: blur(2px);
}
.grid-item-uslgi-arrow:hover {
    filter: blur(0px);
}
.uslugi-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.05);
    transition: transform 0.5s ease-out;
}
.mirror {
    position: absolute;
    width: 820px;
    height: calc(1282px + 200px);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.098) 2%, rgba(255, 255, 255, 0.144) 100%);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button-spray {
    position: absolute;
    top: -10px;
    right: 10px;
    width: 560px;
    height: 231px;
    background: transparent;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0px 4px 4px rgba(254, 254, 254, 0.25);
    border: 1px solid var(--text-hover-color);
}

@media (max-width: 1200px) {
    .uslugi-text h2 {
        font-size: 96px;
    }
    
    .uslugi-text p {
        font-size: 24px;
        max-width: 80%;
        text-align: center;
    }
    
    .uslugi-grid-container {
        gap: 30px;
        padding: 10px;
    }
    
    .grid-uslugi {
        max-width: 100%;
        padding: 25px;
    }
    
    .button-spray {
        width: 500px;
    }
    
    .mirror {
        width: 760px;
    }
}

@media (max-width: 1024px) {
    .uslugi {
        margin-top: 150px;
    }
    
    .uslugi-text h2 {
        font-size: 72px;
    }
    
    .uslugi-text p {
        font-size: 22px;
    }
    
    .uslugi-grid-container {
        grid-template-columns: 1fr;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .grid-uslugi {
        max-width: 100%;
    }
    
    .button-spray {
        width: 100%;
        max-width: 500px;
    }
    
    .mirror {
        width: 100%;
        max-width: 600px;
        height: auto;
        min-height: 1500px;
    }
}

@media (max-width: 768px) {
    .uslugi {
        margin-top: 100px;
        gap: 30px;
    }
    
    .uslugi-text {
        padding-bottom: 60px;
    }
    
    .uslugi-text h2 {
        font-size: 54px;
    }
    
    .uslugi-text p {
        font-size: 18px;
        max-width: 90%;
    }
    
    .grid-item-uslgi-text-div h3 {
        font-size: 24px;
    }
    
    .grid-item-uslgi-description p {
        font-size: 16px;
    }
    
    .grid-uslugi {
        padding: 20px;
    }
    
    .button-spray {
        height: 180px;
    }
    
    .grid-item-uslgi-arrow {
        max-width: 100px;
        max-height: 100px;
        right: 15px;
    }
}

@media (max-width: 480px) {
    .uslugi {
        margin-top: 80px;
    }
    
    .uslugi-text h2 {
        font-size: 42px;
    }
    
    .uslugi-text p {
        font-size: 16px;
        max-width: 95%;
    }
    
    .uslugi-grid-container {
        padding: 5px;
        gap: 20px;
    }
    
    .grid-uslugi {
        padding: 15px;
    }
    
    .grid-item-uslugi {
        gap: 20px;
    }
    
    .grid-item-uslgi-text-div h3 {
        font-size: 20px;
    }
    
    .grid-item-uslgi-text-div p {
        font-size: 14px;
    }
    
    .grid-item-uslgi-description p {
        font-size: 14px;
    }
    
    .button-spray {
        height: 150px;
        top: -5px;
        right: 5px;
    }
    
    .grid-item-uslgi-arrow {
        max-width: 80px;
        max-height: 80px;
        right: 10px;
    }
}

@media (max-width: 1024px) {
    .main-section {
        padding-top: 100px;
        height: 110vh;
        min-height: 850px;
        margin-bottom: -120px;
    }
    
    .main-rectangle {
        max-width: 90%;
        padding: 40px 30px;
        padding-bottom: 900px;
    }
    
    .main-rectangle h1 {
        font-size: 60px;
        margin-bottom: 20px;
    }
    
    .main-rectangle p {
        font-size: 22px;
        max-width: 95%;
    }
    
    .triangle-effect {
        width: 90%;
        top: 35%;
        bottom: auto;
    }
    
    .triangle-glow {
        width: 500px;
        height: 500px;
    }
    
    .main-punkitir-img {
        top: 180px;
    }
    
    .about-section {
        margin-top: 0;
        margin-left: 150px;
        padding-top: 120px;
    }
    
    .about-container h2 {
        font-size: 80px;
    }
    
    .about-container h3 {
        font-size: 28px;
        margin-bottom: 20px;
    }
    
    .about-container p {
        font-size: 28px;
    }
    
    .about-btn {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .about-lines {
        top: 0;
    }
}

@media (max-width: 768px) {
    .main-section {
        padding-top: 90px;
        height: auto;
        min-height: 110vh;
        margin-bottom: -80px;
    }
    
    .main-rectangle {
        max-width: 95%;
        padding: 35px 25px;
        padding-bottom: 600px;
    }
    
    .main-rectangle h1 {
        font-size: 48px;
        margin-bottom: 16px;
    }
    
    .main-rectangle p {
        font-size: 18px;
        max-width: 100%;
        line-height: 1.3;
    }
    
    .triangle-effect {
        width: 100%;
        top: 50%;
        bottom: auto;
        transform: translateX(-50%) translateY(-25%);
    }
    
    .triangle-glow {
        width: 400px;
        height: 400px;
    }
    
    .main-punkitir-img {
        top: 160px;
    }
    
    .about-section {
        margin-top: 0;
        margin-left: 0;
        padding: 80px 20px 0;
        height: auto;
    }
    
    .about-container {
        text-align: center;
    }
    
    .about-container h2 {
        font-size: 60px;
    }
    
    .about-container h3 {
        font-size: 24px;
        margin-bottom: 30px;
    }
    
    .about-container p {
        font-size: 22px;
    }
    
    .about-btn {
        justify-content: center;
        margin-top: 50px;
    }
    
    .about-lines {
        top: 0;
    }
}

@media (max-width: 425px) {
    .main-section {
        padding-top: 80px;
        min-height: 100vh;
        margin-bottom: -60px;
    }
    
    .main-rectangle {
        padding: 30px 20px;
        padding-bottom: 350px;
    }
    
    .main-rectangle h1 {
        font-size: 36px;
        margin-bottom: 14px;
    }
    
    .main-rectangle p {
        font-size: 16px;
        line-height: 1.2;
    }
    
    .triangle-effect {
        width: 100%;
        top: 85%;
        bottom: auto;
        transform: translateX(-50%) translateY(-80%);
    }
    
    .triangle-glow {
        width: 280px;
        height: 280px;
    }
    
    .main-punkitir-img {
        top: 140px;
    }
    
    .particle {
        transform: scale(0.8);
    }
    
    .about-section {
        margin-top: -250px;
        padding-top: 60px;
    }
    
    .about-container h2 {
        font-size: 42px;
    }
    
    .about-container h3 {
        font-size: 20px;
        margin-bottom: 20px;
    }
    
    .about-container p {
        font-size: 18px;
    }
    
    .about-btn {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .about-lines {
        top: 0;
    }
}

@media (max-width: 375px) {
    .main-section {
        padding-top: 70px;
        min-height: 100vh;
        margin-bottom: -50px;
    }
    
    .main-rectangle {
        padding: 25px 15px;
        padding-bottom: 300px;
    }
    
    .main-rectangle h1 {
        font-size: 32px;
        margin-bottom: 12px;
    }
    
    .main-rectangle p {
        font-size: 15px;
    }
    
    .triangle-effect {
        width: 100%;
        top: 80%;
        bottom: auto;
        transform: translateX(-50%) translateY(-80%);
    }
    
    .triangle-glow {
        width: 240px;
        height: 240px;
    }
    
    .main-punkitir-img {
        top: 130px;
    }
    
    .about-section {
        margin-top: -270px;
        padding-top: 50px;
    }
    
    .about-container h2 {
        font-size: 36px;
    }
    
    .about-container h3 {
        font-size: 18px;
    }
    
    .about-container p {
        font-size: 16px;
    }
    
    .about-lines {
        top: 0;
    }
}

@media (max-width: 320px) {
    .main-section {
        padding-top: 60px;
        min-height: 100vh;
        margin-bottom: -40px;
    }
    
    .main-rectangle {
        padding: 20px 12px;
        padding-bottom: 280px;
    }
    
    .main-rectangle h1 {
        font-size: 28px;
        margin-bottom: 10px;
    }
    
    .main-rectangle p {
        font-size: 14px;
    }
    
    .triangle-effect {
        width: 100%;
        top: 80%;
        bottom: auto;
        transform: translateX(-50%) translateY(-80%);
    }
    
    .triangle-glow {
        width: 200px;
        height: 200px;
    }
    
    .main-punkitir-img {
        top: 120px;
    }
    
    .about-section {
        margin-top: -290px;
        padding-top: 40px;
    }
    
    .about-container h2 {
        font-size: 32px;
    }
    
    .about-container h3 {
        font-size: 16px;
    }
    
    .about-container p {
        font-size: 14px;
    }
    
    .about-lines {
        top: 0;
    }
}
</style>
