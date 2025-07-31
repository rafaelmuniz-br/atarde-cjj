<template>
  <TextImageSection
    title="Sou Professor"
    subtitle="Seja bem-vindo(a), professor(a)!<br>Sua orientação é essencial no processo de inscrição do aluno no concurso.<br>Para facilitar o processo de inscrição de <strong>mais de um(a) aluno(a)</strong>, siga os passos abaixo:"
    description="
    <strong> 1. Acesse o link com a planilha de inscrição, e preencha os dados dos(as) alunos(as) conforme indicado;<br><br>
    2. Certifique-se de nomear corretamente os arquivos das produções, documentos e consolidá-los em um único arquivo em PDF antes do envio;<br><br>
    3.Após preenchimento da planilha, envie-a juntamente com os arquivos das produções dos(as) alunos(as) para o email <a href='mailto:jovemjornalista@grupoatarde.com.br'>jovemjornalista@grupoatarde.com.br</a>. Todos os trabalhos devem ser organizados e enviados em um único arquivo PDF.</strong><br><br>  
    Lembre-se de seguir todas as orientações para garantir a inscrição dentro do prazo estabelecido.<br>Agradecemos a colaboração.
    "
    imageSrc="imgsOK/souprofessor.svg"
    imageAlt="Professor"
    buttonText="Acesse a planilha"
    buttonLink="#"
    :reverse="true"
  />
</template>
  
<script setup>
  import TextImageSection from '@/components/TextImageSection.vue'
</script>
  