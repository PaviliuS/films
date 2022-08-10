import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import * as Style from './Style';
import Film from './Film/Film';
import Loader from '../common/Loader/Loader';
const Films = (props) => {
    let filmsList = props.films.movies.map(film => { return <Film film={film}></Film> })

    return (
        <Style.Films>
             {!props.isFetching ? <Style.Content>
                <Style.Title>
                    Films
                </Style.Title>

                 <Style.List>
                    {filmsList}
                </Style.List>

                <Pagination totalUsersCount={props.totalFilmsCount} currentPage={props.currentPage} pageSize={props.pageSize} onPageChange={props.onPageChange} />
            </Style.Content> : <Loader />}
        </Style.Films>
    );

}

export default Films; 