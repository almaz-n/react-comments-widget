import React from 'react';

class CommentForm extends React.Component {
    constructor() {
      super();
      this.state = {author: '', comment: ''};

      this.onAuthorChange = this.onLoginChange.bind(this);
      this.onCommentChange = this.onPasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }    

    // добавление новых комментариев в localStorage
    setStore(comment) {
        const comments = this.props.comments;

        if(!comments) {
            comments = [];
        }
        
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // добавление комментария, событие отправки формы
	addComment() {
        var authorVal = this.state.author.trim();
        var commentVal = this.state.comment.trim();

        // проверяем на заполненность полей автор комментарий
        if(authorVal && commentVal) {
            const data = {
                author : authorVal, 
                comment: commentVal
            }

            this.setState(data);          
        } else {
            alert('поля является обязательным! вы ввели пустое значение');
        }		
    }

    // событие изменения поля автор
    onAuthorChange(event) {
        this.setState({
            author: event.target.value
        });
    }

    // событие изменения поля комментарий
    onCommentChange(event){
      this.setState({
          comment: event.target.value
        });
    }    

    render() {
      return (
        <form onSubmit={this.addComment}>
            <p>
                <label> Автор: <input   type="text" name="author" 
                                        value={this.state.author}
                                        onChange={this.onAuthorChange}
                                />
                </label>
            </p>
            <p>
                <label> Комментарий: <input type="text" name="comment" 
                                            value={this.state.comment}
                                            onChange={this.onCommentChange}
                                      />
                </label>
            </p>
            <p><button type="submit">Добавить комментарий</button></p>
        </form>
      );
    }
  }

export default CommentForm;