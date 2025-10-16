// script.js

/* Demo app logic: single-file SPA behavior */

/* --- sample data (adaptado ao curso) --- */
const COURSE = {
  title: "Conexão Pais e Filhos",
  modules: [
    { 
      id: 0, 
      title: "Módulo 1: Tranquilizando os Pais", 
      description: "Acalmando preocupações comuns dos pais.", 
      img: "https://via.placeholder.com/80x60?text=M1", 
      locked: false, 
      aulas: [
        { id: 0, title: "Aula 1: Introdução às Preocupações", video: "https://www.youtube.com/embed/placeholder1", quizId: 0 },
        { id: 1, title: "Aula 2: Gerenciando Ansiedade", video: "https://www.youtube.com/embed/placeholder2", quizId: 1 },
        { id: 2, title: "Aula 3: Técnicas de Respiração", video: "https://www.youtube.com/embed/placeholder3", quizId: null },
        { id: 3, title: "Aula 4: Comunicação com Parceiro", video: "https://www.youtube.com/embed/placeholder4", quizId: null },
        { id: 4, title: "Aula 5: Reduzindo Estresse Diário", video: "https://www.youtube.com/embed/placeholder5", quizId: null },
        { id: 5, title: "Aula 6: Autocuidado para Pais", video: "https://www.youtube.com/embed/placeholder6", quizId: null },
        { id: 6, title: "Aula 7: Lidando com Medos", video: "https://www.youtube.com/embed/placeholder7", quizId: null },
        { id: 7, title: "Aula 8: Revisão e Prática", video: "https://www.youtube.com/embed/placeholder8", quizId: null }
      ]
    },
    { 
      id: 1, 
      title: "Módulo 2: Necessidades Essenciais das Crianças", 
      description: "Entendendo o que as crianças realmente precisam.", 
      img: "https://via.placeholder.com/80x60?text=M2", 
      locked: true, 
      aulas: [
        { id: 0, title: "Aula 1: Necessidades Básicas", video: "https://www.youtube.com/embed/placeholder1", quizId: 2 },
        { id: 1, title: "Aula 2: Amor e Limites", video: "https://www.youtube.com/embed/vehTS91mObM?si=v6R6mgSRd8yhodni", quizId: 3 },
        { id: 2, title: "Aula 3: Segurança Emocional", video: "https://www.youtube.com/embed/placeholder3", quizId: null },
        { id: 3, title: "Aula 4: Estimulação Cognitiva", video: "https://www.youtube.com/embed/placeholder4", quizId: null },
        { id: 4, title: "Aula 5: Rotina e Estrutura", video: "https://www.youtube.com/embed/placeholder5", quizId: null },
        { id: 5, title: "Aula 6: Nutrição e Saúde", video: "https://www.youtube.com/embed/placeholder6", quizId: null },
        { id: 6, title: "Aula 7: Brincadeira e Desenvolvimento", video: "https://www.youtube.com/embed/placeholder7", quizId: null },
        { id: 7, title: "Aula 8: Revisão das Necessidades", video: "https://www.youtube.com/embed/placeholder8", quizId: null }
      ]
    },
    { 
      id: 2, 
      title: "Módulo 3: Quando as Coisas Acontecem Diferente do Esperado", 
      description: "Lidando com imprevistos na parentalidade.", 
      img: "https://via.placeholder.com/80x60?text=M3", 
      locked: true, 
      aulas: [
        { id: 0, title: "Aula 1: Expectativas vs. Realidade", video: "https://www.youtube.com/embed/placeholder1", quizId: 4 },
        { id: 1, title: "Aula 2: Adaptação a Mudanças", video: "https://www.youtube.com/embed/placeholder2", quizId: null },
        { id: 2, title: "Aula 3: Conflitos Inesperados", video: "https://www.youtube.com/embed/placeholder3", quizId: null },
        { id: 3, title: "Aula 4: Resiliência Familiar", video: "https://www.youtube.com/embed/placeholder4", quizId: null },
        { id: 4, title: "Aula 5: Planejamento Flexível", video: "https://www.youtube.com/embed/placeholder5", quizId: null },
        { id: 5, title: "Aula 6: Apoio em Crises", video: "https://www.youtube.com/embed/placeholder6", quizId: null },
        { id: 6, title: "Aula 7: Reconstruindo Confiança", video: "https://www.youtube.com/embed/placeholder7", quizId: null },
        { id: 7, title: "Aula 8: Reflexão e Aprendizado", video: "https://www.youtube.com/embed/placeholder8", quizId: null }
      ]
    },
    { 
      id: 3, 
      title: "Módulo 4: Soluções e o 'Pulo do Gato'", 
      description: "Dicas práticas e soluções inovadoras.", 
      img: "https://via.placeholder.com/80x60?text=M4", 
      locked: true, 
      aulas: [
        { id: 0, title: "Aula 1: Introdução às Soluções", video: "https://www.youtube.com/embed/placeholder1", quizId: 5 },
        { id: 1, title: "Aula 2: Comunicação Aberta", video: "https://www.youtube.com/embed/placeholder2", quizId: null },
        { id: 2, title: "Aula 3: Resolução de Conflitos", video: "https://www.youtube.com/embed/placeholder3", quizId: null },
        { id: 3, title: "Aula 4: O 'Pulo do Gato'", video: "https://www.youtube.com/embed/placeholder4", quizId: null },
        { id: 4, title: "Aula 5: Ferramentas Práticas", video: "https://www.youtube.com/embed/placeholder5", quizId: null },
        { id: 5, title: "Aula 6: Manutenção de Laços", video: "https://www.youtube.com/embed/placeholder6", quizId: null },
        { id: 6, title: "Aula 7: Avaliação de Progresso", video: "https://www.youtube.com/embed/placeholder7", quizId: null },
        { id: 7, title: "Aula 8: Conclusão e Próximos Passos", video: "https://www.youtube.com/embed/placeholder8", quizId: null }
      ]
    }
  ],
  quizzes: [
    { q: "Por que é importante tranquilizar os pais?", opts: ["Reduz ansiedade", "Melhora comunicação", "Ambos", "Nenhum"], a: 2, explain: "Tranquilizar reduz ansiedade e melhora laços." },
    { q: "Como gerenciar a ansiedade dos pais?", opts: ["Ignorar", "Técnicas de respiração", "Aumentar estresse", "Nenhum"], a: 1, explain: "Respiração ajuda a acalmar o sistema nervoso." },
    { q: "Quais são necessidades essenciais das crianças?", opts: ["Amor e limites", "Apenas diversão", "Isolamento", "Nenhum"], a: 0, explain: "Amor, segurança e limites são chave." },
    { q: "O que 'Amor e Limites' significa?", opts: ["Regras sem afeto", "Afeto com estrutura", "Isolamento", "Nenhum"], a: 1, explain: "Equilíbrio entre amor e discipline é essencial." },
    { q: "O que fazer quando as coisas saem do esperado?", opts: ["Ignorar", "Adaptar e aprender", "Desistir", "Nenhum"], a: 1, explain: "Adaptação promove resiliência." },
    { q: "Qual é o 'pulo do gato' em soluções?", opts: ["Comunicação aberta", "Punições", "Ignorar problemas", "Nenhum"], a: 0, explain: "Comunicação é essencial para soluções." }
  ]
};

