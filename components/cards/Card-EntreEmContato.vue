<template>
    <Card
      bgColor="#056DAC"
      title="Entre em contato conosco"
      description="📧 jovemjornalista@grupoatarde.com.br<p>📸 @atardeeducacao"
      linkText=""
      linkHref="#"
      imageSrc="imgsOK/mosaico-card1.svg"
      imageAlt="Imagem Saiba Mais"
      :reverse="true"
      titleColor="#f9f9f9"
      descriptionColor="#f9f9f9"
      linkColor="#ffffff"
      arrowColor="#ffffff"
      imageRightMargin="0rem"
    />
</template>
  
<script setup>
  import Card from '~/components/Card.vue'; 
</script>

<style scoped>
  ::v-deep(.card__content-wrapper--reversed .card__content) {
      text-align: left;}
</style>