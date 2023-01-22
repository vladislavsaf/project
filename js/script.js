'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '').trim();

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedFilm = prompt('Один из просмотренных фильмов?', '').trim();
        if (lastWatchedFilm !== null && lastWatchedFilm.length < 50 && lastWatchedFilm !==
            ' ' && lastWatchedFilm.length !== 0) {
            personalMovieDB.movies[lastWatchedFilm] = prompt('Насколько оцените его', '');
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
        console.log('good');
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} `, '').trim();
    }
}

writeYourGenres();