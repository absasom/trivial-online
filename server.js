const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const questions = [
  { question: '¿En qué continente se encuentra Egipto?', answer: 'África' },
  { question: '¿Cuántos lados tiene un octógono?', answer: 'Ocho' },
  { question: '¿Qué gas respiramos principalmente de la atmósfera?', answer: 'Oxígeno' },
  { question: '¿Cuál es el metal más abundante en la corteza terrestre?', answer: 'Aluminio' },
  { question: '¿En qué año se declaró la independencia de los Estados Unidos?', answer: '1776' },
  { question: '¿Cuál es el río más largo del mundo?', answer: 'Nilo' },
  { question: '¿Cuántos planetas hay en el sistema solar?', answer: 'Ocho' },
  { question: '¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?', answer: 'Chino mandarín' },
  { question: '¿Qué unidad se usa para medir la temperatura en el sistema internacional?', answer: 'Kelvin' },
  { question: '¿Qué invento se le atribuye a Alexander Graham Bell?', answer: 'El teléfono' },

  { question: '¿Qué banda de los años 90 es conocida por la canción “Smells Like Teen Spirit”?', answer: 'Nirvana' },
  { question: '¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel?', answer: 'Robert Downey Jr.' },
  { question: '¿Qué película animada de Disney muestra el viaje de un pez payaso llamado Nemo?', answer: 'Buscando a Nemo' },
  { question: '¿Qué grupo británico es famoso por canciones como “Hey Jude” y “Let It Be”?', answer: 'The Beatles' },
  { question: '¿Qué intérprete es conocida por “Rolling in the Deep” y “Someone Like You”?', answer: 'Adele' },
  { question: '¿Qué película de ciencia ficción de 1982 muestra un futuro distópico con androides llamados replicantes?', answer: 'Blade Runner' },
  { question: '¿Qué actor es conocido por encarnar a James Bond en varias películas de los años 2000?', answer: 'Daniel Craig' },
  { question: '¿Qué banda de rock es famosa por el tema “Sweet Child O’ Mine”?', answer: 'Guns N’ Roses' },
  { question: '¿Qué artista de pop es conocida por el álbum “1989”?', answer: 'Taylor Swift' },
  { question: '¿Qué película de 2008 muestra el enfrentamiento entre Batman y el Joker?', answer: 'The Dark Knight' },

  { question: '¿Cuál es la capital de Japón?', answer: 'Tokio' },
  { question: '¿Qué país tiene como capital Viena?', answer: 'Austria' },
  { question: '¿En qué país se encuentra la ciudad de Nueva York?', answer: 'Estados Unidos' },
  { question: '¿Qué país europeo es formado por una península y una isla llamada Sicilia?', answer: 'Italia' },
  { question: '¿Qué país sudamericano tiene como capital Buenos Aires?', answer: 'Argentina' },
  { question: '¿Qué país antiguo mediterráneo fue el origen de la democracia clásica?', answer: 'Grecia' },
  { question: '¿Qué país del norte de Europa tiene como capital Oslo?', answer: 'Noruega' },
  { question: '¿Qué país africano tiene como capital Ciudad del Cabo y Pretoria?', answer: 'Sudáfrica' },
  { question: '¿Qué país asiático tiene como capital Seúl?', answer: 'Corea del Sur' },
  { question: '¿Qué país europeo tiene como capital Praga?', answer: 'República Checa' },

  { question: '¿Qué planeta es conocido como el “planeta rojo”?', answer: 'Marte' },
  { question: '¿Qué aparato electrónico se usa para navegar por internet conectado a una red Wi‑Fi?', answer: 'Ordenador o móvil' },
  { question: '¿Qué tipo de energía proviene directamente del Sol?', answer: 'Energía solar' },
  { question: '¿Qué animal se considera responsable de la transmisión de la malaria?', answer: 'Mosquito' },
  { question: '¿Qué parte del cuerpo humano es responsable de bombear la sangre?', answer: 'El corazón' },
  { question: '¿Qué sustancia permite que las plantas absorban luz y realicen la fotosíntesis?', answer: 'Clorofila' },
  { question: '¿Qué planeta está más cerca del Sol?', answer: 'Mercurio' },
  { question: '¿Qué medio de almacenamiento se usa habitualmente para guardar fotos y archivos en un ordenador?', answer: 'Disco duro o SSD' },
  { question: '¿Qué aparato de cocina usa la energía eléctrica para calentar alimentos por radiación?', answer: 'Microondas' },
  { question: '¿Qué estructura del ojo humano detecta la luz y ayuda a formar las imágenes?', answer: 'Retina' }
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
