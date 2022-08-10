import Details from './Details';
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getFilmThunkCreator,setCommentActionCreator,deleteCommentActionCreator } from '../../redux/films-reducer';

const DetailsContainer = (props) => {
    let params = useParams();

    useEffect(() => {
        props.getFilmThunk(params.filmId);
       
    }, []);

    return <Details {...props} filmId={params.filmId}></Details>
}

const mapStateToProps = (state) => {
    return {
        film: state.repos.currentFilm,
        isFetchingFilm: state.repos.isFetchingFilm,
        comments: state.repos.comments,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilmThunk: (userId) => {
            dispatch(getFilmThunkCreator(userId));
        },
        setComment:(comment)=>{
            dispatch(setCommentActionCreator(comment));
        },
        deleteComment:(commentId)=>{
            dispatch(deleteCommentActionCreator(commentId));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);