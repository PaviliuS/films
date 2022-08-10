import React from 'react';
import * as Style from './Style';
import {GiFilmStrip} from 'react-icons/gi';

const Loader= (props) => {  
    return (
        <Style.Loader>
              <Style.Icon><GiFilmStrip/></Style.Icon>
              <Style.Text>Loading...</Style.Text>     
        </Style.Loader>
    )
}

export default Loader;