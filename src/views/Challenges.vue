<template>
  <div class="container py-5">
    <!-- Header -->
    <div class="row mb-4">
      <div class="col-md-8">
        <h1 class="fw-bold mb-2">Desafios Sustentáveis</h1>
        <p class="text-muted">52 desafios semanais para transformar sua comunidade</p>
      </div>
      <div class="col-md-4">
        <div class="bg-green-light p-3 rounded d-flex align-items-center">
          <i class="bi bi-trophy text-green-custom me-2"></i>
          <span class="fw-bold">Seus pontos: {{ userPoints }}</span>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="row mb-4">
      <div class="col-md-4">
        <select class="form-select" v-model="selectedMonth">
          <option value="">Todos os meses</option>
          <option v-for="month in availableMonths" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-select" v-model="sortBy">
          <option value="date">Ordenar por data</option>
          <option value="points">Ordenar por pontos</option>
          <option value="time">Ordenar por tempo</option>
        </select>
      </div>
      <div class="col-md-4">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Buscar desafios..." 
          v-model="searchTerm"
        >
      </div>
    </div>

    <!-- Tabs -->
    <ul class="nav nav-tabs mb-4">
      <li class="nav-item">
        <a 
          class="nav-link" 
          :class="{ active: activeTab === 'current' }" 
          href="#" 
          @click="activeTab = 'current'"
        >
          Desafios Atuais
        </a>
      </li>
      <li class="nav-item">
        <a 
          class="nav-link" 
          :class="{ active: activeTab === 'upcoming' }" 
          href="#" 
          @click="activeTab = 'upcoming'"
        >
          Próximos
        </a>
      </li>
      <li class="nav-item">
        <a 
          class="nav-link" 
          :class="{ active: activeTab === 'completed' }" 
          href="#" 
          @click="activeTab = 'completed'"
        >
          Concluídos
        </a>
      </li>
    </ul>

    <!-- Current Challenges -->
    <div v-if="activeTab === 'current'">
      <div v-for="month in displayedMonths" :key="month" class="mb-5">
        <h2 class="fw-bold mb-4 text-green-custom">{{ month }}</h2>
        <div class="row g-4">
          <div 
            v-for="challenge in getFilteredChallenges(month)" 
            :key="challenge.id" 
            class="col-lg-4 col-md-6"
          >
            <ChallengeCard :challenge="challenge" @view-challenge="viewChallenge" />
          </div>
        </div>
      </div>
      
      <div class="text-center mt-4" v-if="!selectedMonth && displayedMonths.length < availableMonths.length">
        <button class="btn btn-outline-success" @click="loadMoreMonths">
          Carregar Mais Meses
        </button>
      </div>
    </div>

    <!-- Upcoming Challenges -->
    <div v-if="activeTab === 'upcoming'" class="text-center py-5">
      <i class="bi bi-clock-history display-1 text-muted mb-3"></i>
      <h3>Próximos Desafios</h3>
      <p class="text-muted">Os próximos desafios serão liberados em breve!</p>
    </div>

    <!-- Completed Challenges -->
    <div v-if="activeTab === 'completed'" class="text-center py-5">
      <i class="bi bi-check-circle display-1 text-muted mb-3"></i>
      <h3>Nenhum Desafio Concluído</h3>
      <p class="text-muted">Você ainda não concluiu nenhum desafio.</p>
      <button class="btn btn-green-custom" @click="activeTab = 'current'">
        Participar do Primeiro Desafio
      </button>
    </div>

    <!-- Fixed Challenges Section -->
    <section>
      <h2>Desafio Fixos</h2>
      <div class="challenges-list">
        <div
          class="challenge-card"
          v-for="challenge in fixedChallenges"
          :key="challenge.id"
        >
          <h3>{{ challenge.title }}</h3>
          <p>{{ challenge.description }}</p>
          <p><strong>Pontos:</strong> {{ challenge.points }}</p>
        </div>
      </div>
    </section>

    <!-- Scoring System -->
    <div class="card mt-5">
      <div class="card-body">
        <h3 class="fw-bold mb-4">Como Funciona a Pontuação</h3>
        <p class="mb-4">
          Ao completar os desafios e enviar as evidências, você acumula pontos que serão convertidos em bonificação na sua nota final.
        </p>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="bg-green-light p-4 rounded">
              <h5 class="fw-bold">Nível Bronze</h5>
              <p class="text-green-custom fw-bold mb-1">100-200 pontos</p>
              <small class="text-muted">5% de bonificação na nota final</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-green-light p-4 rounded">
              <h5 class="fw-bold">Nível Prata</h5>
              <p class="text-green-custom fw-bold mb-1">201-350 pontos</p>
              <small class="text-muted">10% de bonificação na nota final</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-green-light p-4 rounded">
              <h5 class="fw-bold">Nível Ouro</h5>
              <p class="text-green-custom fw-bold mb-1">351+ pontos</p>
              <small class="text-muted">15% de bonificação na nota final</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChallengeCard from '@/components/ChallengeCard.vue';

