import React from 'react';
import * as Style from './Style';
import {VscClose} from 'react-icons/vsc';

const Comments = (props) => {
    return (
        <Style.Comment>
            <Style.Content>
                <Style.CommentData>
                    <Style.Name>{props.name}</Style.Name>
                    <Style.Button onClick={() => { props.deleteComment(props.id) }}><VscClose/></Style.Button>
                </Style.CommentData>
                <Style.Text>
                    {props.text}
                </Style.Text>
                <Style.Time>{props.time}</Style.Time>
            </Style.Content>
        </Style.Comment>);
}
export default Comments;