
const moviesList = document.getElementById('moviesList');
const emptyState = document.getElementById('empty_state');
const tasksContainer = document.getElementById('filmContainer');

export const createMovieMarkup = (movie) => {
    const { id, title, year, genre, rating } = movie;

    return `
        <li class="task-item" data-id="${id}">
            <div class="task-content movie-content">
                <div class="task-text movie-text">
                    <strong class="movie-title">${title}</strong>
                    <span class="movie-meta">${year} • ${genre} • ⭐ ${rating}</span>
                </div>
                <div class="task-actions">
                    <button class="delete-btn" data-id="${id}" type="button" aria-label="Удалить фильм">×</button>
                </div>
            </div>
        </li>
    `;
};

export const renderMovies = (movies) => {
    moviesList.innerHTML = movies.map((movie) => createMovieMarkup(movie)).join('');
}; // .map - превращаем фильм в HTML ,а join('') Склеивает все в одну строку.

export const toggleEmptyState = (movies) => {
    const isEmpty = movies.length === 0;

    emptyState.classList.toggle('hidden', !isEmpty);
    tasksContainer.classList.toggle('hidden', isEmpty)
};