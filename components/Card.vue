<template>
  <div class="card relative overflow-hidden" :style="{ backgroundColor: bgColor }">
    <div class="card__background-elements absolute top-0 left-0 w-full h-full">
      <div class="bg-shape top-0 right-0 w-32 h-32 bg-[#EE9137] rounded-bl-full opacity-30 sm:w-48 sm:h-48"></div>
      <div class="bg-shape bottom-0 left-0 w-24 h-24 bg-[#056DAC] rounded-tr-full opacity-30 sm:w-32 sm:h-32"></div>
      <div class="bg-shape top-1/4 left-1/4 w-16 h-16 bg-[#7ED321] rounded-full opacity-30"></div>
      <div class="bg-shape bottom-1/4 right-1/4 w-20 h-20 bg-[#0C4874] opacity-30 transform rotate-45"></div>
    </div>

    <div :class="['card__content-wrapper', { 'card__content-wrapper--reversed': reverse }]">
      <div class="card__content">
        <h2 class="card__title" :style="{ color: titleColor }">{{ title }}</h2>
        <p class="card__description" :style="{ color: descriptionColor }" v-html="description"></p>
        <a v-if="linkText && linkHref" :href="linkHref" class="card__link" :style="{ color: linkColor }">
          {{ linkText }} <span class="card__arrow" :style="{ color: arrowColor }">→</span>
        </a>
      </div>

      <div class="card__image-wrapper" :style="{ marginRight: imageRightMargin }">
        <img :src="imageSrc" :alt="imageAlt" class="card__image" loading="lazy" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { defineProps, withDefaults } from 'vue';
  
  const props = withDefaults(defineProps<{
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    bgColor: string;
    linkText?: string;
    linkHref?: string;
    reverse?: boolean;
    titleColor?: string;
    descriptionColor?: string;
    linkColor?: string;
    arrowColor?: string;
    imageRightMargin?: string;
  }>(), {
    linkText: '',
    linkHref: '#',
    reverse: false,
    titleColor: '#f9f9f9',
    descriptionColor: '#f9f9f9',
    linkColor: '#ffffff',
    arrowColor: '#ffffff',
    imageRightMargin: '-7rem',
  });
</script>
  
<style scoped>
  .card {
    color: #f9f9f9;
    padding: 0px 20px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    margin: 40px auto;
    max-width: 1150px;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1rem;
    transition: all 0.3s ease;
    overflow: visible;
    min-height: 220px;
  }
  .card__background-elements {
    
    pointer-events: none;
  }
  .card__content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 0;
  }
  .card__content-wrapper--reversed {
    flex-direction: row-reverse;
  }
  .card__content {
    flex: 1;
    text-align: left;
    padding-left: 50px;
  }
  .card__content-wrapper--reversed .card__content {
    text-align: center;
  }
  .card__title {
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .card__description {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  } 
  .card__link {
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  .card__link:hover {
    opacity: 0.8;
  }
  .card__arrow {
    font-size: 1.25rem;
    line-height: 1;
  }
  .card__image-wrapper {
    flex-shrink: 0;
    width: 450px;
    height: auto;
    max-height: 400px;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    
  } 
  .card__image {
    width: 100%;
    max-height: 400px;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 10px;
  }
  
  @media (max-width: 700px) {
    .card {
      width: 70vw;
      padding: 20px 10px;
      font-size: 0.8rem;
      min-height: auto;
      overflow-y: visible;
    }
    .card__content-wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 30px; 
      padding: 0;
    }
    .card__content {
      text-align: center;
      padding-right: 50px;
      padding-left: 50px;
    }
    .card__title {
      font-size: 1.5rem;
    }
    .card__description {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    .card__link {
      font-size: 0.9rem;
    }
    .card__image-wrapper {
      width: 220px;
      max-height: 250px;
      margin-right: 0 !important;
    }
    .card__background-elements {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
  