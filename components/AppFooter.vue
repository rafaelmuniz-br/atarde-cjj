<template>
  <div class="page-wrapper">
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-left">
          <p class="footer-title">Participe do CCJJ 2025</p>
          <p class="footer-subtitle">Saiba o que é necessário para dar voz ao planeta</p>
          <a href="#" class="footer-cta">Inscreva-se agora <span>→</span></a>
          <div class="footer-social">
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
          </div>
        </div>
        <div class="footer-right">
          <img src="/logo.svg" alt="Logo Jovem Jornalista" loading="lazy"/>
        </div>
      </div>

      <div class="footer-logos">
        <img src="/public/logos/atarde1.svg" alt="Grupo A TARDE" />
        <img src="/public/logos/educacao1.svg" alt="A TARDE Educação" />
        <img src="/public/logos/atarde1.svg" alt="Grupo A TARDE" />
        <img src="/public/logos/educacao1.svg" alt="A TARDE Educação" />
        <img src="/public/logos/atarde1.svg" alt="Grupo A TARDE" />
        <img src="/public/logos/educacao1.svg" alt="A TARDE Educação" />
        <img src="/public/logos/atarde1.svg" alt="Grupo A TARDE" />
      </div>

      <div class="footer-bottom">
        <div class="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Política de Cookies</a>
        </div>
        <p>Rua Professor Milton Cayres de Brito, 204 – Caminho das Árvores, Salvador - BA, 41820-570 &nbsp; &nbsp; &nbsp; CNPJ nº 15.111.297/0001-30</p>
        <p>Copyright © 1996 - 2025 Grupo A TARDE. Todos os direitos reservados.  &nbsp; &nbsp; &nbsp; EMPRESA EDITORA A TARDE S.A.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  .page-wrapper {
    display: flex;
    align-items: center;         
    justify-content: center;     
    
  }
  .footer {
    background: white;
    color: #4A4A4A;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    padding: 20px;
    max-width: 1200px;
    width: 100%;
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto 50px;
    padding: 0 20px;
    }
  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 60%;
  }
  .footer-title {
    font-weight: 700;
    color: #056DAC;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  .footer-subtitle {
    margin: 0;
    color: #056DAC;
    font-family: 'Montserrat', sans-serif;
  }
  .footer-cta {
    color: #7ED321;
    text-decoration: none;
    font-weight: 700;
    font-family: 'Codec Warm Trial', sans-serif;
  }
  .footer-cta span {
    margin-left: 4px;
  }
  .footer-social {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }
  .footer-social img {
    width: 20px;
    height: 20px;
  }
  .footer-right img {
    height: 60px;
  }
  .footer-logos {
    display: flex;
    justify-content: center;
    gap: 70px;
    flex-wrap: wrap;
    margin: 20px 0 50px;
    }
  .footer-logos img {
    height: 30px;
  }
  .footer-bottom {
    text-align: center;
    font-size: 12px;
    color: #4A4A4A;
    line-height: 1.4;
    font-family: 'Montserrat', sans-serif;
    }
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 5px;
  }
  .footer-links a {
    color: #4A4A4A;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }
  .footer-links a:hover {
    color: #056DAC;
  }
  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      align-items: center;
    }
    .footer-left {
      max-width: 100%;
      align-items: center;
      text-align: center;
    }
    .footer-right {
      margin-top: 10px;
    }
    .footer-links {
      flex-direction: column;
      gap: 5px;
    }
  }
</style>

