import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/list_movies.json',
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "008538ca-ec18-4d06-8a91-fc8fa3eda943"
    // }
});

export const usersAPI = {
    getFilms() {
        return instance.get().then(response => {
            return response.data;
        })
    },
    // follow(userId){
    //     return instance.post(`follow/${userId}`).then(response => {
    //         return response.data;
    //     })
    // },
    // unfollow(userId){
    //     return instance.delete(`follow/${userId}`).then(response => {
    //         return response.data;
    //     })
    // }
}