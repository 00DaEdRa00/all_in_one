const STORAGE_KEY = 'movies'

export const loadMovies = () => {
    const moviesFromStorage = localStorage.getItem(STORAGE_KEY);

    if(!moviesFromStorage){
        return [];
    }
    return JSON.parse(moviesFromStorage)
}; // загрузка из локал

export const saveMovies = (movies) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
    // stringify - 
}; // сохранение в локал

export const createMovie = ({title, year, genre, rating }) => {
    return {
        id: Date.now(),
        title: title.trim(),
        year: Number(year),
        genre: genre.trim(),
        rating: Number(rating),
    };
    // trim - убираем пробелы в начале и конце
};

export const addMovie = (movies, movie) => {
    return [...movies, movie];
}; // массив с добавленым фильмом

export const removeMovie = (movies, movieId) => {
    return movies.filter(({ id }) => id !== movieId); // деструктуризация
}; // массив без фильма по id

export const searchMovies = (movies, query) => {
    const normalizedQuery = query.trim().toLowerCase();

    if(!normalizedQuery){
        return movies;  
    }

    return movies.filter(({title})=>
    title.toLowerCase().includes(normalizedQuery)
    );
}; // ищем через filter

export const sortMovies = (movies, order) => {
    const sortedMovies = [...movies]; // Копия массива

    sortedMovies.sort((firstMovie, secondMovie)=>{
        const {title: firstTitle} = firstMovie;
        const {title: secondTitle} = secondMovie;
    
    if (order === 'za'){
        return secondTitle.localeCompare(firstTitle, 'ru');
    }
    return firstTitle.localeCompare(secondTitle, 'ru');
    });
    return sortedMovies;
}; // Сортировочка


