import React from 'react';

class CommentForm extends React.Component { 
    constructor(props) {
        super(props);
    } 

    render() {        
      return (
        <form onSubmit={
                (e) => { 
                    this.props.addComment(e); 
                }
            }
        >
            <p>
                <label> 
                    Автор: 
                    <input  
                        type="text" 
                        name="author" 
                        value={this.props.author}
                        onChange={(e) => { 
                                this.props.onAuthorChange(e); 
                            }
                        }
                    />
                </label>
            </p>
            <p>
                <label> 
                    Комментарий: 
                    <textarea 
                        type="text" 
                        name="comment" 
                        value={this.props.comment}
                        onChange={(e) => {
                                this.props.onCommentChange(e)
                            }   
                        }
                    ></textarea>
                </label>
            </p>
            <p>
                <button type="submit" className="form-button">Добавить комментарий</button>
            </p>
        </form>
      );
    }
}

export default CommentForm;