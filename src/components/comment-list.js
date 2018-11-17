import React from 'react';
import CommentBox from './comment-box';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css';

class CommentList extends React.Component {

    render() {
        return (		
            <div className="comments-list">
                <CommentBox/>
            </div>	
        )
    }
    
}

export default CommentList;


