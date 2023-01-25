'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '').trim();

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastWatchedFilm = prompt('Один из просмотренных фильмов?', '');
            if (lastWatchedFilm !== null && lastWatchedFilm.length < 50 && lastWatchedFilm !==
                ' ' && lastWatchedFilm.length !== 0) {
                personalMovieDB.movies[lastWatchedFilm] = prompt('Насколько оцените его', '');
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
            console.log('good');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i} `, '');
            if (favoriteGenre !== '' && favoriteGenre !== null) {
                personalMovieDB.genres[i - 1] = favoriteGenre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, num) => {
            console.log(`Любимый жанр #${num + 1} - это${item}`);
        });
    },
    toggleVisibleMyDB: function (show) {
        if (show) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();