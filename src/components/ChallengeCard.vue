<template>
  <div class="card h-100 border-green-custom card-hover">
    <div class="card-header bg-green-light">
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <span class="badge bg-secondary mb-2">{{ challenge.week }}</span>
          <h5 class="card-title text-green-custom mb-0">{{ challenge.title }}</h5>
        </div>
        <span class="badge bg-green-custom">{{ challenge.points }} pontos</span>
      </div>
      <small class="text-muted">
        <i class="bi bi-calendar me-1"></i>
        Prazo: {{ challenge.deadline }}
      </small>
    </div>
    <div class="card-body">
      <p class="card-text">{{ challenge.description }}</p>
      <div class="d-flex align-items-center text-muted small">
        <i class="bi bi-clock me-1"></i>
        Tempo estimado: {{ challenge.time }}
      </div>
    </div>
    <div class="card-footer bg-light">
      <button 
        class="btn btn-green-custom w-100"
        @click="$emit('view-challenge', challenge)"
      >
        Ver Detalhes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengeCard',
  props: {
    challenge: Object
  }
}
</script>

<style scoped>
.border-green-custom {
  border-color: #28a745 !important;
}

.bg-green-light {
  background-color: #d4edda !important;
}

.text-green-custom {
  color: #28a745 !important;
}

.bg-green-custom {
  background-color: #28a745 !important;
}

.card-hover {
  transition: transform 0.2s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-5px);
}
</style>


