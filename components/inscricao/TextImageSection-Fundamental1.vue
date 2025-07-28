<template>
  <section id="fundamental1">
    <TextImageSection
      title="TIRINHAS"
      subtitle="Ensino Fundamental I"
      description="        
        A tirinha é um tipo de história contada em poucos quadrinhos. Ela usa desenho e fala (ou pensamento) dos personagens para mostrar algo engraçado, curioso ou que faz a gente pensar. Pode falar do dia a dia, de situações da escola ou até de temas importantes. O mais legal é que você pode usar a imaginação e criar do seu jeito.<br><br>
        Como fazer uma tirinha?

        <br><br>
        <strong>1º Pense na ideia:</strong><br>
        Escolha um tema e imagine o que vai acontecer na sua tirinha. Depois, escreva um pequeno roteiro com começo, meio e fim.<br><br>

        <strong>2º Organize os quadrinhos:</strong><br>
        Divida sua história em partes (de 3 a 6 quadrinhos) e pense onde cada fala ou desenho vai ficar. Pode fazer um esboço (rascunho) antes de passar a limpo.<br><br>

        <strong>3º Faça o desenho:</strong><br>
        O desenho deve ser manual. Não precisa desenhar perfeito! O mais importante é que as pessoas entendam a ideia."
      imageSrc="/imgsOK/fundamental1-grande.svg"
      imageAlt="Fundamental1"
      buttonText="Inscreva-se"
      buttonLink="#"
      :reverse="true"
    />
  </section>
</template>
  
<script setup>
  import TextImageSection from '@/components/TextImageSection.vue'
</script>

<style scoped>
  ::v-deep(.text-content h2) {
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  color: #0C4874;
  }

  ::v-deep(.text-content .subtitle) {
  color: hsl(203, 94%, 35%);
  font-size: 3rem;
  margin-bottom: 0px;
  font-family: 'Codec Warm Trial', sans-serif;
  font-weight: 700;
  margin-top: 20px;
  }
</style>

  
  