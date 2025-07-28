<template>
  <section class="text-image-section" :class="{ reverse }">
    <div class="text-content">
      <h2 v-html="title"></h2>
      <p class="subtitle" v-if="subtitle" v-html="subtitle"></p>
      <p v-if="description" class="description" v-html="description"></p>
      <a v-if="buttonText && buttonLink" :href="buttonLink" class="btn-primary">{{ buttonText }}</a>
    </div>
    <div class="image-content">
      <img :src="imageSrc" :alt="imageAlt" loading="lazy" />
    </div>
  </section>
</template>
  
<script setup>
  defineProps({
    title: String,
    subtitle: String,
    description: String,
    buttonText: String,
    buttonLink: String,
    imageSrc: String,
    imageAlt: String,
    reverse: Boolean,
  })
</script>

<style scoped>
  .text-image-section {
    display: flex;
    justify-content: center;       
    align-items: center;
    gap: 80px;                       
    padding: 68px 20px 30px;
    background: white;
    width: 100%;
    box-sizing: border-box;
    flex-direction: row;
  }
  .text-image-section.reverse {
    flex-direction: row-reverse;
  }
  .text-content {
    max-width: 30vw;

  }
  .text-content h2 {
    color: hsl(203, 94%, 35%);
    font-size: 3rem;
    margin-bottom: 10px;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
  }
  .text-content .subtitle {
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    color: #0C4874;
    margin-bottom: 10px;
  }
  .text-content .description {
    font-size: 0.975rem;
    font-family: 'Montserrat', sans-serif;
    color: #0C4874;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  .btn-primary {
    display: inline-block;
    background: #EE9137;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
  }
  .image-content {
    max-width: 50vw;
    padding-right: 0;
  }
  .image-content img {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 1110px) {
    .text-image-section {
      flex-direction: column;
      padding: 50px 20px 20px;
      text-align: center;
      gap: 30px;  
    }
    .text-image-section.reverse {
    flex-direction: column;      
    }
    .text-content {
      text-align: center;
      max-width: 100%;
      margin: auto;
      padding-left: 0;
      order: 2;
    }
    .image-content {
      width: 100%;
      max-width: 100%;
      margin-left: 0;
      margin-top: 30px;
      order: 1;
    }
    .image-content img {
      width: 100%;
    }
  }
</style>
  