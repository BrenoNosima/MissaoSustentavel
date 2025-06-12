<template>
  <div id="app">
    <Navbar :currentPage="currentPage" @navigate="handleNavigation" />

    <HomePage v-if="currentPage === 'home'" @navigate="handleNavigation" />
    <ChallengesPage v-else-if="currentPage === 'challenges'" />
    <AboutPage v-else-if="currentPage === 'about'" />
    <ResourcesPage v-else-if="currentPage === 'resources'" />

    <!-- Footer -->
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>&copy; 2025 Missão Sustentável. Todos os direitos reservados.</p>
        <div class="d-flex justify-content-center gap-3 mb-3">
          <a href="#" class="text-white"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-white"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-white"><i class="bi bi-linkedin"></i></a>
        </div>
        <p>
          <a href="#" class="text-white me-2">Política de Privacidade</a> |
          <a href="#" class="text-white ms-2">Termos de Uso</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HomePage from '@/views/Home.vue';
import ChallengesPage from '@/views/Challenges.vue';
import AboutPage from '@/views/About.vue';
import ResourcesPage from '@/views/Resources.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomePage,
    ChallengesPage,
    AboutPage,
    ResourcesPage
  },
  data() {
    return {
      currentPage: 'home'
    };
  },
  methods: {
    handleNavigation(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
/* Estilos globais */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.bg-green-custom {
  background-color: #28a745;
}

.text-green-custom {
  color: #28a745;
}

.bg-green-light {
  background-color: #d4edda;
}

.btn-green-custom {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.btn-green-custom:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>


