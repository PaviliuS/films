import React from 'react';
import * as Style from './Style';
import {VscVm,VscSave,VscSymbolFile} from 'react-icons/vsc';

const Torrent = (props) => {
    return (
        <Style.Torrent href={props.href}>
            <Style.Content>
                <Style.Icon><VscVm/></Style.Icon>
                <Style.Text>{props.quality}</Style.Text>
            </Style.Content>
            <Style.Content>
                <Style.Icon><VscSymbolFile/></Style.Icon>
                <Style.Text>{props.type}</Style.Text>
            </Style.Content>
            <Style.Content>
                <Style.Icon><VscSave/></Style.Icon>
                <Style.Text>{props.size}</Style.Text>
            </Style.Content>
        </Style.Torrent>
    );
}
export default Torrent ;