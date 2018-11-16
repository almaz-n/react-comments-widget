import React from 'react';

const CommentItem = (props) => {

    return ( 
        <li className="articles-list__item" id={props.id}>        
            <p><b>Автор: {props.author}</b></p>
            <p>{props.text}</p>
            <date>Дата: {props.date}</date>
            <button className="js-delete-comment">x</button>
        </li>
    )
}

export default CommentItem;