<template>
  <section id="EJA">
    <TextImageSection
      title="CRÔNICA"
      subtitle="EJA"
      description="        
        A crônica é um texto curto e reflexivo que transforma situações do cotidiano em histórias com emoção, crítica ou humor. No contexto do concurso, ela deve estar conectada ao tema proposto, trazendo um ponto de vista pessoal, criativo e original. É uma forma de explorar o assunto com leveza, sensibilidade e proximidade com o leitor.
        <br><br>
        Como produzir uma crônica com tema específico?
        <br><br>
        
        <strong>1º Reflita sobre o tema:</strong><br>
        Antes de escrever, pense em como o tema do concurso aparece na sua vida ou à sua volta. Pode ser uma experiência, uma cena comum, uma lembrança ou um sentimento.<br><br>

        <strong>2º Dê um recorte pessoal:</strong><br>
        O importante é a forma como você enxerga o assunto. Traga uma visão própria, com sensibilidade e, se quiser, um toque de humor ou crítica.<br><br>

        <strong>3º Conecte o cotidiano ao tema:</strong><br>
        Mesmo ao falar de algo simples, mostre como isso se relaciona com o tema central do concurso.<br><br>
        
        <strong>4º Escreva de forma leve e envolvente:</strong><br>
        A linguagem da crônica é mais solta, próxima da fala. Estruture com começo, meio e fim, e procure surpreender no desfecho. Certifique-se de que seu texto tem de 1.750 a 2.700 caracteres com espaços (25 a 30 linhas).        
        "

      imageSrc="imgsOK/EJA-grande.svg"
      imageAlt="EJA"
      buttonText="Inscreva-se"
      buttonLink="#"
      :reverse="false"
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

  
  