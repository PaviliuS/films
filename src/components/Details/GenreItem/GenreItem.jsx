import React from 'react';
import * as Style from './Style';

const GenreItem = (props) => {
    return (
        <Style.GenreItem>
            <Style.Text>{props.text}</Style.Text>
        </Style.GenreItem>
    );
}

export default GenreItem;