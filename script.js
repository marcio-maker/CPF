// script.js

/* Demo app logic: single-file SPA behavior */

/* --- sample data (adaptado ao curso) --- */

// SIMULAÇÃO: Links de vídeos (usando IDs públicos e seguros para simular vídeos diferentes)
const VIDEO_IDS = [
  "hB1UNt93FN8", // Vídeo 1 (Placeholder)
  "vehTS91mObM", // Vídeo 2 (Placeholder)
  "hB1UNt93FN8", // Vídeo 3 (Placeholder)
  "hB1UNt93FN8", // Vídeo 4 (Placeholder)
  "hB1UNt93FN8", // Vídeo 5 (Placeholder)
];

// Função para gerar um URL de vídeo do YouTube simulado
function getVideoUrl(index) {
  const videoId = VIDEO_IDS[index % VIDEO_IDS.length];
  return `https://www.youtube.com/embed/${videoId}`;
}

const COURSE = {
  title: "Conexão Pais e Filhos",
  modules: [
    {
      id: 0,
      title: "Módulo 1: Tranquilizando os Pais",
      description: "Acalmando preocupações comuns dos pais e fortalecendo a base familiar.",
      // Imagem otimizada com base64 reduzido
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNEE5MEUyIi8+Cjx0ZXh0IHg9IjQwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Rm9jbzwvdGV4dD4KPC9zdmc+",
      aulas: [
        { id: 0, title: "Aula 1: Entendendo as Preocupações", video: getVideoUrl(0), quizId: 0 },
        { id: 1, title: "Aula 2: Comunicação Familiar", video: getVideoUrl(1), quizId: null },
        { id: 2, title: "Aula 3: Gestão de Conflitos", video: getVideoUrl(2), quizId: null },
        { id: 3, title: "Aula 4: Estabelecendo Limites", video: getVideoUrl(3), quizId: 1 },
        { id: 4, title: "Aula 5: O Poder do Exemplo", video: getVideoUrl(4), quizId: null },
        { id: 5, title: "Aula 6: A Importância do Tempo Juntos", video: getVideoUrl(0), quizId: null },
        { id: 6, title: "Aula 7: Lidando com a Tecnologia", video: getVideoUrl(1), quizId: 2 },
        { id: 7, title: "Aula 8: Respeito Mútuo", video: getVideoUrl(2), quizId: null }
      ]
    },
    {
      id: 1,
      title: "Módulo 2: Conectando com o Adolescente",
      description: "Técnicas avançadas de escuta, empatia e validação de sentimentos complexos.",
      // Imagem otimizada com base64 reduzido
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjOWI1OWI2Ii8+Cjx0ZXh0IHg9IjQwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+Q29uZXjDp288L3RleHQ+Cjwvc3ZnPg==",
      aulas: [
        { id: 0, title: "Aula 9: A Arte de Ouvir", video: getVideoUrl(3), quizId: null },
        { id: 1, title: "Aula 10: Validando Sentimentos", video: getVideoUrl(4), quizId: null },
        { id: 2, title: "Aula 11: Conversas Difíceis", video: getVideoUrl(0), quizId: 3 },
        { id: 3, title: "Aula 12: Elogio Efetivo", video: getVideoUrl(1), quizId: null },
        { id: 4, title: "Aula 13: O Mundo Deles", video: getVideoUrl(2), quizId: null },
        { id: 5, title: "Aula 14: Espaço e Confiança", video: getVideoUrl(3), quizId: null },
        { id: 6, title: "Aula 15: Entendendo a Rebeldia", video: getVideoUrl(4), quizId: 4 },
        { id: 7, title: "Aula 16: O Papel do Humor", video: getVideoUrl(0), quizId: null }
      ]
    },
    {
      id: 2,
      title: "Módulo 3: Ferramentas de Impacto",
      description: "Estratégias práticas e ferramentas validadas para mudança de comportamento imediata.",
      // Imagem otimizada com base64 reduzido
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDBDODUzIi8+Cjx0ZXh0IHg9IjQwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RmVycmFtZW50YXM8L3RleHQ+Cjwvc3ZnPg==",
      aulas: [
        { id: 0, title: "Aula 17: O Diário da Gratidão", video: getVideoUrl(1), quizId: null },
        { id: 1, title: "Aula 18: Contratos Familiares", video: getVideoUrl(2), quizId: 5 },
        { id: 2, title: "Aula 19: A Roda das Emoções", video: getVideoUrl(3), quizId: null },
        { id: 3, title: "Aula 20: Reuniões de Família", video: getVideoUrl(4), quizId: null },
        { id: 4, title: "Aula 21: Reforço Positivo", video: getVideoUrl(0), quizId: null },
        { id: 5, title: "Aula 22: Consequências Naturais", video: getVideoUrl(1), quizId: 6 },
        { id: 6, title: "Aula 23: O Poder da Escolha", video: getVideoUrl(2), quizId: null },
        { id: 7, title: "Aula 24: Rotinas Saudáveis", video: getVideoUrl(3), quizId: null }
      ]
    },
    {
      id: 3,
      title: "Módulo 4: Crescendo Juntos",
      description: "Visão de longo prazo, definindo valores e construindo um legado familiar duradouro.",
      // Imagem otimizada com base64 reduzido
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkZDMTA3Ii8+Cjx0ZXh0IHg9IjQwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5MZWdhZG88L3RleHQ+Cjwvc3ZnPg==",
      aulas: [
        { id: 0, title: "Aula 25: Definindo Valores", video: getVideoUrl(4), quizId: null },
        { id: 1, title: "Aula 26: Sonhos e Metas", video: getVideoUrl(0), quizId: null },
        { id: 2, title: "Aula 27: Legado Familiar", video: getVideoUrl(1), quizId: 7 },
        { id: 3, title: "Aula 28: A Jornada Continua", video: getVideoUrl(2), quizId: null },
        { id: 4, title: "Aula 29: O Que Fazer Agora", video: getVideoUrl(3), quizId: null },
        { id: 5, title: "Aula 30: Celebrando Conquistas", video: getVideoUrl(4), quizId: null },
        { id: 6, title: "Aula 31: Mais Recursos", video: getVideoUrl(0), quizId: null },
        { id: 7, title: "Aula 32: Mensagem Final", video: getVideoUrl(1), quizId: null }
      ]
    }
  ]
};

