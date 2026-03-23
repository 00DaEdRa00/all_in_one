// Импортируем Express — минималистичный веб-фреймворк для Node.js
const express = require('express');
const path = require('path');


// Создаём экземпляр приложения Express
const app = express();

// Порт, на котором будет слушать сервер (можно изменить через переменную окружения)
const PORT = process.env.PORT || 3000;

app.use(express.static('./test')); // передаём html/css

// Встроенный middleware для парсинга JSON в теле запроса
app.use(express.json());

// Корневой маршрут — возвращает простое приветственное сообщение в формате JSON
app.get('/', (req, res) => {
  // res.json автоматически устанавливает Content-Type: application/json
  res.json({ message: 'Добро пожаловать в базовый проект!' });
  res.sendFile(path.join(__dirname, 'index.html'));
});



// Пример API-эндоинта, который возвращает статус сервера и текущую метку времени
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running',
    // ISO-строка удобна для логирования и интероперабельности
    timestamp: new Date().toISOString()
  });
});

// Запуск сервера и вывод информации в консоль
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
