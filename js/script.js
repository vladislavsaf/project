const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastWatchedFilm = prompt('Один из просмотренных фильмов?', '');
    console.log(lastWatchedFilm);
    if (lastWatchedFilm !== null && lastWatchedFilm.length < 50 && lastWatchedFilm !==
        ' ' && lastWatchedFilm.length !== 0) {
        personalMovieDB.movies[lastWatchedFilm] = prompt('Насколько оцените его', '');
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
}

console.log(personalMovieDB.movies);