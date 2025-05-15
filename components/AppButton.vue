<template>
  <button 
    :class="[`btn${type}`, className]" 
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: [Number, String],
      default: 1,
      validator: (value) => [1, 2, '1', '2'].includes(value)
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.btn1 {
    background: var(--text-hover-color);
    color: var(--btn1-color-text);
    border: 3px solid black;
    cursor: pointer;
    font-weight: 700;
    font-size: 32px;
    padding: 19px 42px;
    max-width: 480px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn1:hover {
    border: 3px solid var(--text-hover-color);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn1::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
}

.btn1:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}

.btn2 {
    background: var(--btn2-background);
    border: dashed 3px var(--btn2-color-text);
    color: var(--btn2-color-text);
    cursor: pointer;
    font-weight: 700;
    font-size: 32px;
    padding: 19px 42px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn2:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
}

.btn2:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}

.btn2::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: solid 3px var(--btn2-color-text);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.btn2:hover::after {
    opacity: 1;
}

@media (max-width: 950px) {
    .btn1, .btn2 {
        font-size: 24px;
    }
}

@media (max-width: 700px) {
    .btn1, .btn2 {
        font-size: 18px;
        padding: 12px 32px;
    }
}
</style>
