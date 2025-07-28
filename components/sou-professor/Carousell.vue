<template>
  <section class="categorias-wrapper">
    <div class="texto-lateral">
      <h2>Sou Professor</h2>
      <p>
        Seja bem-vindo(a), professor(a)! Sua orientação é essencial no processo de inscrição do aluno(a) no concurso. Para facilitar o processo de inscrição de mais de um(a) aluno(a), siga os passos ao lado:
      </p>
    </div>

    <div class="carousel">
      <div class="card" v-for="(item, index) in steps" :key="index">
        <h3 v-html="item.title"></h3>
        <p class="description" v-html="item.description"></p>
      </div>
    </div>
  </section>
</template>
  
<script setup>
  const steps = [
    {
      title: '<span>🔗</span> Passo 1',
      description: 'Acesse o link com a planilha de inscrição, e preencha os dados  dos(as) alunos(as) conforme indicado;',
    },
    {
      title: '<span>📝</span> Passo 2',
      description:
        'Certifique-se de nomear corretamente os arquivos das produções, documentos e consolidá-los em um único arquivo em PDF antes do envio.',
    },
    {
      title: '<span>🗂️</span> Passo 3',
      description:
        'Após preenchimento da planilha, envie-a juntamente com os arquivos das produções dos alunos(as).<br><br>Todos os trabalhos devem ser organizados e enviados em um único arquivo PDF.',
    },
    {
      title: '<span>🗓️</span> Passo 4',
      description:
        'Lembre-se de seguir todas as orientações para garantir a inscrição dentro do prazo estabelecido.<br><br>Agradecemos a colaboração.',
    },
  ];
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
    font-size: 32px;
    font-weight: 700;
    color: #0C4874;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
  }
  
  .texto-lateral p {
    font-size: 16px;
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
    height: 350px;
  }
  
  .card {
    flex: 0 0 180px;
    background: #EEEEEE;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #0C4874;
    margin-bottom: 10px;
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
  
  @media (max-width: 995px) {
    .texto-lateral {
      max-width: 100%;
      text-align: center;
    }
  
    .texto-lateral h2 {
      text-align: center;
    }
  }
</style>
  