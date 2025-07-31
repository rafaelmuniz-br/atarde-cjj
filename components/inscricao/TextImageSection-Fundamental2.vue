<template>
  <section id="fundamental2">
    <TextImageSection
      title="VIDEORREPORTAGEM"
      subtitle="Ensino Fundamental II"
      description="        
      A videorreportagem é uma forma de jornalismo que dá ao repórter o controle total da produção, desde a captação das imagens até a edição final. Esse formato permite uma narrativa mais pessoal e dinâmica, onde a improvisação e a criatividade desempenham papeis fundamentais. Descubra como escolher temas relevantes, capturar imagens impactantes e editar seu material para criar uma reportagem envolvente e informativa.<br><br>
      Como produzir uma videorreportagem?
        <br><br>
        <strong>1º Escolha seu tema:</strong><br>
        Encontre uma notícia bacana, defina o foco e crie suas pautas.<br><br>

        <strong>2º Planeje sua abordagem:</strong><br>
        Decida onde gravar, que imagens usar e quem entrevistar.<br><br>

        <strong>3º Produza o conteúdo:</strong><br>
        Marque as entrevistas, grave as cenas e fique de olho nos direitos de imagem.<br><br>

        <strong>4º Edite como um pro:</strong><br>
        Organize as falas, monte a narrativa e combine o texto com as imagens certas. Adicione trilha sonora, ajuste o áudio, aplique efeitos e insira os créditos.<br><br>

        <strong>5º Finalize com estilo:</strong><br>
        Seu vídeo deve ter de 1 a 3 minutos e ser hospedado em uma plataforma online, como YouTube ou Vimeo. Insira o link (URL) no ato da inscrição."

      imageSrc="imgsOK/fundamental2-grande.svg"
      imageAlt="Fundamental2"
      buttonText="Inscreva-se"
      buttonLink="https://sites.atarde.com.br/jovemjornalista/"
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

  
  