/* app state */
let state = {
  currentScreen: 'signup', // Começa no sign up
  currentModuleIndex: 0,
  currentAulaIndex: 0,
  quizIndex: 0,
  correctCount: 0,
  totalQuiz: 1, // Por aula, exemplo
  unlockedModules: [0], // Módulos desbloqueados inicialmente
  menuOpen: false,
  bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
  notes: localStorage.getItem('notes') || '',
  avatar: localStorage.getItem('avatar') || 'https://via.placeholder.com/48',
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  tips: localStorage.getItem('tips') || ''
};

/* init */
function init() {
  renderModules();
  setTabActive('home');
  document.addEventListener('click', closeMenuOnOutsideClick);
  loadNotes();
  loadBookmarks();
  loadAvatar();
  toggleDarkMode(state.darkMode);
  loadTips();
}
init();

/* render modules list */
function renderModules() {
  const cont = document.getElementById('modules');
  cont.innerHTML = '';
  COURSE.modules.forEach((m, i) => {
    const el = document.createElement('div');
    el.className = 'module' + (m.locked && !state.unlockedModules.includes(i) ? ' locked' : '');
    el.innerHTML = `<img class="module-img" src="${m.img}" alt="${m.title}"><div><h3>${m.title}</h3><p>${m.description}</p><div style="margin-top:8px;font-size:13px;color:var(--muted)">8 aulas • Até 8 min cada</div></div>`;
    if (!m.locked || state.unlockedModules.includes(i)) el.onclick = () => startModule(i);
    cont.appendChild(el);
  });
}

