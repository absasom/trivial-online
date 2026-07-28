const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const questions = [
  { question: '¿Qué país ha ganado más veces Eurovisión?', answer: 'Irlanda y Suecia' },
  { question: '¿Cuántas victorias tienen Irlanda y Suecia?', answer: '7' },
  { question: '¿En qué año se celebró el primer Festival de Eurovisión?', answer: '1956' },
  { question: '¿Qué país organiza Eurovisión normalmente?', answer: 'El ganador del año anterior' },
  { question: '¿Qué país ganó Eurovisión 2024?', answer: 'Suiza' },
  { question: '¿Qué país ganó Eurovisión 2025?', answer: 'Austria' },
  { question: '¿Qué cadena organiza Eurovisión?', answer: 'EBU' },
  { question: '¿Qué significan las siglas EBU?', answer: 'European Broadcasting Union' },
  { question: '¿Qué idioma se usa principalmente para presentar el festival?', answer: 'Inglés y francés' },
  { question: '¿Qué país nunca ha participado en Eurovisión?', answer: 'Estados Unidos' },

  { question: '¿Qué país es famoso por dar 12 puntos a Grecia?', answer: 'Chipre' },
  { question: '¿Qué país suele dar muchos puntos a Suecia?', answer: 'Noruega' },
  { question: '¿Qué país ganó Eurovisión con "Euphoria"?', answer: 'Suecia' },
  { question: '¿Quién cantó "Euphoria"?', answer: 'Loreen' },
  { question: '¿Quién es la única mujer en ganar dos veces Eurovisión como solista?', answer: 'Loreen' },
  { question: '¿Qué país ganó con "Fairytale"?', answer: 'Noruega' },
  { question: '¿Quién cantó "Fairytale"?', answer: 'Alexander Rybak' },
  { question: '¿Qué país ganó con "Toy"?', answer: 'Israel' },
  { question: '¿Quién cantó "Toy"?', answer: 'Netta' },
  { question: '¿Qué país ganó con "Rise Like a Phoenix"?', answer: 'Austria' },

  { question: '¿Quién interpretó "Rise Like a Phoenix"?', answer: 'Conchita Wurst' },
  { question: '¿Qué país ganó con "Arcade"?', answer: 'Países Bajos' },
  { question: '¿Quién cantó "Arcade"?', answer: 'Duncan Laurence' },
  { question: '¿Qué país ganó con "Tattoo"?', answer: 'Suecia' },
  { question: '¿Quién cantó "Tattoo"?', answer: 'Loreen' },
  { question: '¿Qué país ganó con "Zitti e buoni"?', answer: 'Italia' },
  { question: '¿Quién interpretó "Zitti e buoni"?', answer: 'Måneskin' },
  { question: '¿Qué país ganó con "1944"?', answer: 'Ucrania' },
  { question: '¿Quién cantó "1944"?', answer: 'Jamala' },
  { question: '¿Qué país ganó con "Amar Pelos Dois"?', answer: 'Portugal' },

  { question: '¿Quién cantó "Amar Pelos Dois"?', answer: 'Salvador Sobral' },
  { question: '¿Qué país ganó con "Only Teardrops"?', answer: 'Dinamarca' },
  { question: '¿Quién cantó "Only Teardrops"?', answer: 'Emmelie de Forest' },
  { question: '¿Qué país ganó con "Heroes"?', answer: 'Suecia' },
  { question: '¿Quién cantó "Heroes"?', answer: 'Måns Zelmerlöw' },
  { question: '¿Qué país ganó con "Satellite"?', answer: 'Alemania' },
  { question: '¿Quién cantó "Satellite"?', answer: 'Lena' },
  { question: '¿Qué país ganó con "Hard Rock Hallelujah"?', answer: 'Finlandia' },
  { question: '¿Quién cantó "Hard Rock Hallelujah"?', answer: 'Lordi' },
  { question: '¿Qué país ganó con "Molitva"?', answer: 'Serbia' },

  { question: '¿Quién cantó "Molitva"?', answer: 'Marija Šerifović' },
  { question: '¿Qué país ganó con "Wild Dances"?', answer: 'Ucrania' },
  { question: '¿Quién cantó "Wild Dances"?', answer: 'Ruslana' },
  { question: '¿Qué país ganó con "Fly on the Wings of Love"?', answer: 'Dinamarca' },
  { question: '¿Qué país ganó con "Waterloo"?', answer: 'Suecia' },
  { question: '¿Qué grupo cantó "Waterloo"?', answer: 'ABBA' },
  { question: '¿Qué país ganó con "Diva"?', answer: 'Israel' },
  { question: '¿Quién cantó "Diva"?', answer: 'Dana International' },
  { question: '¿Qué país ganó con "Believe"?', answer: 'Rusia' },
  { question: '¿Quién cantó "Believe"?', answer: 'Dima Bilan' },

  { question: '¿Qué país ganó con "Running Scared"?', answer: 'Azerbaiyán' },
  { question: '¿Qué dúo cantó "Running Scared"?', answer: 'Ell & Nikki' },
  { question: '¿Qué país ha participado más veces en Eurovisión?', answer: 'Alemania' },
  { question: '¿Qué país debutó en Eurovisión en 1980?', answer: 'Marruecos' },
  { question: '¿Qué país solo ha participado una vez?', answer: 'Marruecos' },
  { question: '¿Qué país se incorporó al festival en 2015?', answer: 'Australia' },
  { question: '¿Australia pertenece a Europa?', answer: 'No' },
  { question: '¿Qué país ganó Eurovisión 2023?', answer: 'Suecia' },
  { question: '¿Qué país ganó Eurovisión 2022?', answer: 'Ucrania' },
  { question: '¿Qué país ganó Eurovisión 2021?', answer: 'Italia' },

  { question: '¿Qué país ganó Eurovisión 2019?', answer: 'Países Bajos' },
  { question: '¿Qué país ganó Eurovisión 2018?', answer: 'Israel' },
  { question: '¿Qué país ganó Eurovisión 2017?', answer: 'Portugal' },
  { question: '¿Qué país ganó Eurovisión 2016?', answer: 'Ucrania' },
  { question: '¿Qué país ganó Eurovisión 2015?', answer: 'Suecia' },
  { question: '¿Qué país ganó Eurovisión 2014?', answer: 'Austria' },
  { question: '¿Qué país ganó Eurovisión 2013?', answer: 'Dinamarca' },
  { question: '¿Qué país ganó Eurovisión 2012?', answer: 'Suecia' },
  { question: '¿Qué país ganó Eurovisión 2011?', answer: 'Azerbaiyán' },
  { question: '¿Qué país ganó Eurovisión 2010?', answer: 'Alemania' },

  { question: '¿En qué ciudad se celebró Eurovisión 2024?', answer: 'Malmö' },
  { question: '¿En qué ciudad se celebró Eurovisión 2025?', answer: 'Basilea' },
  { question: '¿Qué país acogió Eurovisión 2024?', answer: 'Suecia' },
  { question: '¿Qué país acogió Eurovisión 2025?', answer: 'Suiza' },
  { question: '¿Qué color recibe la máxima puntuación?', answer: '12 puntos' },
  { question: '¿Cuál es la máxima puntuación que puede dar un país?', answer: '12' },
  { question: '¿Cuántos países pueden recibir puntos de un jurado?', answer: '10' },
  { question: '¿Qué país ganó Eurovisión por primera vez en 2017?', answer: 'Portugal' },
  { question: '¿Qué país ganó Eurovisión por primera vez en 2006?', answer: 'Finlandia' },
  { question: '¿Qué país ganó Eurovisión por primera vez en 2011?', answer: 'Azerbaiyán' },

  { question: '¿Qué país ganó Eurovisión por primera vez en 2004?', answer: 'Ucrania' },
  { question: '¿Qué país ganó Eurovisión por primera vez en 2007?', answer: 'Serbia' },
  { question: '¿Qué país ganó Eurovisión por primera vez en 1998?', answer: 'Israel' },
  { question: '¿Qué país ganó Eurovisión por primera vez en 1974?', answer: 'Suecia' },
  { question: '¿Qué grupo mundialmente famoso salió de Eurovisión?', answer: 'ABBA' },
  { question: '¿Qué cantante austríaca ganó caracterizada con barba?', answer: 'Conchita Wurst' },
  { question: '¿Qué país ha ganado cuatro veces consecutivas?', answer: 'Irlanda' },
  { question: '¿Qué país nunca ha ganado Eurovisión?', answer: 'Islandia' },
  { question: '¿Qué país tiene forma de bota?', answer: 'Italia' },
  { question: '¿Qué país suele cantar en italiano?', answer: 'Italia' },

  { question: '¿Qué país suele cantar en francés?', answer: 'Francia' },
  { question: '¿Qué país suele cantar en español?', answer: 'España' },
  { question: '¿Qué país suele cantar en portugués?', answer: 'Portugal' },
  { question: '¿Qué país suele cantar en sueco o inglés?', answer: 'Suecia' },
  { question: '¿Qué país ganó Eurovisión 2008?', answer: 'Rusia' },
  { question: '¿Qué país ganó Eurovisión 2009?', answer: 'Noruega' },
  { question: '¿Qué país ganó Eurovisión 2007?', answer: 'Serbia' },
  { question: '¿Qué país ganó Eurovisión 2006?', answer: 'Finlandia' },
  { question: '¿Qué país ganó Eurovisión 2005?', answer: 'Grecia' },
  { question: '¿Quién cantó "My Number One"?', answer: 'Helena Paparizou' },

  { question: '¿Qué país ganó Eurovisión 2004?', answer: 'Ucrania' },
  { question: '¿Qué cantante ganó con "Wild Dances"?', answer: 'Ruslana' },
  { question: '¿Qué país ganó Eurovisión 2003?', answer: 'Turquía' },
  { question: '¿Quién cantó "Everyway That I Can"?', answer: 'Sertab Erener' },
  { question: '¿Qué país ganó Eurovisión 2002?', answer: 'Letonia' },
  { question: '¿Qué país ganó Eurovisión 2001?', answer: 'Estonia' },
  { question: '¿Qué país ganó Eurovisión 2000?', answer: 'Dinamarca' },
  { question: '¿Qué país ganó Eurovisión 1999?', answer: 'Suecia' },
  { question: '¿Qué país ganó Eurovisión 1998?', answer: 'Israel' },
  { question: '¿Qué canción hizo famoso a ABBA en Eurovisión?', answer: 'Waterloo' }
];

