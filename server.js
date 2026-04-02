const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const questions = [
  { question: '¿Qué planeta es conocido como el planeta rojo?', answer: 'Marte' },
  { question: '¿Cuántos lados tiene un triángulo?', answer: '3' },
  { question: '¿Cuál es la capital de Francia?', answer: 'París' },
  { question: '¿Qué animal dice “miau”?', answer: 'Gato' }
];

let currentIndex = 0;
let state = {
  showQuestion: false,
  showAnswer: false,
  question: questions[currentIndex].question,
  answer: questions[currentIndex].answer,
  scores: { group1: 0, group2: 0 }
};

app.get('/', (req, res) => res.redirect('/player'));
app.get('/player', (req, res) => res.sendFile(path.join(__dirname, 'public', 'player.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));

app.get('/api/state', (req, res) => res.json(state));

app.post('/api/show-question', (req, res) => {
  state.showQuestion = true;
  state.showAnswer = false;
  res.json(state);
});

app.post('/api/show-answer', (req, res) => {
  state.showAnswer = true;
  res.json(state);
});

app.post('/api/hide', (req, res) => {
  state.showQuestion = false;
  state.showAnswer = false;
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
