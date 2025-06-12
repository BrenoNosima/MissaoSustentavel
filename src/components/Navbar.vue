<template>
  <nav class="navbar navbar-expand-lg bg-green-custom">
    <div class="container">
      <a class="navbar-brand text-white fw-bold" href="#" @click="$emit('navigate', 'home')">
        <i class="bi bi-leaf me-2"></i>
        Missão Sustentável
      </a>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a 
              class="nav-link text-white" 
              :class="{ 'fw-bold': currentPage === 'home' }"
              href="#" 
              @click="$emit('navigate', 'home')"
            >
              Início
            </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-white" 
              :class="{ 'fw-bold': currentPage === 'challenges' }"
              href="#" 
              @click="$emit('navigate', 'challenges')"
            >
              Desafios
            </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-white" 
              :class="{ 'fw-bold': currentPage === 'about' }"
              href="#" 
              @click="$emit('navigate', 'about')"
            >
              Sobre
            </a>
          </li>
          <li class="nav-item">
            <a 
              class="nav-link text-white" 
              :class="{ 'fw-bold': currentPage === 'resources' }"
              href="#" 
              @click="$emit('navigate', 'resources')"
            >
              Recursos
            </a>
          </li>
        </ul>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-light">Entrar</button>
          <button class="btn btn-light text-green-custom">Cadastrar</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    currentPage: String
  }
}
</script>

<style scoped>
.bg-green-custom {
  background-color: #28a745; /* Um verde mais escuro para a navbar */
}

.text-green-custom {
  color: #28a745;
}
</style>


