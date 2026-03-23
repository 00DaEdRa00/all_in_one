
// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM готов');
    
    // Проверяем что Day.js загружен глобально
    if (typeof dayjs === 'undefined') {
        console.error('❌ Day.js не загружен!');
        return;
    }
    
    // Устанавливаем локаль
    dayjs.locale('ru');
    
    // Функция обновления времени
    function updateTime() {
        const now = dayjs();
        document.getElementById('time').textContent = now.format('HH:mm:ss');
    }
    
    // Запускаем
    updateTime();
    setInterval(updateTime, 1000);
    
    console.log('✅ Часы запущены');
});