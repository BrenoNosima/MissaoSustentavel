<template>
  <section class="hero-section d-flex align-items-center text-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold mb-4">
            Transforme sua Comunidade com Ações Sustentáveis
          </h1>
          <p class="lead mb-4">
            Participe de 52 desafios semanais e acumule pontos para bonificação na sua nota final. 
            Cada desafio foi pensado para ser realizado por adolescentes e gerar impacto real na comunidade.
          </p>
          <div class="d-flex gap-3">
            <button 
              class="btn btn-light btn-lg text-green-custom" 
              @click="$emit('navigate', 'challenges')"
            >
              Ver Desafios
            </button>
            <button class="btn btn-outline-light btn-lg">
              Saiba Mais
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-center">
            <div class="hero-icon-container">
              <i class="bi bi-globe2 hero-icon"></i>
              <div class="hero-icons-small">
                <i class="bi bi-recycle"></i>
                <i class="bi bi-tree"></i>
                <i class="bi bi-droplet"></i>
                <i class="bi bi-lightning"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, #28a745, #218838); /* Gradiente de verde */
  min-height: 60vh;
  padding: 80px 0;
}

.hero-icon-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-icon {
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-icons-small i {
  position: absolute;
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero-icons-small .bi-recycle {
  top: 10px;
  left: 10px;
}

.hero-icons-small .bi-tree {
  top: 10px;
  right: 10px;
}

.hero-icons-small .bi-droplet {
  bottom: 10px;
  left: 10px;
}

.hero-icons-small .bi-lightning {
  bottom: 10px;
  right: 10px;
}

.text-green-custom {
  color: #28a745;
}
</style>


