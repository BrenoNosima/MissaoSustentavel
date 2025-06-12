<template>
  <section class="py-5">
    <div class="container">
      <div class="row text-center mb-5">
        <div class="col">
          <h2 class="fw-bold mb-3">Como Funciona</h2>
          <p class="text-muted">Três passos simples para começar sua jornada sustentável</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm card-hover">
            <div class="card-body text-center p-4">
              <div class="bg-green-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 icon-circle">
                <i class="bi bi-list-check text-green-custom fs-2"></i>
              </div>
              <h5 class="fw-bold">Escolha um Desafio</h5>
              <p class="text-muted">Selecione um dos 52 desafios semanais disponíveis na plataforma</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm card-hover">
            <div class="card-body text-center p-4">
              <div class="bg-green-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 icon-circle">
                <i class="bi bi-camera text-green-custom fs-2"></i>
              </div>
              <h5 class="fw-bold">Execute e Documente</h5>
              <p class="text-muted">Realize o desafio e envie fotos ou vídeos como evidência</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm card-hover">
            <div class="card-body text-center p-4">
              <div class="bg-green-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3 icon-circle">
                <i class="bi bi-trophy text-green-custom fs-2"></i>
              </div>
              <h5 class="fw-bold">Ganhe Pontos</h5>
              <p class="text-muted">Acumule pontos e converta em bonificação na sua nota final</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
.bg-green-light {
  background-color: #d4edda; /* Um verde claro para o fundo */
}

.text-green-custom {
  color: #28a745;
}

.icon-circle {
  width: 80px;
  height: 80px;
}

.card-hover {
  transition: transform 0.2s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-5px);
}
</style>


