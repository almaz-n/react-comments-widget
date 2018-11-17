import React from 'react';
import CommentItem from './comment-item';
import CommentForm from './comment-form';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css';

class App extends React.Component {

    constructor() {
        super();

        this.commentsList = JSON.parse(localStorage.getItem('comments'));
    }

    render() {
        const data = this.commentsList;        
        var newsTemplate;
        
        console.log(data);

        if(data) {
            if(data.length) {
                newsTemplate = data.map(function(item) {
                   return (
                        <CommentItem {...item}/>
                   )
                })
            } 
        } else {
            newsTemplate = <p>Комментариев нет</p>
        }
        

        return (		
            <div className="articles">
                <h1>Комментарии</h1>                
                {newsTemplate}

                <p>Добавить комментарий</p>
                <CommentForm comments={this.commentsList}/>
            </div>	
        )
    }
    
}

export default App;