import React from 'react';
import * as Style from './Style';

const StatisticItem = (props) => {
    return (
        <Style.StatisticItem>
            <Style.Icon>{props.icon}</Style.Icon>
            <Style.Text>{props.text}</Style.Text>
        </Style.StatisticItem>
    );
}

export default StatisticItem;