const QUIZ = [
  {
    id: 0,
    question: "Qual o primeiro passo para tranquilizar as preocupações parentais?",
    options: ["Buscar a causa na criança.", "Entender suas próprias emoções.", "Ignorar o problema.", "Impor regras mais rígidas."],
    answer: 1, // "Entender suas próprias emoções."
    explanation: "A tranquilidade começa em você. Entender e gerenciar suas próprias emoções é crucial para abordar a situação de forma calma e eficaz."
  },
  {
    id: 1,
    question: "Qual o pilar mais importante para estabelecer limites eficazes?",
    options: ["Ameaças.", "Punições severas.", "Consistência e amor.", "Flexibilidade total."],
    answer: 2, // "Consistência e amor."
    explanation: "Limites funcionam quando são aplicados de forma consistente, dentro de um ambiente de amor e respeito mútuo. Ameaças e punições severas tendem a gerar ressentimento."
  },
  {
    id: 2,
    question: "Como os pais podem ser um bom 'exemplo' no uso da tecnologia?",
    options: ["Proibir o uso completamente.", "Usar sem limites.", "Ter momentos de 'desconexão' familiar.", "Monitorar cada passo do filho."],
    answer: 2, // "Ter momentos de 'desconexão' familiar."
    explanation: "O exemplo é fundamental. Mostrar que a família valoriza momentos offline e ter regras para o próprio uso da tecnologia modela o comportamento desejado para os filhos."
  },
  {
    id: 3,
    question: "O que significa 'validar sentimentos' de um adolescente?",
    options: ["Concordar com tudo que ele diz.", "Minimizar o problema dele.", "Reconhecer e aceitar a emoção, sem julgamento.", "Dar a solução imediatamente."],
    answer: 2, // "Reconhecer e aceitar a emoção, sem julgamento."
    explanation: "Validar não é concordar, é reconhecer a legitimidade da emoção. Dizer 'Eu entendo que você está chateado' abre o caminho para a conversa."
  },
  {
    id: 4,
    question: "Qual a melhor forma de responder à 'rebeldia' adolescente?",
    options: ["Aumentar o tom de voz.", "Ignorar a atitude.", "Buscar a causa por trás do comportamento.", "Dar um castigo prolongado."],
    answer: 2, // "Buscar a causa por trás do comportamento."
    explanation: "A rebeldia é frequentemente um sintoma de algo mais profundo. Entender a necessidade ou a frustração subjacente é o primeiro passo para resolver o conflito."
  },
  {
    id: 5,
    question: "O que são 'Contratos Familiares'?",
    options: ["Documentos legais e notariais.", "Regras impostas pelos pais.", "Acordos mútuos sobre regras e consequências.", "Uma lista de tarefas domésticas."],
    answer: 2, // "Acordos mútuos sobre regras e consequências."
    explanation: "Contratos familiares são combinados em conjunto, dando ao adolescente um senso de participação e responsabilidade, o que aumenta a chance de cumprimento."
  },
  {
    id: 6,
    question: "Qual a diferença entre 'Punição' e 'Consequência Natural'?",
    options: ["Punição é imediata; Consequência é tardia.", "Punição é vingativa; Consequência é educativa e lógica.", "Não há diferença.", "Consequência é mais severa que punição."],
    answer: 1, // "Punição é vingativa; Consequência é educativa e lógica."
    explanation: "Consequências naturais estão ligadas diretamente ao ato (ex: quebrou o brinquedo, tem que consertar/substituir). Punição é um castigo imposto que pode não ter relação lógica e ser vista como vingança, diminuindo o aprendizado."
  },
  {
    id: 7,
    question: "O que o 'Legado Familiar' representa, segundo o curso?",
    options: ["A herança material.", "Os valores e princípios transmitidos.", "O número de diplomas.", "A reputação social da família."],
    answer: 1, // "Os valores e princípios transmitidos."
    explanation: "O legado familiar mais importante não é o financeiro, mas sim os valores, princípios e a força dos laços que são passados de uma geração para a outra."
  }
];

