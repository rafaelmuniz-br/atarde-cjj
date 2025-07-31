<template>
    <Card
      bgColor="#82B834"
      title="Atenção!"
      description="Se o vídeo incluir a participação de terceiros, será necessário o uso do modelo do termo de autorização de imagens."
      linkText="Baixe aqui"
      linkHref="#"
      imageSrc="imgsOK/mosaico-card2.svg"
      imageAlt="Imagem Saiba Mais"
      :reverse="false"
      titleColor="#f9f9f9"
      descriptionColor="#f9f9f9"
      linkColor="#ffffff"
      arrowColor="#ffffff"
      imageRightMargin="-7rem"
    />
</template>
  
<script setup>
  import Card from '~/components/Card.vue';
</script>