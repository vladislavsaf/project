const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchedFilmFirst = prompt('Один из просмотренных фильмов?', '');
const filmRaitingFirst = prompt('Насколько оцените его', '');
const lastWatchedFilmSecond = prompt('Один из просмотренных фильмов?', '');
const filmRaitingSecond = prompt('Насколько оцените его', '');

personalMovieDB.movies[lastWatchedFilmFirst] = filmRaitingFirst;
personalMovieDB.movies[lastWatchedFilmSecond] = filmRaitingSecond;

console.log(personalMovieDB.movies);