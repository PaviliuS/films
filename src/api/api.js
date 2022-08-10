import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "008538ca-ec18-4d06-8a91-fc8fa3eda943"
    // }
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