import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Films from './Films';
import { getFilmsThunkCreator, setCurrentPageActionCreator, setTotalFilmsCountActionCreator} from '../../redux/films-reducer';


const FilmsContainer = (props) => {
    useEffect(() => { props.getFilmsThunk(props.currentPage, props.pageSize); }, [])
    
    let onPageChange = (currentPage, pageSize) => {
        props.setCurrentPage(currentPage);
        props.getFilmsThunk(currentPage, pageSize);
    }

    return (
        <Films {...props} onPageChange={onPageChange}
        >
        </Films>
    );
}

let mapStateToProps = (state) => {
    return {
        films: state.repos.films,
        totalFilmsCount: state.repos.totalFilmsCount,
        pageSize: state.repos.pageSize,  
        currentPage: state.repos.currentPage,
        isFetching: state.repos.isFetching,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getFilmsThunk: (currentPage, pageSize) => {
            dispatch(getFilmsThunkCreator(currentPage, pageSize));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setTotalFilmsCount: (totalUsersCount) => {
            dispatch(setTotalFilmsCountActionCreator(totalUsersCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);