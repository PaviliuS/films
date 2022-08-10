import { filmsAPI } from "../api/api";

//Films 
const SET_FILMS = "SET_FILMS"
const SET_TOTAL_FILMS_COUNT = 'SET-TOTAL-FILMS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

//Film
const SET_FILM = "SET_FILM"
const SET_IS_FETCHING_FILM = 'SET-IS-FETCHING-FILM';

//Comments
const SET_COMMENT = "SET-COMMENT"
const DELETE_COMMENT = 'DELETE-COMMENT';

const defaultState = {
    //Films
    films: {
        movies: [],
    },
    pageSize: 20,
    currentPage: 1,
    totalFilmsCount: 10,
    isFetching: false,

    //Film
    isFetchingFilm: false,
    currentFilm: {
        genres: [],
        torrents: [{}],
    },

    //Comments
    comments: [],
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.data,
            }
        case SET_CURRENT_PAGE: {
            let stateCopy = { ...state };
            stateCopy.currentPage = action.currentPage;
            return stateCopy;
            }
        case SET_TOTAL_FILMS_COUNT: {
            let stateCopy = { ...state };
            stateCopy.totalFilmsCount = action.totalFilmsCount;
            return stateCopy;
        }
        case SET_IS_FETCHING: {
            let stateCopy = { ...state };
            stateCopy.isFetching = action.isFetching;
            return stateCopy;
        }
        case SET_FILM:
            return {
                ...state,
                currentFilm: action.data,
            }
        case SET_IS_FETCHING_FILM: {
            let stateCopy = { ...state };
            stateCopy.isFetchingFilm = action.isFetchingFilm;
            return stateCopy;
            }
        case SET_COMMENT:
            let now = new Date();
            let hours = now.getHours(), minutes = now.getMinutes();
            let minutesPrint = minutes < 10 ? `0${minutes}` : `${minutes}`;
            let time = `${hours}:${minutesPrint}`;

            let comment = {
                id: Math.random() * 1000,
                filmId: action.comment.filmId,
                userId: 1,
                userName: 'User 1',
                text: action.comment.text,
                time: time
            }

            return {
                ...state,
                comments: [...state.comments, comment],
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id != action.commentId),
            }
        default:
            return state
    }
}

//Films
export const setFilmsActionCreator = (data) => {
    return { type: SET_FILMS, data: data };
};
export const setTotalFilmsCountActionCreator = (totalFilmsCount) => {
    return { type: SET_TOTAL_FILMS_COUNT, totalFilmsCount: totalFilmsCount };
};
export const setCurrentPageActionCreator = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage };
};
export const setIsFetchingActionCreator = (isFetching) => {
    return { type: SET_IS_FETCHING, isFetching: isFetching };
};

//Film
export const setFilmActionCreator = (data) => {
    return { type: SET_FILM, data: data };
};
export const setIsFetchingFilmActionCreator = (isFetchingFilm) => {
    return { type: SET_IS_FETCHING_FILM, isFetchingFilm: isFetchingFilm };
};

//Comments
export const setCommentActionCreator = (comment) => {
    return { type: SET_COMMENT, comment: comment };
};
export const deleteCommentActionCreator = (commentId) => {
    return { type: DELETE_COMMENT, commentId: commentId };
};

//Films
export const getFilmsThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));

        let data = await filmsAPI.getFilms(currentPage, pageSize);
        if (data.status === 'ok') {
            dispatch(setFilmsActionCreator(data.data));
            dispatch(setTotalFilmsCountActionCreator(data.data.movie_count));
            dispatch(setIsFetchingActionCreator(false));
        }

    }
}

//Film
export const getFilmThunkCreator = (filmId) => {
    return async (dispatch) => {
        dispatch(setIsFetchingFilmActionCreator(true));

        let data = await filmsAPI.getFilm(filmId);
        if (data.status === 'ok') {
            dispatch(setFilmActionCreator(data.data.movie));
            dispatch(setIsFetchingFilmActionCreator(false));
        }
    }
}