/* --- App State Management --- */
// Gerenciamento de estado com persistência via localStorage para uma experiência robusta
const state = {
  currentScreen: localStorage.getItem('lastScreen') || 'signup',
  moduleIndex: parseInt(localStorage.getItem('moduleIndex')) || 0,
  aulaIndex: parseInt(localStorage.getItem('aulaIndex')) || 0,
  quizStep: 0, // 0: question, 1: answer/explanation
  quizCorrect: 0,
  quizTotal: 0,
  // Estado das aulas concluídas e marcadas
  completedAulas: JSON.parse(localStorage.getItem('completedAulas')) || {},
  bookmarkedAulas: JSON.parse(localStorage.getItem('bookmarkedAulas')) || [],
  account: {
    name: localStorage.getItem('accountName') || 'Novo Usuário',
    email: localStorage.getItem('accountEmail') || 'seu@email.com',
    notifications: JSON.parse(localStorage.getItem('notifications')) ?? true,
    reminders: JSON.parse(localStorage.getItem('reminders')) ?? false,
    darkMode: JSON.parse(localStorage.getItem('darkMode')) ?? false
  }
};

/* --- Persistance and Utility Functions --- */

// Salva o estado atual (útil para progresso e navegação)
function saveState() {
  localStorage.setItem('lastScreen', state.currentScreen);
  localStorage.setItem('moduleIndex', state.moduleIndex);
  localStorage.setItem('aulaIndex', state.aulaIndex);
  localStorage.setItem('completedAulas', JSON.stringify(state.completedAulas));
  localStorage.setItem('bookmarkedAulas', JSON.stringify(state.bookmarkedAulas));
  localStorage.setItem('darkMode', JSON.stringify(state.account.darkMode));
}

// Retorna o progresso de um módulo em aulas concluídas / total
function getModuleProgress(moduleId) {
  const moduleData = COURSE.modules[moduleId];
  let completed = 0;
  moduleData.aulas.forEach(aula => {
    if (state.completedAulas[`M${moduleId}-A${aula.id}`]) {
      completed++;
    }
  });
  return { completed, total: moduleData.aulas.length };
}

// Retorna o progresso total do curso em porcentagem
function getTotalProgress() {
  let completedCount = Object.keys(state.completedAulas).filter(key => state.completedAulas[key]).length;
  let totalCount = COURSE.modules.reduce((acc, mod) => acc + mod.aulas.length, 0);
  let percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  return { completedCount, totalCount, percentage };
}

// Exibe um toast (pequena notificação)
// Substitua a função toast no seu script.js

/* Toast Notification Melhorado */
function toast(message, type = 'default', duration = 3000) {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = message;
  container.appendChild(t);

  // Força um reflow para a animação funcionar
  void t.offsetWidth;

  // Mostra o toast com animação
  t.classList.add('show');

  // Remove o toast após a duração
  setTimeout(() => {
    t.classList.remove('show');
    t.classList.add('hide');

    // Remove do DOM após a animação
    t.addEventListener('transitionend', () => {
      if (t.parentNode === container) {
        container.removeChild(t);
      }
    });
  }, duration);
}

