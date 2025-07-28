<template>
  <section class="premiacao-section">
    <h2 class="section-title">Premiação</h2>

    <PremiacaoCard
      title="1º lugar"
      description="Aluno(a): Notebook + Placa em acrílico<br>Professor(a): Hospedagem em hotel + Placa em acrílico"
      image-src="/imgsOK/premiacao1.svg"
      image-alt="1º lugar"
      :reverse="true"
    />

    <PremiacaoCard
      title="2º lugar"
      description="Aluno(a): Tablet + Medalha<br>Professor(a): Notebook + Medalha"
      image-src="/imgsOK/premiacao2.svg"
      image-alt="2º lugar"
      
    />

    <PremiacaoCard
      title="3º lugar"
      description="Aluno(a): Smartphone<br>Professor(a): Tablet + Medalha"
      image-src="/imgsOK/premiacao3.svg"
      image-alt="3º lugar"
      :reverse="true"
    />
  </section>
</template>

<script setup>
  import PremiacaoCard from './PremiacaoCard.vue'
</script>

<style scoped>
  .premiacao-section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 0px;
  }

  .section-title {
    font-family: 'Codec Warm Trial', sans-serif;
    font-size: 2.5rem;
    color: #0c4874;
    text-align: center;
    margin-bottom: 40px;
  }
</style>
