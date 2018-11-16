import React from 'react';
import CommentItem from './comment-item';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css';

class App extends React.Component {

    constructor() {
        super();
        
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
        var newsTemplate;
        
        console.log(data);

        if(data.length) {
            newsTemplate = data.map(function(item) {
               return (
                    <CommentItem {...item}
                />
               )
            })
        } else {
            newsTemplate = <p>Комментарий нет</p>
        }

        return (		
            <div className="articles">
                <h1>Комментарии</h1>                
                {newsTemplate}
            </div>	
        )
    }
    
}

export default App;