// Exemplos de uso:
// toast('Mensagem normal') - toast padrão
// toast('Sucesso!', 'success') - toast de sucesso
// toast('Erro!', 'error') - toast de erro
// toast('Aviso!', 'warning') - toast de aviso
// toast('Informação', 'info') - toast informativo

// Verifica se a aula está desbloqueada (depende da conclusão da aula anterior)
function isAulaUnlocked(moduleId, aulaId) {
  if (moduleId === 0 && aulaId === 0) return true;

  const previousModule = moduleId;
  const previousAula = aulaId - 1;

  if (previousAula >= 0) {
    // Mesma módulo, aula anterior
    return state.completedAulas[`M${previousModule}-A${previousAula}`];
  } else if (moduleId > 0) {
    // Módulo anterior, última aula
    const lastAulaIdOfPreviousModule = COURSE.modules[moduleId - 1].aulas.length - 1;
    return state.completedAulas[`M${moduleId - 1}-A${lastAulaIdOfPreviousModule}`];
  }
  return false;
}

// Verifica se o módulo está desbloqueado (depende da conclusão do módulo anterior)
function isModuleUnlocked(moduleId) {
  if (moduleId === 0) return true;
  const previousModuleId = moduleId - 1;
  const previousModule = COURSE.modules[previousModuleId];
  if (previousModule) {
    const lastAulaId = previousModule.aulas.length - 1;
    return state.completedAulas[`M${previousModuleId}-A${lastAulaId}`];
  }
  return false;
}

/* --- UI Functions --- */

// Alterna o menu
function toggleMenu() {
  const menu = document.getElementById('menu-dropdown');
  menu.classList.toggle('active');
}

// Gerencia a navegação entre as telas (SPA)
function nav(screen, moduleId = null, aulaId = null) {
  // Esconde todas as telas e o menu
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById('menu-dropdown').classList.remove('active');

  // Determina a tela atual
  const screenId = `screen-${screen}`;
  const currentScreenElement = document.getElementById(screenId);
  if (currentScreenElement) {
    currentScreenElement.style.display = 'block';
    state.currentScreen = screen;
  } else {
    // Fallback se a tela não existir
    document.getElementById('screen-home').style.display = 'block';
    state.currentScreen = 'home';
  }

  // Lógica específica para cada tela
  switch (screen) {
    case 'home':
      renderModules();
      break;
    case 'aulas':
      if (moduleId !== null) state.moduleIndex = moduleId;
      renderAulas(state.moduleIndex);
      break;
    case 'aula':
      if (moduleId !== null) state.moduleIndex = moduleId;
      if (aulaId !== null) state.aulaIndex = aulaId;
      renderAula(state.moduleIndex, state.aulaIndex);
      break;
    case 'complete':
      renderCompleteScreen();
      break;
    case 'profile':
      renderProfile();
      break;
    case 'account':
      loadAccountSettings();
      break;
  }

  updateFooterActiveButton(state.currentScreen);
  saveState();
}

// Renderiza a lista de módulos
function renderModules() {
  const modulesContainer = document.getElementById('modules');
  modulesContainer.innerHTML = '';

  COURSE.modules.forEach((mod, modIdx) => {
    const isLocked = !isModuleUnlocked(modIdx);
    const progress = getModuleProgress(modIdx);
    const progressText = `${progress.completed} / ${progress.total} aulas`;

    const html = `
      <div class="module ${isLocked ? 'locked' : ''}" onclick="${isLocked ? 'toast(\'Complete o módulo anterior para desbloquear.\')' : `nav('aulas', ${modIdx})`}">
        <img class="module-img" src="${mod.img}" alt="Módulo ${mod.id + 1}">
        <div class="module-info">
          <div class="muted">MÓDULO ${mod.id + 1}</div>
          <h3>${mod.title}</h3>
          <p>${mod.description}</p>
          <div class="module-progress">
            <progress value="${progress.completed}" max="${progress.total}"></progress>
            <span class="progress-text">${progressText}</span>
          </div>
        </div>
        <div class="module-status">${isLocked ? '🔒' : '✅'}</div>
      </div>
    `;
    modulesContainer.innerHTML += html;
  });
}