// --- ARRIBA: tu código de express, questions, etc. ---

let currentIndex = 0;
let state = {
  showQuestion: false,
  showAnswer: false,
  question: questions[currentIndex].question,
  answer: questions[currentIndex].answer,
  scores: { group1: 0, group2: 0 }
};

// ---- NUEVA FUNCIÓN: elegir pregunta distinta ----
function elegirPreguntaDiferente(indiceActual) {
  const indices = questions.map((_, i) => i);
  const filtros = indices.filter(i => i !== indiceActual);
  const rand = Math.floor(Math.random() * filtros.length);
  return filtros[rand];
}

// ----------------------------------------------------

app.get('/', (req, res) => res.redirect('/player'));
app.get('/player', (req, res) => res.sendFile(path.join(__dirname, 'public', 'player.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));

app.get('/api/state', (req, res) => res.json(state));

app.post('/api/show-question', (req, res) => {
  currentIndex = elegirPreguntaDiferente(currentIndex);
  state.question = questions[currentIndex].question;
  state.answer   = questions[currentIndex].answer;

  state.showQuestion = true;
  state.showAnswer   = false;

  res.json(state);
});

app.post('/api/show-answer', (req, res) => {
  state.showAnswer = true;
  res.json(state);
});

app.post('/api/hide', (req, res) => {
  state.showQuestion = false;
  state.showAnswer   = false;
  res.json(state);
});

app.post('/api/score/:group/:action', (req, res) => {
  const { group, action } = req.params;
  const key = group === '1' ? 'group1' : 'group2';
  if (!['1', '2'].includes(group) || !['add', 'sub'].includes(action)) {
    return res.status(400).json({ error: 'Bad request' });
  }
  state.scores[key] += action === 'add' ? 1 : -1;
  res.json(state);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