/* Start a module (show aulas) */
function startModule(index) {
  if (COURSE.modules[index].locked && !state.unlockedModules.includes(index)) return toast('Módulo bloqueado!');
  state.currentModuleIndex = index;
  document.getElementById('module-title').textContent = COURSE.modules[index].title;
  document.getElementById('module-progress').textContent = `0 / 8`; // Placeholder, pode rastrear progresso
  renderAulas(index);
  nav('aulas');
  // Unlock next module
  if (index + 1 < COURSE.modules.length) state.unlockedModules.push(index + 1);
  renderModules();
}

/* Render aulas of module */
function renderAulas(moduleIndex) {
  const cont = document.getElementById('aulas-list');
  cont.innerHTML = '';
  COURSE.modules[moduleIndex].aulas.forEach((a, i) => {
    const el = document.createElement('div');
    el.className = 'aula';
    el.innerHTML = `<img class="aula-img" src="https://via.placeholder.com/80x60?text=A${i+1}" alt="${a.title}"><div><h3>${a.title}</h3><p>Aula de até 8 minutos.</p></div><button class="btn ghost" onclick="addBookmark(${moduleIndex}, ${i})">Marcar</button>`;
    el.onclick = () => startAula(moduleIndex, i);
    cont.appendChild(el);
  });
}

/* Start an aula */
function startAula(moduleIndex, aulaIndex) {
  state.currentAulaIndex = aulaIndex;
  state.quizIndex = 0;
  state.correctCount = 0;
  const aula = COURSE.modules[moduleIndex].aulas[aulaIndex];
  document.getElementById('aula-title').textContent = aula.title;
  document.getElementById('aula-video').src = aula.video;
  state.totalQuiz = aula.quizId !== null ? 1 : 0; // Um quiz por aula com quiz
  loadQuiz(aula.quizId);
  nav('aula');
}

/* navigation */
function nav(screen) {
  // hide all screens
  ['signup', 'home', 'aulas', 'aula', 'benefits', 'sentiments', 'profile', 'avatar', 'notes', 'tips', 'bookmarks', 'bio', 'final'].forEach(s => {
    const el = document.getElementById('screen-' + s);
    if (el) el.style.display = 'none';
  });
  // show chosen
  document.getElementById('screen-' + screen).style.display = 'block';

  state.currentScreen = screen;
  setTabActive(screen);
  closeMenu();
}

/* Set active tab for visual feedback (if needed in dropdown) */
function setTabActive(screen) {
  const tabs = document.querySelectorAll('.menu-dropdown .tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  const activeTab = document.querySelector(`.menu-dropdown .tab[onclick*="nav('${screen}')"]`);
  if (activeTab) activeTab.classList.add('active');
}

/* Toggle menu dropdown */
function toggleMenu() {
  const menu = document.getElementById('menu-dropdown');
  state.menuOpen = !state.menuOpen;
  menu.classList.toggle('active', state.menuOpen);
}

/* Close menu if clicked outside */
function closeMenuOnOutsideClick(event) {
  const menu = document.getElementById('menu-dropdown');
  const button = document.querySelector('.nav-actions .icon');
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    closeMenu();
  }
}

function closeMenu() {
  const menu = document.getElementById('menu-dropdown');
  if (state.menuOpen) {
    menu.classList.remove('active');
    state.menuOpen = false;
  }
}

/* Quiz rendering (adaptado por aula) */
function loadQuiz(quizId) {
  const area = document.getElementById('quiz-area');
  if (quizId === null) {
    area.innerHTML = `<div class="muted">Nenhum quiz para esta aula. Clique em Próximo para concluir.</div>`;
    return;
  }
  const q = COURSE.quizzes[quizId];
  // build markup
  let html = `<div class="quiz"><div class="question">${q.q}</div><div class="options">`;
  q.opts.forEach((opt, i) => {
    html += `<div class="option" data-opt="${i}"><span>${opt}</span><strong style="opacity:0" class="icon">✓</strong></div>`;
  });
  html += `</div><div id="explain" style="display:none" class="explain"></div></div>`;
  area.innerHTML = html;

  // add listeners
  const opts = area.querySelectorAll('.option');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      const chosen = parseInt(o.getAttribute('data-opt'));
      handleAnswer(q, chosen, o, opts);
    });
  });
}