// Renderiza a lista de aulas de um módulo
function renderAulas(moduleId) {
  const moduleData = COURSE.modules[moduleId];
  const aulasContainer = document.getElementById('aulas-list');
  const moduleTitle = document.getElementById('module-title');
  const moduleProgress = document.getElementById('module-progress');

  moduleTitle.textContent = moduleData.title;
  const progress = getModuleProgress(moduleId);
  moduleProgress.textContent = `${progress.completed} / ${progress.total}`;

  aulasContainer.innerHTML = '';

  moduleData.aulas.forEach((aula, aulaIdx) => {
    const aulaKey = `M${moduleId}-A${aula.id}`;
    const isCompleted = state.completedAulas[aulaKey] || false;
    const isBookmarked = state.bookmarkedAulas.includes(aulaKey);
    const isLocked = !isAulaUnlocked(moduleId, aulaIdx);

    // Extrai o ID do vídeo para gerar a thumbnail
    const videoId = aula.video.split('/').pop();

    const html = `
      <div class="aula ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
           onclick="${isLocked ? 'toast(\'Complete a aula anterior para desbloquear.\')' : `nav('aula', ${moduleId}, ${aulaIdx})`}">
        <div class="aula-img-wrap">
          <img class="aula-img" src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="Aula ${aula.id + 1}">
        </div>
        <div class="aula-info">
          <div class="muted">AULA ${aula.id + 1}</div>
          <h3>${aula.title}</h3>
          <p>${aula.quizId !== null ? 'Com Quiz' : 'Sem Quiz'} • Até 8 min</p>
        </div>
        <div class="aula-status">
          ${isLocked ? '🔒' : isCompleted ? '✅' : isBookmarked ? '🔖' : '▶'}
        </div>
      </div>
    `;
    aulasContainer.innerHTML += html;
  });
}

// Renderiza a tela de aula (video player e quiz)
function renderAula(moduleId, aulaId) {
  const moduleData = COURSE.modules[moduleId];
  const aulaData = moduleData.aulas[aulaId];
  const aulaKey = `M${moduleId}-A${aulaData.id}`;

  document.getElementById('aula-title').textContent = aulaData.title;
  document.getElementById('aula-video').src = aulaData.video;

  // Atualiza o estado para a aula atual
  state.moduleIndex = moduleId;
  state.aulaIndex = aulaId;

  // Lógica para marcar como concluída
  document.getElementById('mark-complete-btn').onclick = () => markAulaComplete(moduleId, aulaId);
  const markCompleteBtn = document.getElementById('mark-complete-btn');
  if (state.completedAulas[aulaKey]) {
    markCompleteBtn.textContent = '✅ Aula Concluída';
    markCompleteBtn.disabled = true;
    markCompleteBtn.classList.remove('btn');
    markCompleteBtn.classList.add('btn-disabled');
  } else {
    markCompleteBtn.textContent = 'Marcar como Concluída';
    markCompleteBtn.disabled = false;
    markCompleteBtn.classList.add('btn');
    markCompleteBtn.classList.remove('btn-disabled');
  }

  // Botão de bookmark
  const bookmarkBtn = document.getElementById('bookmark-btn');
  const isBookmarked = state.bookmarkedAulas.includes(aulaKey);
  bookmarkBtn.textContent = isBookmarked ? '🔖 Aula Marcada' : '🔖 Marcar Aula';
  bookmarkBtn.onclick = () => toggleBookmark(moduleId, aulaId);

  // Renderiza a área do quiz
  renderQuizArea(aulaData.quizId);
}

// Marca a aula como concluída
function markAulaComplete(moduleId, aulaId) {
  const aulaData = COURSE.modules[moduleId].aulas[aulaId];
  const aulaKey = `M${moduleId}-A${aulaData.id}`;

  if (!state.completedAulas[aulaKey]) {
    state.completedAulas[aulaKey] = true;
    saveState();
    toast('Aula concluída! 🎉');

    // Atualiza a UI do botão
    const markCompleteBtn = document.getElementById('mark-complete-btn');
    markCompleteBtn.textContent = '✅ Aula Concluída';
    markCompleteBtn.disabled = true;
    markCompleteBtn.classList.remove('btn');
    markCompleteBtn.classList.add('btn-disabled');

    // Navega para a tela de resumo de conclusão (opcional)
    // nav('complete');
  }
}

