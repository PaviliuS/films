import React from 'react';
import * as Style from './Style';
import { VscSymbolColor } from "react-icons/vsc";
import Button from './Button/Button';

const Header = (props) => {
    return (
        <Style.Header id='header'>
            <Style.Content>
                <Style.Logo>
                    <Style.Img src='https://yts.mx/assets/images/website/logo-YTS.svg'></Style.Img>
                    <Style.Name>HD movies at the smallest file size.</Style.Name>
                </Style.Logo>

                <Style.Buttons>
                    <Button name={<VscSymbolColor/>} action={props.switchTheme} />        
                </Style.Buttons>
            </Style.Content>
        </Style.Header>
    );
}
export default Header; 