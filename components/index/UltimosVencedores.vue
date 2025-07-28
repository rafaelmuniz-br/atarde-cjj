<template>
  <section class="section vencedores">
    <h2>Vídeo - vencedores da última edição</h2>
    <p>Lembre-se de seguir todas as orientações para garantir a inscrição dentro do prazo estabelecido.<br>Agradecemos a colaboração.</p>
    <div class="video-wrapper">
      <video controls width="100%" height="auto" poster="">
        <source src="" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  </section>
</template>
  
<style scoped>
  .section.vencedores {
    padding: 40px 20px;
    text-align: center;

  }
  .section.vencedores h2 {
    color: #0C4874;
    margin-bottom: 10px;
    font-family: 'Codec Warm Trial', sans-serif;
    font-size: 2.8rem;
  }
  .section.vencedores p {
    color: #056DAC;
    margin-bottom: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

  }
  .video-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
  video {
    width: 100%;
    border-radius: 8px;
  }
</style>
  