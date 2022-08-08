import { usersAPI } from "../api/api";

const SET_COUNT = "SET_COUNT"
const SET_FILMS = "SET_FILMS"

const defaultState = {
    items: [],
    isFetching: true,
    count: 0,
    films:null,
}


export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COUNT:
            // console.log(123);
            return {
                ...state,
                count: action.payload
            }
        case SET_FILMS:
            console.log(state.films);
            return {
                ...state,
                films: action.data,
               
            }
        default:
            return state
    }
}

export const setCount = (count) => ({type:SET_COUNT, payload:count})

export const setFilms = (data) => ({type:SET_FILMS, data:data})

export const setFilmsThunkCreator = () => {
    return async (dispatch) => {
  
        let data = await usersAPI.getFilms();
       console.log(data)
        if (data.status === 'ok') {
            dispatch(setFilms(data.data));
        }
       

    }
}
