<template>
  <section class="categories">
    <div class="categories-header">
      <h2>O Concurso</h2>
      <p class="subtitle">Conheça as categorias:</p>
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
        <p class="description" v-html="item.description"></p>
        <a :href="item.link" class="card-cta">
          Saiba mais <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
  const categories = [
    {
      img: 'imgsOK/fundamental1-pequeno.svg',
      title: 'TIRINHAS',
      subtitle: 'Ensino Fundamental I',
      description:
        'São pequenas histórias em quadrinhos, geralmente com poucos quadros, que combinam imagem e texto para transmitir uma ideia, crítica ou humor.<br><br>Elas abordam temas variados de forma leve, rápida e criativa.',
      link: '/inscricao#fundamental1',
    },
    {
      img: 'imgsOK/fundamental2-pequeno.svg',
      title: 'VIDEORREPORTAGEM',
      subtitle: 'Ensino Fundamental II',
      description:
        'É uma produção audiovisual gravada e editada por uma pessoa, combinando imagens, sons e entrevistas.<br><br>Ela relata uma história ou evento de forma dinâmica e visual, abordando temas atuais de maneira criativa.',
      link: '/inscricao#fundamental2',
    },
    {
      img: 'imgsOK/ensinomedio-pequeno.svg',
      title: 'ARTIGO DE OPINIÃO',
      subtitle: 'Ensino Médio',
      description:
        'É um texto em que o autor expõe suas ideias e argumentos sobre um tema específico.<br><br>Ele tem como objetivo convencer o leitor de um ponto de vista, utilizando argumentos lógicos e bem estruturados.',
      link: '/inscricao#ensinomedio',
    },
    {
      img: 'imgsOK/EJA-pequeno.svg',
      title: 'CRÔNICA',
      subtitle: 'Educação de Jovens e Adultos',
      description:
        'É um texto curto que narra acontecimentos do cotidiano de forma leve e subjetiva.<br><br>Geralmente, ela mistura humor, reflexão e observações pessoais, abordando temas simples, mas com uma visão única do autor.',
        link: '/inscricao#EJA',
    },
  ]
</script>

<style scoped>
  .categories {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: white;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  .categories-header {
    text-align: center;
    margin: auto;
    max-width: 1200px;
    font-family: 'Codec Warm Trial', sans-serif;

  }

  .categories h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #0C4874;
    margin: 0; 
  }

  .categories .subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    color: #056DAC;
    margin: 20px;
  }

  .carousel {
    display: flex;
    gap: 20px;
    overflow-x: auto;

    scroll-snap-type: x mandatory;
    scroll-padding-left: 40px;
    scroll-padding-right: 40px;
    -webkit-overflow-scrolling: touch;
    max-width: 1400px;        /* Limita a largura para centralizar */
    margin: 0 auto;          /* Centraliza o container */
    justify-content: flex-start; /* mantém alinhamento inicial para scroll natural */
  }

  .card {
    flex: 0 0 270px;
    background: #EEEEEE;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;
    margin-left: 0;
  }

  .card:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  .card-img {
    width: 270px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .card h3 {
    font-family: 'Codec Warm Trial', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .card-subtitle {
    font-size: 1.8rem;
    color: #0C4874;
    font-weight: 700;
    display: block;
  }

  .description {
    font-size: 1.1rem;
    color: #333333;
    line-height: 1.4;
    text-align: left;
    margin-bottom: 15px;
    font-family: 'Montserrat', sans-serif;
    flex-grow: 1;
  }

  .card-cta {
    align-self: flex-start;
    background: none;
    color: #7ED321;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    font-family: 'Codec Warm Trial', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }

  .card-cta:hover {
    text-decoration: underline;
  }

  .arrow {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .categories-header {
      text-align: center;
    }

    .carousel {
      padding-left: 20px;
      padding-right: 20px;
      max-width: 100%;
    }

    .card {
      flex: 0 0 250px;
    }
  }
</style>