// Alterna o estado de bookmark
function toggleBookmark(moduleId, aulaId) {
  const aulaData = COURSE.modules[moduleId].aulas[aulaId];
  const aulaKey = `M${moduleId}-A${aulaData.id}`;
  const index = state.bookmarkedAulas.indexOf(aulaKey);

  if (index > -1) {
    state.bookmarkedAulas.splice(index, 1);
    toast('Marcação removida!');
  } else {
    state.bookmarkedAulas.push(aulaKey);
    toast('Aula marcada para rever! 🔖');
  }

  saveState();

  // Atualiza a UI do botão
  const bookmarkBtn = document.getElementById('bookmark-btn');
  const isBookmarked = state.bookmarkedAulas.includes(aulaKey);
  bookmarkBtn.textContent = isBookmarked ? '🔖 Aula Marcada' : '🔖 Marcar Aula';
}

/* --- Quiz Logic --- */

// Renderiza a área do quiz
function renderQuizArea(quizId) {
  const quizArea = document.getElementById('quiz-area');
  quizArea.innerHTML = '';

  if (quizId === null) {
    quizArea.style.display = 'none';
    return;
  }

  quizArea.style.display = 'block';
  const quizData = QUIZ.find(q => q.id === quizId);

  // Reseta o estado do quiz para esta aula
  state.quizStep = 0;
  state.quizCorrect = 0; // Para quizzes de uma única pergunta
  state.quizTotal = 1;

  renderQuiz(quizData);
}

// Função de renderização principal do Quiz
function renderQuiz(quizData) {
  const quizArea = document.getElementById('quiz-area');
  const currentQuiz = quizData;

  if (state.quizStep === 0) {
    // 1. Mostrar a pergunta e opções
    let optionsHtml = currentQuiz.options.map((opt, idx) => `
      <div class="option" data-index="${idx}" onclick="handleQuizAnswer(this, ${currentQuiz.id}, ${idx})">
        ${opt}
      </div>
    `).join('');

    quizArea.innerHTML = `
      <div class="quiz-step-0">
        <div class="muted">Quiz da Aula</div>
        <h3 style="margin-top:4px">${currentQuiz.question}</h3>
        <div class="options-grid" id="options-grid">
          ${optionsHtml}
        </div>
        <button class="btn btn-disabled" id="next-quiz-btn" style="display:none;margin-top:12px">Próximo</button>
      </div>
    `;

  } else if (state.quizStep === 1) {
    // 2. Mostrar a explicação e permitir avançar
    const nextAulaBtn = `
        <button class="btn" style="margin-top:12px" onclick="nav('aulas')">Voltar para Aulas</button>
    `;

    quizArea.innerHTML = `
      <div class="quiz-step-1">
        <div class="muted">Explicação</div>
        <div class="explain card">
          <p>${currentQuiz.explanation}</p>
        </div>
        <p style="margin-top:12px;font-weight:600;color:var(--success)">Resposta Correta! Continue o aprendizado.</p>
        ${nextAulaBtn}
      </div>
    `;
    markAulaComplete(state.moduleIndex, state.aulaIndex);
  }
}

// Lida com a resposta do usuário no quiz
function handleQuizAnswer(selectedOptionElement, quizId, selectedIndex) {
  const quizData = QUIZ.find(q => q.id === quizId);
  const correctIndex = quizData.answer;
  const optionsGrid = document.getElementById('options-grid');
  const allOptions = optionsGrid.querySelectorAll('.option');

  // Desativa todas as opções após a primeira escolha
  allOptions.forEach(opt => opt.onclick = null);

  if (selectedIndex === correctIndex) {
    selectedOptionElement.classList.add('correct');
    toast('Resposta Correta! ✅');
    state.quizCorrect++;
  } else {
    selectedOptionElement.classList.add('wrong');
    allOptions[correctIndex].classList.add('correct');
    toast('Resposta Incorreta. Reveja o conteúdo. 😔');
  }

  // Avança para a explicação
  state.quizStep = 1;
  setTimeout(() => renderQuiz(quizData), 1500); // Espera um pouco para mostrar o resultado visual
}

/* --- Profile and Settings Logic --- */

