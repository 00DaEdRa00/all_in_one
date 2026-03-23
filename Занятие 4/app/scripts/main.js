import {
    loadMovies,
    saveMovies,
    createMovie,
    addMovie,
    removeMovie,
    searchMovies,
    sortMovies,
} from './data.js';

import { renderMovies, toggleEmptyState } from './ui.js';

const addBtn = document.getElementById('add_btn');
const modalOverlay = document.getElementById('modalOverlay');
const cancelBtn = document.getElementById('cancelBtn');
const filmForm = document.getElementById('filmform');
const searchField = document.getElementById('search_field');
const moviesList = document.getElementById('moviesList');

let movies = loadMovies();
let searchQuery = '';
let sortOrder = 'az'

const openModal = () => {
    modalOverlay.classList.remove('hidden');
};

const closeModal = () => {
    modalOverlay.classList.add('hidden');
    filmForm.reset();
};

const renderApp = () => {
    const filteredMovies = searchMovies(movies, searchQuery);
    const sortedMovies = sortMovies(filteredMovies, sortOrder);

    renderMovies(sortedMovies);
    toggleEmptyState(sortedMovies);
};

addBtn.addEventListener('click', () => {
    openModal();
});

cancelBtn.addEventListener('click', () => {
    closeModal();
});

searchField.addEventListener('input', (event) => {
    searchQuery = event.target.value
    renderApp();
});

filmForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(filmForm);

    const rawMovie = {
        title: formData.get('title'),
        year: formData.get('year'),
        genre: formData.get('genre'),
        rating: formData.get('rating'),
    };

    const newMovie = createMovie(rawMovie);

    movies = addMovie(movies, newMovie);
    saveMovies(movies);
    renderApp();
    closeModal();
});

moviesList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('delete-btn')){
        return;
    }

    const { id } = event.target.dataset;

    movies = removeMovie(movies, Number(id)); // из за того что по умолчанию текст а ид эта число   saveMovies(movies);
    renderApp();
});

const sortLinks = document.querySelectorAll('.sort_dropdown a');

sortLinks[0].addEventListener('click', (event) => {
    event.preventDefault();
    sortOrder = "az"; 
    renderApp();
});

sortLinks[1].addEventListener('click', (event) => {
    event.preventDefault();
    sortOrder = 'za';
    renderApp();
});

renderApp();