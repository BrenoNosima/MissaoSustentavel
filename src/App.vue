<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-green-custom">
      <div class="container">
        <a class="navbar-brand text-white fw-bold" href="#" @click="currentPage = 'home'">
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
                @click="currentPage = 'home'"
              >
                Início
              </a>
            </li>
            <li class="nav-item">
              <a 
                class="nav-link text-white" 
                :class="{ 'fw-bold': currentPage === 'challenges' }"
                href="#" 
                @click="currentPage = 'challenges'"
              >
                Desafios
              </a>
            </li>
            <li class="nav-item">
              <a 
                class="nav-link text-white" 
                :class="{ 'fw-bold': currentPage === 'about' }"
                href="#" 
                @click="currentPage = 'about'"
              >
                Sobre
              </a>
            </li>
            <li class="nav-item">
              <a 
                class="nav-link text-white" 
                :class="{ 'fw-bold': currentPage === 'resources' }"
                href="#" 
                @click="currentPage = 'resources'"
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

    <!-- Home Page -->
    <div v-if="currentPage === 'home'">
      <!-- Hero Section -->
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
                  @click="currentPage = 'challenges'"
                >
                  Ver Desafios
                </button>
                <button class="btn btn-outline-light btn-lg">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <!-- Substituído a imagem por um ícone ilustrativo -->
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

      <!-- Features Section -->
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

      <!-- Stats Section -->
      <section class="bg-green-light py-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md-3">
              <h3 class="fw-bold text-green-custom display-6">52</h3>
              <p class="mb-0">Desafios Semanais</p>
            </div>
            <div class="col-md-3">
              <h3 class="fw-bold text-green-custom display-6">15%</h3>
              <p class="mb-0">Bonificação Máxima</p>
            </div>
            <div class="col-md-3">
              <h3 class="fw-bold text-green-custom display-6">100+</h3>
              <p class="mb-0">Escolas Participantes</p>
            </div>
            <div class="col-md-3">
              <h3 class="fw-bold text-green-custom display-6">5000+</h3>
              <p class="mb-0">Estudantes Engajados</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Challenges Page -->
    <div v-if="currentPage === 'challenges'">
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
                      @click="viewChallenge(challenge)"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
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
    </div>

    <!-- About Page -->
    <div v-if="currentPage === 'about'">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1 class="fw-bold mb-4">Sobre o Projeto</h1>
            <p class="lead">
              A Missão Sustentável é uma plataforma educacional que conecta estudantes a ações práticas de sustentabilidade, 
              promovendo o aprendizado através da experiência e do engajamento comunitário.
            </p>
            
            <h3 class="fw-bold mt-5 mb-3">Nossa Missão</h3>
            <p>
              Capacitar jovens para se tornarem agentes de mudança em suas comunidades, desenvolvendo consciência ambiental 
              e habilidades práticas para enfrentar os desafios da sustentabilidade.
            </p>
            
            <h3 class="fw-bold mt-5 mb-3">Como Surgiu</h3>
            <p>
              O projeto nasceu da necessidade de tornar a educação ambiental mais prática e engajante, 
              conectando o aprendizado teórico com ações concretas que geram impacto real na comunidade.
            </p>
            
            <h3 class="fw-bold mt-5 mb-3">Metodologia</h3>
            <p>
              Utilizamos uma abordagem baseada em desafios práticos, onde os estudantes aprendem fazendo. 
              Cada desafio é cuidadosamente elaborado para ser:
            </p>
            <ul>
              <li><strong>Realizável:</strong> Adequado para adolescentes com nível médio de dificuldade</li>
              <li><strong>Impactante:</strong> Gera mudanças reais na comunidade</li>
              <li><strong>Educativo:</strong> Desenvolve conhecimentos e habilidades sustentáveis</li>
              <li><strong>Motivador:</strong> Sistema de pontuação com recompensas acadêmicas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Resources Page -->
    <div v-if="currentPage === 'resources'">
      <div class="container py-5">
        <h1 class="fw-bold mb-4">Recursos Educativos</h1>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 card-hover">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-book text-green-custom fs-3 me-3"></i>
                  <h5 class="card-title mb-0">Guias Práticos</h5>
                </div>
                <p class="card-text">Materiais detalhados para execução dos desafios, com passo a passo ilustrado</p>
                <button class="btn btn-green-custom">Acessar Guias</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 card-hover">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-play-circle text-green-custom fs-3 me-3"></i>
                  <h5 class="card-title mb-0">Vídeos Tutoriais</h5>
                </div>
                <p class="card-text">Conteúdo audiovisual para apoiar o aprendizado e execução dos desafios</p>
                <button class="btn btn-green-custom">Assistir Vídeos</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 card-hover">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-download text-green-custom fs-3 me-3"></i>
                  <h5 class="card-title mb-0">Materiais para Download</h5>
                </div>
                <p class="card-text">Templates, planilhas e documentos para facilitar a execução dos projetos</p>
                <button class="btn btn-green-custom">Baixar Materiais</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 card-hover">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-people text-green-custom fs-3 me-3"></i>
                  <h5 class="card-title mb-0">Comunidade</h5>
                </div>
                <p class="card-text">Conecte-se com outros estudantes e compartilhe experiências</p>
                <button class="btn btn-green-custom">Participar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white py-5 mt-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <h5 class="fw-bold mb-3">
              <i class="bi bi-leaf me-2"></i>
              Missão Sustentável
            </h5>
            <p class="text-light">
              Transformando comunidades através da educação ambiental e ações práticas de sustentabilidade.
            </p>
          </div>
          <div class="col-md-4">
            <h5 class="fw-bold mb-3">Links Rápidos</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none" @click="currentPage = 'home'">
                  Início
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none" @click="currentPage = 'challenges'">
                  Desafios
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none" @click="currentPage = 'about'">
                  Sobre
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-light text-decoration-none" @click="currentPage = 'resources'">
                  Recursos
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5 class="fw-bold mb-3">Contato</h5>
            <p class="text-light mb-2">
              <i class="bi bi-envelope me-2"></i>
              contato@missaosustentavel.org
            </p>
            <p class="text-light mb-3">
              <i class="bi bi-telephone me-2"></i>
              +55 (11) 9999-9999
            </p>
            <button class="btn btn-outline-light">Inscreva sua Escola</button>
          </div>
        </div>
        <hr class="my-4">
        <div class="text-center">
          <p class="mb-0">© 2025 Missão Sustentável. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <!-- Barra de progresso de desafios -->
    <div v-if="currentPage === 'challenges'" class="container mt-4">
      <div class="progress-bar">
        <div class="progress-bar-inner" :style="{ width: progressPercent + '%' }">
          {{ completedChallenges.length }} de {{ challenges.length }} desafios concluídos ({{ progressPercent }}%)
        </div>
      </div>
    </div>

    <!-- Toast de feedback -->
    <div v-if="showToast" class="toast-feedback">
      <i class="bi bi-check-circle-fill"></i> Evidência enviada com sucesso!
    </div>

    <!-- Modal de Detalhes do Desafio -->
    <div v-if="showChallengeModal">
      <div class="modal-backdrop" @click="closeChallengeModal"></div>
      <div class="modal fade show d-block" tabindex="-1" style="z-index: 1100;">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-green-custom text-white">
              <h5 class="modal-title">Detalhes do Desafio</h5>
              <button type="button" class="btn-close btn-close-white" @click="closeChallengeModal"></button>
            </div>
            <div class="modal-body" v-if="selectedChallenge">
              <div class="d-flex align-items-center mb-2">
                <h3 class="fw-bold text-green-custom mb-0">{{ selectedChallenge.title }}</h3>
                <span v-if="isFavorite(selectedChallenge.id)" class="favorite-star ms-2"><i class="bi bi-star-fill"></i></span>
                <span v-if="isCompleted(selectedChallenge.id)" class="completed-badge ms-2">Concluído</span>
                <span class="favorite-star ms-2" @click="toggleFavorite(selectedChallenge.id)">
                  <i :class="isFavorite(selectedChallenge.id) ? 'bi bi-star-fill' : 'bi bi-star'" title="Favoritar"></i>
                </span>
              </div>
              <span class="badge bg-secondary mb-2">{{ selectedChallenge.week }}</span>
              <span class="badge bg-green-custom ms-2">{{ selectedChallenge.points }} pontos</span>
              <p class="mt-3">{{ selectedChallenge.description }}</p>
              <ul class="list-unstyled mb-3">
                <li><i class="bi bi-calendar me-2"></i><strong>Prazo:</strong> {{ selectedChallenge.deadline }}</li>
                <li><i class="bi bi-clock me-2"></i><strong>Tempo estimado:</strong> {{ selectedChallenge.time }}</li>
                <li><i class="bi bi-tag me-2"></i><strong>Categoria:</strong> {{ selectedChallenge.category }}</li>
              </ul>
              <div class="mb-3">
                <label class="form-label">Envie sua evidência (foto ou vídeo):</label>
                <input type="file" class="form-control mb-2" disabled>
                <small class="text-muted">(Simulação: upload desabilitado)</small>
              </div>
              <div class="mb-3">
                <label class="form-label">Comentário ou observação:</label>
                <textarea class="form-control" rows="2" placeholder="Digite aqui..." v-model="challengeComment"></textarea>
              </div>
              <div class="mb-3">
                <strong>Dicas para este desafio:</strong>
                <ul class="mb-0">
                  <li v-for="(tip, idx) in challengeTips[selectedChallenge.id] || defaultTips" :key="idx">{{ tip }}</li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-green-custom" @click="submitEvidence">Enviar Evidência</button>
              <button class="btn btn-outline-secondary" @click="closeChallengeModal">Fechar</button>
              <button class="btn btn-outline-success ms-auto" @click="nextChallenge" v-if="hasNextChallenge">Próximo Desafio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentPage: 'home',
      activeTab: 'current',
      selectedMonth: '',
      searchTerm: '',
      sortBy: 'date',
      userPoints: 120,
      monthsToShow: 2,
      showChallengeModal: false,
      selectedChallenge: null,
      showToast: false,
      challengeComment: '',
      favorites: [],
      completed: [],
      challengeTips: {
        1: ["Use baldes ou potes reciclados para a composteira.", "Evite colocar carnes ou laticínios."],
        2: ["Garrafas PET de 2L funcionam bem.", "Fixe bem a estrutura na parede."],
        3: ["Use um tambor limpo para armazenar a água.", "Cubra para evitar mosquitos."],
        // ...adicione dicas para outros desafios...
      },
      defaultTips: ["Leia atentamente o passo a passo.", "Peça ajuda de um adulto se necessário.", "Registre todo o processo com fotos ou vídeos."],
      challenges: [
        // Janeiro
        {
          id: 1,
          title: "Composteira Caseira",
          description: "Transforme resíduos orgânicos em adubo natural com uma composteira simples usando materiais recicláveis.",
          points: 50,
          deadline: "07/01",
          time: "2 horas",
          month: "Janeiro",
          week: "Semana 1",
          category: "Resíduos"
        },
        {
          id: 2,
          title: "Horta Vertical",
          description: "Crie uma horta vertical utilizando garrafas PET e cultive temperos ou pequenos vegetais.",
          points: 40,
          deadline: "14/01",
          time: "3 horas",
          month: "Janeiro",
          week: "Semana 2",
          category: "Alimentação"
        },
        {
          id: 3,
          title: "Captação de Água da Chuva",
          description: "Desenvolva um sistema simples para captação e armazenamento de água da chuva.",
          points: 45,
          deadline: "21/01",
          time: "4 horas",
          month: "Janeiro",
          week: "Semana 3",
          category: "Água"
        },
        {
          id: 4,
          title: "Auditoria de Energia",
          description: "Faça uma auditoria de consumo de energia em casa e proponha melhorias para economia.",
          points: 35,
          deadline: "28/01",
          time: "2 horas",
          month: "Janeiro",
          week: "Semana 4",
          category: "Energia"
        },
        // Fevereiro
        {
          id: 5,
          title: "Mapa de Áreas Verdes",
          description: "Crie um mapa das áreas verdes do seu bairro e identifique locais para novos plantios.",
          points: 40,
          deadline: "04/02",
          time: "3 horas",
          month: "Fevereiro",
          week: "Semana 5",
          category: "Biodiversidade"
        },
        {
          id: 6,
          title: "Sabão Ecológico",
          description: "Produza sabão ecológico utilizando óleo de cozinha usado e outros ingredientes naturais.",
          points: 35,
          deadline: "11/02",
          time: "2 horas",
          month: "Fevereiro",
          week: "Semana 6",
          category: "Resíduos"
        },
        {
          id: 7,
          title: "Campanha de Conscientização",
          description: "Crie uma campanha de conscientização sobre o uso de plásticos descartáveis na escola.",
          points: 45,
          deadline: "18/02",
          time: "4 horas",
          month: "Fevereiro",
          week: "Semana 7",
          category: "Educação"
        },
        {
          id: 8,
          title: "Plantio de Árvore Nativa",
          description: "Plante uma árvore nativa em um espaço público com autorização adequada.",
          points: 50,
          deadline: "25/02",
          time: "3 horas",
          month: "Fevereiro",
          week: "Semana 8",
          category: "Biodiversidade"
        },
        // Março
        {
          id: 9,
          title: "Feira de Trocas",
          description: "Organize uma feira de trocas de itens usados na escola ou comunidade.",
          points: 45,
          deadline: "04/03",
          time: "5 horas",
          month: "Março",
          week: "Semana 9",
          category: "Consumo"
        },
        {
          id: 10,
          title: "Ecopontos no Bairro",
          description: "Mapeie e divulgue os ecopontos de coleta seletiva do seu bairro.",
          points: 35,
          deadline: "11/03",
          time: "3 horas",
          month: "Março",
          week: "Semana 10",
          category: "Resíduos"
        },
        {
          id: 11,
          title: "Jardim de Polinizadores",
          description: "Crie um pequeno jardim para atrair polinizadores como abelhas e borboletas.",
          points: 40,
          deadline: "18/03",
          time: "4 horas",
          month: "Março",
          week: "Semana 11",
          category: "Biodiversidade"
        },
        {
          id: 12,
          title: "Economia de Água",
          description: "Implemente dispositivos caseiros para economia de água em torneiras e chuveiros.",
          points: 35,
          deadline: "25/03",
          time: "2 horas",
          month: "Março",
          week: "Semana 12",
          category: "Água"
        },
        // Abril
        {
          id: 13,
          title: "Lixo Zero por Um Dia",
          description: "Desafio de passar um dia inteiro sem produzir lixo não reciclável.",
          points: 40,
          deadline: "01/04",
          time: "24 horas",
          month: "Abril",
          week: "Semana 13",
          category: "Resíduos"
        },
        {
          id: 14,
          title: "Reparo de Objetos",
          description: "Conserte algo quebrado em vez de substituí-lo por um novo.",
          points: 35,
          deadline: "08/04",
          time: "3 horas",
          month: "Abril",
          week: "Semana 14",
          category: "Consumo"
        },
        {
          id: 15,
          title: "Mutirão de Limpeza",
          description: "Organize um mutirão de limpeza em uma praça ou área pública.",
          points: 50,
          deadline: "15/04",
          time: "4 horas",
          month: "Abril",
          week: "Semana 15",
          category: "Comunidade"
        },
        {
          id: 16,
          title: "Diário de Consumo",
          description: "Mantenha um diário de consumo por uma semana e analise padrões de desperdício.",
          points: 35,
          deadline: "22/04",
          time: "7 dias",
          month: "Abril",
          week: "Semana 16",
          category: "Consumo"
        }
      ]
    }
  },
  computed: {
    availableMonths() {
      return [...new Set(this.challenges.map(c => c.month))]
    },
    displayedMonths() {
      if (this.selectedMonth) {
        return [this.selectedMonth]
      }
      return this.availableMonths.slice(0, this.monthsToShow)
    },
    filteredChallenges() {
      let filtered = [...this.challenges]
      
      if (this.selectedMonth) {
        filtered = filtered.filter(c => c.month === this.selectedMonth)
      }
      
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase()
        filtered = filtered.filter(c => 
          c.title.toLowerCase().includes(term) ||
          c.description.toLowerCase().includes(term) ||
          c.category.toLowerCase().includes(term)
        )
      }
      
      // Sort challenges
      if (this.sortBy === 'points') {
        filtered.sort((a, b) => b.points - a.points)
      } else if (this.sortBy === 'time') {
        filtered.sort((a, b) => a.time.localeCompare(b.time))
      }
      
      return filtered
    },
    progressPercent() {
      const total = this.challenges.length;
      const completed = this.completed.length;
      return total > 0 ? Math.round((completed / total) * 100) : 0;
    },
    completedChallenges() {
      return this.challenges.filter(challenge => this.completed.includes(challenge.id));
    },
    hasNextChallenge() {
      if (!this.selectedChallenge) return false;
      const currentIndex = this.challenges.findIndex(challenge => challenge.id === this.selectedChallenge.id);
      return currentIndex !== -1 && currentIndex < this.challenges.length - 1;
    }
  },
  methods: {
    getFilteredChallenges(month) {
      return this.filteredChallenges.filter(c => c.month === month)
    },
    loadMoreMonths() {
      this.monthsToShow = Math.min(this.monthsToShow + 2, this.availableMonths.length)
    },
    viewChallenge(challenge) {
      this.selectedChallenge = challenge;
      this.showChallengeModal = true;
    },
    closeChallengeModal() {
      this.showChallengeModal = false;
      this.selectedChallenge = null;
    },
    isCompleted(challengeId) {
      return this.completed.includes(challengeId);
    },
    isFavorite(challengeId) {
      return this.favorites.includes(challengeId);
    },
    toggleFavorite(challengeId) {
      if (this.isFavorite(challengeId)) {
        this.favorites = this.favorites.filter(id => id !== challengeId);
      } else {
        this.favorites.push(challengeId);
      }
    },
    submitEvidence() {
      if (this.selectedChallenge && !this.isCompleted(this.selectedChallenge.id)) {
        this.completed.push(this.selectedChallenge.id);
      }
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
        this.closeChallengeModal();
      }, 2000);
    },
    nextChallenge() {
      if (!this.selectedChallenge) return;
      const currentIndex = this.challenges.findIndex(challenge => challenge.id === this.selectedChallenge.id);
      if (currentIndex !== -1 && currentIndex < this.challenges.length - 1) {
        this.selectedChallenge = this.challenges[currentIndex + 1];
        this.challengeComment = '';
      }
    },
    mounted() {
      // Corrige problemas de navegação dos botões
      document.querySelectorAll('a.nav-link, a.text-decoration-none').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
      });
    }
  }
}
</script>