// Renderiza a tela de Perfil
function renderProfile() {
  const profileContainer = document.getElementById('profile-content');
  const { name, email } = state.account;
  const { completedCount, totalCount, percentage } = getTotalProgress();

  // Aulas Marcadas
  const bookmarksList = state.bookmarkedAulas.map(key => {
    const [modKey, aulaKey] = key.split('-');
    const modId = parseInt(modKey.replace('M', ''));
    const aulaId = parseInt(aulaKey.replace('A', ''));
    const aula = COURSE.modules[modId].aulas.find(a => a.id === aulaId);
    if (!aula) return '';

    return `
      <div class="menu-item" onclick="nav('aula', ${modId}, ${aulaId})">
        <div class="menu-icon">🔖</div>
        <div class="menu-text">
          <div style="font-weight:600">${aula.title}</div>
          <div class="muted" style="font-size:12px">${COURSE.modules[modId].title}</div>
        </div>
        <div class="menu-action">▶</div>
      </div>
    `;
  }).join('');

  const modeIcon = state.account.darkMode ? '🌙' : '☀️';
  const modeText = state.account.darkMode ? 'Modo Escuro' : 'Modo Claro';
  const modeStatus = state.account.darkMode ? 'ATIVO' : 'INATIVO';

  profileContainer.innerHTML = `
    <div style="text-align:center;margin-bottom:20px">
      <div class="avatar-option" style="width:80px;height:80px;font-size:36px;margin:0 auto 12px">👤</div>
      <h3 id="profile-name-display">${name}</h3>
      <p class="muted">${email}</p>
    </div>

    <div class="profile-stats card" style="display:flex;justify-content:space-around;margin-bottom:20px;text-align:center">
      <div>
        <div style="font-size:24px;font-weight:700;color:var(--primary)">${completedCount}</div>
        <div class="muted">Aulas Concluídas</div>
      </div>
      <div>
        <div style="font-size:24px;font-weight:700;color:var(--success)">${percentage}%</div>
        <div class="muted">Progresso Total</div>
      </div>
    </div>

    <h3 style="margin-top:0">Configurações e Ações</h3>
    <div class="menu-list">
      <div class="menu-item" onclick="nav('account')">
        <div class="menu-icon">⚙️</div>
        <div class="menu-text">Configurações da Conta</div>
        <div class="menu-action">›</div>
      </div>
      <div class="menu-item" onclick="toggleDarkMode()">
        <div class="menu-icon">${modeIcon}</div>
        <div class="menu-text">${modeText}</div>
        <div class="menu-action"><span id="dark-mode-status">${modeStatus}</span></div>
      </div>
      <div class="menu-item" onclick="toast('Logout em um app real!', 2000)">
        <div class="menu-icon">🚪</div>
        <div class="menu-text" style="color:var(--danger)">Sair da Conta</div>
        <div class="menu-action"></div>
      </div>
    </div>

    <h3 style="margin-top:20px">Aulas Marcadas</h3>
    <div class="menu-list" id="bookmarks-list">
      ${bookmarksList.length > 0 ? bookmarksList : '<p class="muted" style="text-align:center;padding:12px;background:var(--card);">Nenhuma aula marcada. Clique no 🔖 na tela da aula para marcar.</p>'}
    </div>
  `;
}

// Lida com o Toggle do Modo Dark/Light
function toggleDarkMode() {
  state.account.darkMode = !state.account.darkMode;
  document.body.classList.toggle('dark-mode', state.account.darkMode);
  saveState();

  const modeStatus = state.account.darkMode ? 'Modo Escuro' : 'Modo Claro';
  const modeIcon = state.account.darkMode ? '🌙' : '☀️';
  const statusText = state.account.darkMode ? 'ATIVO' : 'INATIVO';

  toast(`${modeStatus} ${state.account.darkMode ? 'ativado' : 'desativado'}!`);

  // Atualiza o status se estiver na tela de perfil
  if (state.currentScreen === 'profile') {
    renderProfile();
  }
}

// Inicializa o Dark Mode na abertura
if (state.account.darkMode) {
  document.body.classList.add('dark-mode');
}

// Carrega valores do state nos inputs da tela de conta
function loadAccountSettings() {
  document.getElementById('account-name').value = state.account.name;
  document.getElementById('account-email').value = state.account.email;
  document.getElementById('notifications-toggle').checked = state.account.notifications;
  document.getElementById('reminders-toggle').checked = state.account.reminders;
}

// Salva configurações
function saveAccountSettings() {
  const newName = document.getElementById('account-name').value;
  const newEmail = document.getElementById('account-email').value;

  if (newName.trim() && newEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    state.account.name = newName;
    state.account.email = newEmail;
    state.account.notifications = document.getElementById('notifications-toggle').checked;
    state.account.reminders = document.getElementById('reminders-toggle').checked;

    localStorage.setItem('accountName', state.account.name);
    localStorage.setItem('accountEmail', state.account.email);
    localStorage.setItem('notifications', JSON.stringify(state.account.notifications));
    localStorage.setItem('reminders', JSON.stringify(state.account.reminders));

    // Atualiza o display (se a tela de profile for renderizada em seguida)
    document.getElementById('profile-name-display').textContent = state.account.name;
    toast('Configurações salvas!');
    nav('profile');
  } else {
    toast('Por favor, insira um nome e email válidos.');
  }
}

