import React from 'react';

class LoginForm extends React.Component {
    constructor() {
      super();
      this.state = {author: '', comment: ''};

      this.onAuthorChange = this.onLoginChange.bind(this);
      this.onCommentChange = this.onPasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }    

    setStore(val) {
        const comments = JSON.parse(localStorage.getItem('comments'));
        comments.push(val);

        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // добавление комментария
	addComment() {
        if(this.state.author !== '' && this.state.comment !== '') {
            const data = {name:this.state.author, author: this.state.comment}
            this.setState(data);
            const todos = this.state.todos;            
           
        } else {
            alert('поля является обязательным! вы ввели пустое значение');
        }		
    }

    onCommentChange(event){
      this.setState({comment: event.target.value});
    }

    onAuthorChange(event) {
      this.setState({author: event.target.value});
    }

    render() {
      return (
        <form onSubmit={this.onSubmit}>
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
            <p><input type="submit" value="Submit" /></p>
        </form>
      );
    }
  }

export default LoginForm;