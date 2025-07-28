<template>
  <section class="categorias-wrapper">
    <div class="texto-lateral">
      <h2>Categorias</h2>
      <p>
        O Concurso Cultural Jovem Jornalista tem como principal objetivo incentivar a formação de jovens leitores por meio da produção de conteúdos jornalísticos autorais, estimulando a criatividade, o pensamento crítico e a expressão escrita e audiovisual.
      </p>
    </div>

    <div class="carousel">
      <div class="card" v-for="(item, index) in categories" :key="index">
        <img
          class="card-img"
          :src="item.img"
          :alt="`Imagem da categoria ${item.title}`"
        />
        <h3>{{ item.title }}</h3>
        <span class="card-subtitle">{{ item.subtitle }}</span>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
  
<script setup>
  const categories = [
    {
      img: '/imgsOK/fundamental1-pequeno.svg',
      title: 'Ensino Fundamental I',
      subtitle: 'TIRINHAS',
      description:
        'São pequenas histórias em quadrinhos, geralmente com poucos quadros, que combinam imagem e texto para transmitir uma ideia, crítica ou humor. Elas abordam temas variados de forma leve, rápida e criativa.',
    },
    {
      img: '/imgsOK/fundamental2-pequeno.svg',
      title: 'VIDEORREPORTAGEM',
      subtitle: 'Ensino Fundamental II',
      description:
        'É uma produção audiovisual gravada e editada por uma pessoa, combinando imagens, sons e entrevistas. Ela relata uma história ou evento de forma dinâmica e visual, abordando temas atuais de maneira criativa.',
    },
    {
      img: '/imgsOK/ensinomedio-pequeno.svg',
      title: 'ARTIGO DE OPINIÃO',
      subtitle: 'Ensino Médio',
      description:
        'É um texto em que o autor expõe suas ideias e argumentos sobre um tema específico. Ele tem como objetivo convencer o leitor de um ponto de vista, utilizando argumentos lógicos e bem estruturados.',
    },
    {
      img: '/imgsOK/EJA-pequeno.svg',
      title: 'CRÔNICA',
      subtitle: 'Educação de Jovens e Adultos',
      description:
        'É um texto curto que narra acontecimentos do cotidiano de forma leve e subjetiva. Geralmente, ela mistura humor, reflexão e observações pessoais, abordando temas simples, mas com uma visão única do autor.',
    },
  ]
</script>
  
<style scoped>
  .categorias-wrapper {
    display: flex;
    gap: 40px;
    padding: 60px 20px;
    background: #f9f9f9;
    font-family: 'Montserrat', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .texto-lateral {
    flex: 1 1 300px;
    max-width: 400px;
  }
  
  .texto-lateral h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #0C4874;
    font-family: 'Codec Warm Trial', sans-serif;
    margin-bottom: 10px;
  }
  
  .texto-lateral p {
    font-size: 1.3rem;
    color: #0C4874;
    line-height: 1.5;
  }
  
  .carousel {
    flex: 2 1 600px;
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    scroll-padding-right: 20px;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 10px;
  }
  
  .card {
    flex: 0 0 260px;
    background: #EEEEEE;
    border-radius: 12px;
    padding: 30px 40px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
  }
  
  .card-img {
    width: 400px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .card h3 {
    font-size: 14px;
    color: #333333;
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
  }
  
  .card-subtitle {
    font-family: 'Codec Warm Trial', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0C4874;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  .description {
    font-size: 14px;
    color: #4A4A4A;
    line-height: 1.4;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    flex-grow: 1;
  }
  
  @media (max-width: 768px) {
    .texto-lateral {
      max-width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .texto-lateral h2 {
      text-align: center;
    }
  }
</style>
  