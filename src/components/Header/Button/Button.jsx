import React from 'react';
import * as Style from './Style';

const Button = (props) => {
    return (
        <Style.Button onClick={()=>props.action()}>
            <Style.Content>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.Content>
        </Style.Button>
    );
}
export default Button; 