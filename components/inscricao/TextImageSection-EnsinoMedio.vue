<template>
  <section id="ensinomedio">
    <TextImageSection
      title="ARTIGO DE OPINIÃO"
      subtitle="Ensino Médio"
      description="        
        O artigo de opinião é uma poderosa ferramenta para expressar e defender um ponto de vista sobre temas relevantes. Escrever um bom artigo exige clareza de pensamento, argumentação sólida e a capacidade de engajar o leitor. Neste guia, você aprenderá como planejar seu texto, organizar suas ideias e revisá-las de forma a apresentar um argumento convincente, sempre mantendo a coesão e a coerência do início ao fim.
        <br><br>
        Como produzir um artigo de opinião?
        <br><br>
        
        <strong>1º Planeje suas ideias:</strong><br>
        Comece organizando suas ideias, definindo o tema, a tese e como vai argumentar. Esse é o momento de colocar tudo em ordem.<br><br>

        <strong>2º Mande ver no rascunho:</strong><br>
        Agora é hora de transformar suas ideias em texto. Escreva a introdução, o desenvolvimento e a conclusão, mantendo o foco no que você planejou.<br><br>

        <strong>3º Dê aquele ajuste final:</strong><br>
        Com o texto quase pronto, revise tudo, corrigindo a gramática, a ortografia e a pontuação. Certifique-se de que seu texto tem de 1.750 a 2.700 caracteres com espaços (25 a 30 linhas)."

      imageSrc="/imgsOK/ensinomedio-grande.svg"
      imageAlt="EnsinoMedio"
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
