<template>
  <section class="fale-conosco-wrapper">
    <div class="fale-conosco-container">

      <div class="form-section">
        <div class="fale-conosco-header">
          <h2 class="fale-conosco-title">Fale Conosco</h2>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="fullName" class="sr-only">Nome completo*</label>
            <input
              type="text"
              id="fullName"
              v-model="formData.fullName"
              placeholder="Nome completo*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="email" class="sr-only">Email*</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Email*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="phone" class="sr-only">Telefone*</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              placeholder="Telefone*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="municipality" class="sr-only">Município e Instituição*</label>
            <input
              type="text"
              id="municipality"
              v-model="formData.municipality"
              placeholder="Município e Instituição*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="message" class="sr-only">Mensagem:*</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Mensagem:*"
              required
              rows="5"
              class="form-textarea"
            ></textarea>
          </div>

          <div class="form-actions">
            <p class="required-note">*Campo obrigatório</p>
            <button type="submit" class="btn-submit">Enviar mensagem</button>
          </div>
          
        </form>
      </div>

      <div class="image-section">
        <img src="/imgsOK/mosaico-faleconosco.svg" alt="Ilustração Fale Conosco" width="500" height="400" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  
  const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    municipality: '',
    message: '',
  })
  
  const handleSubmit = () => {
    console.log('Dados do formulário enviados:', formData.value)
    alert('Mensagem enviada com sucesso!')
  }
</script>

<style scoped>
  .fale-conosco-wrapper {
    padding: 40px 20px;
    margin-top: 60px;
  }
  
  .fale-conosco-container {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    gap: 80px;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap; 
  }
  
  .form-section {
    flex: 1;
    max-width: 30vw; 
    min-width: 350px;
    padding: 30px 25px;
    border-radius: 8px;
  }
  
  .fale-conosco-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .fale-conosco-title {
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: #0C4874;
    text-align: left;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    width: 100%;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #056DAC;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #056DAC;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #056DAC;
    opacity: 0.7;
  }
  
  .form-input:focus,
  .form-textarea:focus {
    border-color: #EE9137;
    box-shadow: 0 0 0 2px rgba(238, 145, 55, 0.3);
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    gap: 15px;
    flex-wrap: wrap; 
  }

  .required-note {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    color: #056DAC;
    text-align: left;
    margin: 0;
    flex-shrink: 0;
  }
  
  .btn-submit {
    background: #EE9137;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-submit:hover {
    background: #d97f2a;
  }
  
  .image-section {
    flex: 1; 
    max-width: 50vw; 
    min-width: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-section img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
  
  @media (max-width: 1110px) {
    .fale-conosco-container {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  
    .form-section {
      text-align: center;
      max-width: 100%; 
      min-width: unset; 
      margin: auto; 
      order: 2; 
    }

    .form-input{
      width: auto;
    }

    .fale-conosco-title {
        text-align: center;
    }
  
    .image-section {
      width: 100%; 
      max-width: 100%;
      min-width: unset; 
      margin-left: 0;
      margin-top: 30px;
      order: 1;
    }
  
    .image-section img {
      width: 100%;
    }

    .form-actions {
        flex-direction: column; 
        align-items: center; 
        gap: 10px;
    }

    .btn-submit {
        width: 100%; 
        text-align: center;
    }
  }

  @media (max-width: 480px) {
    .form-section {
      padding: 20px 15px; 
    }

    .form-input{
      width: auto;
    }

    .fale-conosco-title {
      font-size: 1.75rem; 
    }
  }
</style>