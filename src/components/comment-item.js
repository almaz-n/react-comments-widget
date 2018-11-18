import React from 'react';

const CommentItem = (props) => {

    return ( 
        <li className="articles-list__item" id={props.id}>        
            <p><b>Автор: {props.author}</b></p>
            <p>Комментарий: {props.comment}</p>
            <date>Дата: {props.date}</date>
            <button 
                    className="js-delete-comment" 
                    title="удалить" 
                    onClick={
                        () => {
                            props.deleteComment(props.id)
                        }
                    }
            >x</button>
        </li>
    )
}

export default CommentItem;