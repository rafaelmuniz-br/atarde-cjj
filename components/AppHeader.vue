<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="Jovem Jornalista" loading="lazy"/>
        </NuxtLink>
      </div>

      <nav :class="['nav', { 'nav--open': isMenuOpen }]">
        <ul>
          <li><NuxtLink to="/o-concurso" @click="isMenuOpen = false">O Concurso</NuxtLink></li>
          <li><NuxtLink to="/sou-professor" @click="isMenuOpen = false">Sou professor</NuxtLink></li>
          <li><NuxtLink to="/inscricao" @click="isMenuOpen = false">Inscrição</NuxtLink></li>
          <li><NuxtLink to="/regulamento" @click="isMenuOpen = false">Regulamento</NuxtLink></li>
          <li><NuxtLink to="/historico" @click="isMenuOpen = false">Histórico</NuxtLink></li>
          <li><NuxtLink to="/faq" @click="isMenuOpen = false">FAQ</NuxtLink></li>
          <li><NuxtLink to="/fale-conosco" @click="isMenuOpen = false">Fale Conosco</NuxtLink></li>
        </ul>
        <a 
          href="https://sites.atarde.com.br/jovemjornalista/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="cta"
          @click="isMenuOpen = false"
        > Inscreva-se agora
        </a>
      </nav>

      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Abrir menu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const isMenuOpen = ref(false)
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
  .nav ul li a,
  .cta {
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-style: normal; 
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0%;
  }

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    box-shadow: none;
    transition: box-shadow 0.3s ease;
    z-index: 1000;
  }

  .header--scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
  }

  .logo img {
    height: 70px;
    margin-right: 50px;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
  }

  .nav ul li a {
    color: #056DAC;
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav ul li a:hover {
    color: #EE9137;
  }

  .nav ul li a.router-link-active {
    color: #EE9137;
  }

  .cta {
    background: #EE9137;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    transition: background 0.2s;
  }

  .cta:hover {
    background: #d97f2a;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 24px;
    height: 2px;
    background: #056DAC;
    transition: transform 0.3s, opacity 0.3s;
  }

  .menu-toggle span.open:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .menu-toggle span.open:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle span.open:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  @media (max-width: 1110px) {
    .nav {
      position: absolute;
      top: 60px;
      right: 0;
      flex-direction: column;
      background: white;
      width: 200px;
      max-height: 0;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: max-height 0.3s ease;
      gap: 0;
    }

    .nav--open {
      max-height: 500px;
    }

    .nav ul {
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0;
      gap: 10px;
    }

    .cta {
      margin: 10px 0 10px 10px;
    }

    .menu-toggle {
      display: flex;
    }
  }
</style>