/* Handle Notification Toggle */
function handleNotificationToggle(input) {
  state.account.notifications = input.checked;
  localStorage.setItem('notifications', JSON.stringify(state.account.notifications));
  toast(`Notificações por email ${input.checked ? 'ativadas' : 'desativadas'}!`);
}

/* Handle Reminder Toggle */
function handleReminderToggle(input) {
  state.account.reminders = input.checked;
  localStorage.setItem('reminders', JSON.stringify(state.account.reminders));
  toast(`Lembretes diários ${input.checked ? 'ativados' : 'desativados'}!`);
}

/* Update Footer Active Button */
function updateFooterActiveButton(screen) {
  const buttons = document.querySelectorAll('.footer-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const screenMap = { 'home': 0, 'benefits': 1, 'sentiments': 2, 'profile': 3 };

  // Determina a tela principal ativa para o footer
  let activeScreen = screen;
  if (screen === 'aulas' || screen === 'aula' || screen === 'complete' || screen === 'account') {
    activeScreen = 'home'; // Associa telas secundárias à tela de Módulos (Home)
  }

  const buttonIndex = screenMap[activeScreen];

  if (buttonIndex !== undefined) {
    buttons[buttonIndex].classList.add('active');
  }
}

// Renderiza a tela de conclusão (exemplo)
function renderCompleteScreen() {
  const { percentage } = getTotalProgress();
  document.getElementById('progress-num').textContent = `${percentage}%`;

  // Simula uma cor de progresso
  let color = percentage < 50 ? '#FFC107' : percentage < 90 ? '#4A90E2' : '#00C853';
  document.getElementById('progress-circle').style.borderColor = color;
  document.getElementById('progress-circle').style.color = color;

  // Simula ranking ou mensagem de incentivo
  let message = percentage < 50 ? 'Ótimo começo! Continue assim.' :
    percentage < 90 ? 'Quase lá! Falta pouco para completar.' :
      'Parabéns! Curso Concluído!';
  document.getElementById('progress-sub').textContent = message;
}

/* --- Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
  // Função dummy para o signup que salva no localStorage e navega para 'home'
  window.saveInitialAccount = function () {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    if (name && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      localStorage.setItem('accountName', name);
      localStorage.setItem('accountEmail', email);
      nav('home');
    } else {
      alert('Por favor, insira um nome e email válidos.');
    }
  }

  // Oculta todas as telas e mostra a tela inicial salva ou 'signup'

  // Verifica se o usuário já se cadastrou (tem um nome salvo)
  if (localStorage.getItem('accountName')) {
    // Se sim, navega para a tela salva ou Home
    nav(state.currentScreen === 'signup' ? 'home' : state.currentScreen);
  } else {
    // Se não, força a tela de signup
    nav('signup');
  }
});
// Adicione esta função ao seu script.js
function forceDarkTextContrast() {
  if (state.account.darkMode) {
    // Força textos escuros em elementos de input
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.style.color = '#1a1a1a';
      input.style.fontWeight = '500';
      input.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    });
    
    // Força textos em elementos interativos
    const interactiveElements = document.querySelectorAll('.menu-item, .signup-btn, .footer-btn');
    interactiveElements.forEach(el => {
      el.style.color = '#1a1a1a';
    });
  }
}

// Atualize a função toggleDarkMode
function toggleDarkMode() {
    state.account.darkMode = !state.account.darkMode;
    document.body.classList.toggle('dark-mode', state.account.darkMode);
    
    // Aplica os textos escuros
    if (state.account.darkMode) {
        forceDarkTextContrast();
    }
    
    saveState();
    
    const modeStatus = state.account.darkMode ? 'Modo Escuro' : 'Modo Claro';
    const modeIcon = state.account.darkMode ? '🌙' : '☀️';
    
    toast(`${modeStatus} ${state.account.darkMode ? 'ativado' : 'desativado'}!`);
    
    if (state.currentScreen === 'profile') {
        renderProfile();
    }
}

// Execute na inicialização
document.addEventListener('DOMContentLoaded', () => {
  if (state.account.darkMode) {
    setTimeout(forceDarkTextContrast, 100);
  }
});
