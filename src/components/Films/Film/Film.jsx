import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Style from './Style';
import { VscStarFull } from "react-icons/vsc";

const Film = (props) => {

    return (
        <Style.Film>
            <NavLink to={`/films/${props.film.id}`}>
                <Style.Content>
                    <Style.Cards>
                        <Style.Card1 src={props.film.medium_cover_image ? props.film.medium_cover_image : 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'} alt={props.film.medium_cover_image}>
                        </Style.Card1>

                        <Style.Card2>
                            <Style.Rating>
                                <Style.RatingIcon>
                                    <VscStarFull />
                                </Style.RatingIcon>
                                <Style.RatingText> {props.film.rating} / 10</Style.RatingText>
                            </Style.Rating>

                            {props.film.genres ? <Style.Genres>
                                {0 in props.film.genres ? <Style.GenresText>{props.film.genres[0].toUpperCase()}</Style.GenresText> : ''}
                                {1 in props.film.genres ? <Style.GenresText>{props.film.genres[1].toUpperCase()}</Style.GenresText> : ''}
                                {2 in props.film.genres ? <Style.GenresText>{props.film.genres[2].toUpperCase()}</Style.GenresText> : ''}
                            </Style.Genres> : ''}

                            <Style.Details>
                                DETAILS
                            </Style.Details>
                        </Style.Card2>
                    </Style.Cards>

                    <Style.Name>
                        {props.film.title}
                    </Style.Name>

                    <Style.Text>
                        {props.film.year} {props.film.language}
                    </Style.Text>
                </Style.Content>
            </NavLink>
        </Style.Film>
    );
}

export default Film; 
