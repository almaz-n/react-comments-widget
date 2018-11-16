import React from 'react';
import CommentItem from './comment-item';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css';

class App extends React.Component {

    constructor() {
        super();
                // [
        //     {s: 1},
        //     {e: 2}
        // ]

        this.commentsList = JSON.parse(localStorage.getItem('comments'));
        if(!this.commentsList) {
            localStorage.setItem('comments', JSON.stringify([]));
        } 
    }

    setStore(val) {
        const comments = JSON.parse(localStorage.getItem('comments'));
        comments.push(val);

        localStorage.setItem('comments', JSON.stringify(comments));
    }

    render() {
        const data = this.commentsList;
        console.log(data);

        return (		
            <div className="articles">
                <h1>Комментарии</h1>                

                {commentList}
            </div>	
        )
    }
    
}

export default App;