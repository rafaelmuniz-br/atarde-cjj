<template>
  <section class="categories">
    <div class="categories-header">
      <h2>Concurso Cultural Jovem Jornalista</h2>
    </div>

    <div class="carousel">
      <div class="card" v-for="(item, index) in edicoes" :key="index">
        <img
          class="card-img"
          :src="item.img"
          :alt="`Imagem da edição ${item.title}`"
          loading="lazy"
        />
        <h3>{{ item.title }}</h3>
        <span class="card-subtitle">{{ item.sub }}</span>
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
  
<script setup>
  const edicoes = [
    {
      img: '/imgsOK/edicao2014.svg',
      title: '2014',
      sub: 'Um Furo de Notícia',
      description:
        'Com o tema "Um Furo na Notícia", a 1ª edição do Concurso Cultural Jovem Jornalista desafiou os jovens a explorarem o conceito de exclusividade na informação, nas categorias de videorreportagem e tirinhas. Essa edição foi marcada pela ênfase, na rapidez e precisão do jornalismo.',
    },
    {
      img: '/imgsOK/edicao2015.svg',
      title: '2015',
      sub: 'História de Vida',
      description:
        'Com o tema "Um Furo na Notícia", a 2ª edição do Concurso Cultural Jovem Jornalista desafiou os jovens a explorarem o conceito de exclusividade na informação, nas categorias de videorreportagem e tirinhas. Essa edição foi marcada pela ênfase, na rapidez e precisão do jornalismo.',
    },
    {
      img: '/imgsOK/edicao2017.svg',
      title: '2017',
      sub: 'Leitura Saudável na Era Digital',
      description:
        'Na 3ª edição do Concurso Cultural Jovem Jornalista, com o tema: "Leitura Saudável na Era Digital", os participantes foram desafiados a criar conteúdo em três categorias: videorreportagem, tirinhas e artigo de opinião. Alunos e professores foram premiados em três colocações, celebrando a criatividade e a inovação na produção jornalística.',
    },
    {
      img: '/imgsOK/edicao2024.svg',
      title: '2024',
      sub: 'Sou digital, mas a minha inteligência não é artificial',
      description:
        'Na 4ª edição do Concurso Cultural Jovem Jornalista, com o tema "Sou digital, mas a minha inteligência não é artificial", os participantes foram convidados a explorar reflexões sobre o uso consciente da tecnologia e o protagonismo humano na era digital.',
    },
  ]
</script>
  
<style scoped>
  .categories {
    padding: 60px 20px;
    background: #f9f9f9;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  
  .categories-header {
    text-align: left;
    max-width: 1200px;
    margin: 0 auto 30px;
  }
  
  .categories h2 {
    font-size: 32px;
    font-weight: 700;
    color: #0C4874;
    margin-bottom: 5px;
  }
  
  .carousel {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-left: 40px;
    padding-right: 40px;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 40px;
    scroll-padding-right: 40px;
    -webkit-overflow-scrolling: touch;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: flex-start;
  }
  
  .card {
    flex: 0 0 270px;
    background: #EEEEEE;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;
    margin-left: 0;
  }
  
  .card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
  
  .card-img {
    width: 270px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0C4874;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  .card-subtitle {
    font-size: 14px;
    color: #0C4874;
    font-weight: 400;
    margin-bottom: 10px;
    display: block;
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
  