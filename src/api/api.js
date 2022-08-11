import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
});

export const filmsAPI = {
    getFilms(currentPage, pageSize) {
        return instance.get(`list_movies.json?page=${currentPage}&limit=${pageSize}`).then(response => {
            return response.data;
        })
    },
    getFilm(filmId) {
        return instance.get(`movie_details.json?movie_id=${filmId}`).then(response => {
            return response.data;
        })
    },
}