import React from 'react';
import * as Style from './Style';
import CommentForm from '../../common/CommentForm/CommentForm';
import Comment from './Comment/Comment';



const Comments = (props) => {
    let commentsList = props.comments.map((value) => { if (value.filmId == props.filmId) return <Comment time ={value.time} deleteComment={props.deleteComment} name={value.userName} id={value.id} text={value.text}></Comment>; });
    return (
        <Style.Comments>
            <Style.Content>
            </Style.Content>
            <Style.Content>
                <Style.CommentsTitle>
                    Comments
                </Style.CommentsTitle>

                <Style.CommentsList>
                    {commentsList}
                </Style.CommentsList>

                <CommentForm setComment={props.setComment} filmId={props.filmId}></CommentForm>
            </Style.Content>
        </Style.Comments>);
}
export default Comments;