export default {
  name: "ChallengesPage",
  components: {
    ChallengeCard
  },
  data() {
    return {
      userPoints: 1250,
      selectedMonth: "",
      sortBy: "date",
      searchTerm: "",
      activeTab: "current",
      challenges: [
        {
          id: 1,
          week: "Semana 1",
          month: "Janeiro",
          title: "Coleta Seletiva",
          description: "Separe o lixo orgânico do reciclável em sua casa e descarte corretamente.",
          deadline: "31/01/2025",
          time: "2 horas",
          points: 50
        },
        {
          id: 2,
          week: "Semana 2",
          month: "Janeiro",
          title: "Economia de Água",
          description: "Reduza o tempo do seu banho em 5 minutos e feche a torneira ao escovar os dentes.",
          deadline: "07/02/2025",
          time: "Diário",
          points: 40
        },
        {
          id: 3,
          week: "Semana 3",
          month: "Fevereiro",
          title: "Plantar uma Árvore",
          description: "Plante uma muda de árvore em sua comunidade ou em um local adequado.",
          deadline: "28/02/2025",
          time: "3 horas",
          points: 100
        },
        {
          id: 4,
          week: "Semana 4",
          month: "Fevereiro",
          title: "Dia sem Carro",
          description: "Utilize transporte público, bicicleta ou vá a pé por um dia.",
          deadline: "07/03/2025",
          time: "1 dia",
          points: 60
        },
        {
          id: 5,
          week: "Semana 5",
          month: "Março",
          title: "Compostagem Caseira",
          description: "Inicie uma composteira em casa para resíduos orgânicos.",
          deadline: "31/03/2025",
          time: "4 horas",
          points: 80
        },
        {
          id: 6,
          week: "Semana 6",
          month: "Março",
          title: "Limpeza de Praia/Parque",
          description: "Participe de uma ação de limpeza em sua comunidade.",
          deadline: "07/04/2025",
          time: "3 horas",
          points: 90
        },
        {
          id: 7,
          week: "Semana 7",
          month: "Abril",
          title: "Reutilizar Roupas",
          description: "Doe roupas que não usa mais ou transforme-as em algo novo.",
          deadline: "30/04/2025",
          time: "2 horas",
          points: 50
        },
        {
          id: 8,
          week: "Semana 8",
          month: "Abril",
          title: "Horta em Casa",
          description: "Crie uma pequena horta com temperos ou vegetais.",
          deadline: "07/05/2025",
          time: "5 horas",
          points: 110
        },
        {
          id: 9,
          week: "Semana 9",
          month: "Maio",
          title: "Consumo Consciente",
          description: "Evite compras desnecessárias e prefira produtos sustentáveis.",
          deadline: "31/05/2025",
          time: "Diário",
          points: 60
        },
        {
          id: 10,
          week: "Semana 10",
          month: "Maio",
          title: "Energia Renovável",
          description: "Pesquise sobre fontes de energia renovável e compartilhe com amigos.",
          deadline: "07/06/2025",
          time: "2 horas",
          points: 70
        }
      ],
      fixedChallenges: [
        {
          id: 101,
          title: "Convide Pessoas para a Missão",
          description: "Convide amigos para participarem da Missão Sustentável. Você ganha 10 pontos por convite aceito e pontos extras conforme eles concluem desafios.",
          points: 10
        }
        // Você pode adicionar outros desafios fixos aqui
      ],
      monthsToShow: 2
    }
  },
  computed: {
    availableMonths() {
      const months = [...new Set(this.challenges.map(c => c.month))];
      return months.sort((a, b) => {
        const monthOrder = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return monthOrder.indexOf(a) - monthOrder.indexOf(b);
      });
    },
    displayedMonths() {
      if (this.selectedMonth) {
        return [this.selectedMonth];
      } else {
        return this.availableMonths.slice(0, this.monthsToShow);
      }
    },
    months() {
      // Retorna lista única de meses dos desafios
      return [
        ...new Set(this.challenges.map((challenge) => challenge.month)),
      ];
    },
  },
  methods: {
    getFilteredChallenges(month) {
      let filtered = this.challenges.filter(challenge => challenge.month === month);

      if (this.searchTerm) {
        const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
        filtered = filtered.filter(
          challenge => 
            challenge.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            challenge.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
      }

      if (this.sortBy === "date") {
        filtered.sort((a, b) => new Date(a.deadline.split("/").reverse().join("-")) - new Date(b.deadline.split("/").reverse().join("-")));
      } else if (this.sortBy === "points") {
        filtered.sort((a, b) => b.points - a.points);
      } else if (this.sortBy === "time") {
        filtered.sort((a, b) => a.time.localeCompare(b.time));
      }

      return filtered;
    },
    loadMoreMonths() {
      this.monthsToShow = Math.min(this.availableMonths.length, this.monthsToShow + 2);
    },
    viewChallenge(challenge) {
      console.log("Ver detalhes do desafio:", challenge);
      alert(`Detalhes do Desafio: ${challenge.title}\nDescrição: ${challenge.description}\nPontos: ${challenge.points}`);
    },
    challengesByMonth(month) {
      return this.challenges.filter((challenge) => challenge.month === month);
    },
  }
}
</script>

<style scoped>
.bg-green-light {
  background-color: #d4edda;
}

.text-green-custom {
  color: #28a745;
}

.border-green-custom {
  border-color: #28a745 !important;
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

.challenges-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.challenge-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 16px;
  width: 250px;
}
</style>


