// Импортируем Express - минималистичный веб-фреймворк для Node.js
const express = require('express');

// Создаём экземпляр приложения Express
const app = express();

// Порт, на котором будет слушать сервер (можно изменить через переменную окружения)
const PORT = process.env.PORT || 3000;

// Встроенный middleware для парсинга JSON в теле запроса
app.use(express.json());

// Статические файлы из папки public (index.html, demo-страницы, стили)
app.use(express.static('public'));

// Корневой маршрут - отдаёт public/index.html
app.get('/', (req, res) => {
  res.sendFile(require('path').join(__dirname, 'index.html'));
});

// Маршрут для быстрого перехода на демо-страницу
app.get('/demo', (req, res) => {
  res.redirect('/grid-demo.html');
});

// Отдаём главный CSS из корня проекта (index.css)
app.get('/index.css', (req, res) => {
  res.sendFile(require('path').join(__dirname, 'index.css'));
});

// Пример API-эндоинта, который возвращает статус сервера и текущую метку времени
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    // ISO-строка удобна для логирования и интероперабельности
    timestamp: new Date().toISOString(),
  });
});

// Запуск сервера и вывод информации в консоль
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