/* Answer handling */
function handleAnswer(q, chosen, selectedEl, allOptions) {
  allOptions.forEach(x => x.style.pointerEvents = 'none');
  const correct = q.a;
  const explainEl = document.getElementById('explain');
  if (chosen === correct) {
    selectedEl.classList.add('correct');
    selectedEl.querySelector('.icon').style.opacity = 1;
    selectedEl.querySelector('.icon').textContent = '✔️';
    state.correctCount++;
    explainEl.innerHTML = `<strong>Certo!</strong> ${q.explain}`;
  } else {
    selectedEl.classList.add('wrong');
    selectedEl.querySelector('.icon').style.opacity = 1;
    selectedEl.querySelector('.icon').textContent = '✖';
    allOptions.forEach(opt => {
      if (parseInt(opt.getAttribute('data-opt')) === correct) {
        opt.classList.add('correct');
        opt.querySelector('.icon').style.opacity = 1;
        opt.querySelector('.icon').textContent = '✔️';
      }
    });
    explainEl.innerHTML = `<strong>Resposta certa:</strong> ${q.opts[correct]}. <br>${q.explain}`;
  }
  explainEl.style.display = 'block';
}

/* Next quiz / finish (para aula) */
function nextQuiz() {
  if (state.totalQuiz === 0) {
    finishAula();
    return;
  }
  state.quizIndex++;
  if (state.quizIndex >= state.totalQuiz) {
    finishAula();
  } else {
    loadQuiz(); // Se mais quizzes
  }
}

/* Finish aula */
function finishAula() {
  const percent = Math.round((state.correctCount / (state.totalQuiz || 1)) * 100);
  document.getElementById('progress-num').textContent = percent + '%';
  const deg = Math.round((percent / 100) * 360);
  document.getElementById('progress-circle').style.background = `conic-gradient(var(--primary) 0deg ${deg}deg, #e6f0fb ${deg}deg 360deg)`;
  let percentile = 50 + Math.round(percent / 2);
  percentile = Math.min(98, percentile);
  document.getElementById('progress-sub').textContent = `Top ${percentile}% dos participantes`;
  document.getElementById('final-msg').textContent = `Você acertou ${state.correctCount} de ${state.totalQuiz}`;
  nav('final');
}

/* small toast (demo) */
function toast(txt) {
  alert(txt);
}

/* Funções adicionais */

/* Toggle Dark Mode */
function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark-mode', state.darkMode);
  document.getElementById('mode-icon').textContent = state.darkMode ? '☀️' : '🌙';
  document.getElementById('mode-text').textContent = state.darkMode ? 'Modo Light' : 'Modo Dark';
  localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
}

/* Update Avatar */
function updateAvatar(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      state.avatar = e.target.result;
      localStorage.setItem('avatar', state.avatar);
      document.getElementById('avatar-img').src = state.avatar;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

/* Load Avatar */
function loadAvatar() {
  document.getElementById('avatar-img').src = state.avatar;
}

/* Select Avatar from Grid (opcional, para presets) */
function selectAvatar(element, src) {
  document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
  state.avatar = src;
  localStorage.setItem('avatar', state.avatar);
  document.getElementById('avatar-img').src = state.avatar;
}

/* Save Notes */
function saveNotes() {
  state.notes = document.getElementById('notes-textarea').value;
  localStorage.setItem('notes', state.notes);
  toast('Notas salvas!');
}

/* Load Notes */
function loadNotes() {
  document.getElementById('notes-textarea').value = state.notes;
}

/* Add Bookmark */
function addBookmark(moduleIndex, aulaIndex) {
  const bookmark = { module: COURSE.modules[moduleIndex].title, aula: COURSE.modules[moduleIndex].aulas[aulaIndex].title, date: new Date().toLocaleDateString() };
  if (!state.bookmarks.some(b => b.aula === bookmark.aula)) {
    state.bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    toast('Adicionado aos marcadores!');
    loadBookmarks();
  } else {
    toast('Já marcado!');
  }
}

/* Load Bookmarks */
function loadBookmarks() {
  const list = document.getElementById('bookmarks-list');
  list.innerHTML = '';
  state.bookmarks.forEach((b, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${b.module} - ${b.aula} (${b.date}) <button class="btn ghost" onclick="removeBookmark(${i})">Remover</button>`;
    list.appendChild(li);
  });
}

/* Remove Bookmark */
function removeBookmark(index) {
  state.bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
  loadBookmarks();
}

/* Load Tips */
function loadTips() {
  const tipsList = document.getElementById('tips-list');
  if (state.tips) {
    tipsList.innerHTML = state.tips;
  }
}

/* Save Tips */
function saveTips() {
  state.tips = document.getElementById('tips-list').innerHTML;
  localStorage.setItem('tips', state.tips);
  toast('Dicas salvas!');
}