<style scoped>
.bg-green-custom {
  background-color: #16a34a;
}

.text-green-custom {
  color: #16a34a;
}

.btn-green-custom {
  background-color: #16a34a;
  border-color: #16a34a;
  color: white;
}

.btn-green-custom:hover {
  background-color: #15803d;
  border-color: #15803d;
  color: white;
}

.border-green-custom {
  border-color: #16a34a !important;
}

.bg-green-light {
  background-color: #f0fdf4;
}

.hero-section {
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  min-height: 60vh;
}

.card-hover:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.icon-circle {
  width: 80px;
  height: 80px;
}

.hero-icon-container {
  position: relative;
  display: inline-block;
}

.hero-icon {
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.9);
  animation: float 3s ease-in-out infinite;
}

.hero-icons-small {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
}

.hero-icons-small i {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

.hero-icons-small i:nth-child(2) {
  animation-delay: 0.5s;
}

.hero-icons-small i:nth-child(3) {
  animation-delay: 1s;
}

.hero-icons-small i:nth-child(4) {
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.navbar-toggler {
  border-color: rgba(255,255,255,0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-tabs .nav-link.active {
  background-color: #16a34a;
  border-color: #16a34a;
  color: white;
}

.nav-tabs .nav-link {
  color: #16a34a;
}

.nav-tabs .nav-link:hover {
  border-color: #16a34a;
  color: #15803d;
}

.toast-feedback {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 2000;
  min-width: 250px;
  background: #16a34a;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: fadeInOut 2s;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}

.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
}

.completed-badge {
  background: #15803d;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 6px;
  padding: 0.2rem 0.7rem;
  margin-left: 0.5rem;
}

.card.completed {
  opacity: 0.7;
  border: 2px solid #15803d;
}

.card.favorite {
  border: 2px solid #fbbf24;
  box-shadow: 0 0 0 2px #fbbf24;
}

.favorite-star {
  color: #fbbf24;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 0.5rem;
}

.progress-bar {
  height: 1.2rem;
  background: #f0fdf4;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-bar-inner {
  height: 100%;
  background: #16a34a;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2rem;
  border-radius: 8px;
  transition: width 0.5s;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;
  }
  
  .display-4 {
    font-size: 2rem;
  }
  
  .display-6 {
    font-size: 1.5rem;
  }
  
  .hero-icon {
    font-size: 4rem;
  }
  
  .hero-icons-small i {
    font-size: 1rem;
  }
}
</style>