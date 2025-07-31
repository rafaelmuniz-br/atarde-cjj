<template>
  <TextImageSection
    title="UM CONCURSO"
    subtitle="Muitas Missões"
    description="O Concurso Cultural Jovem Jornalista tem como principal objetivo incentivar a formação de jovens leitores por meio da produção de conteúdos jornalísticos autorais, estimulando a criatividade, o pensamento crítico e a expressão escrita e audiovisual.<br><br>As inscrições estarão abertas de 4 de agosto a 10 de outubro de 2025.<br><br>Poderão participar estudantes do Ensino Fundamental (anos iniciais e finais), Ensino Médio e Educação de Jovens e Adultos (EJA), regularmente matriculados em escolas municipais parceiras do Programa A TARDE Educação ou em escolas da rede estadual da Bahia, conforme a categoria."
    imageSrc="imgsOK/missoes.svg"
    imageAlt="Missões"
    buttonText="Inscreva-se"
    buttonLink="#"
    :reverse="true"
  />
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
