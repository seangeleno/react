class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="content-form-fields">
          <input placeholder="Name: " ref={ (input) => this._author = input } />
          <textarea placeholder="Comment:" ref={ (textarea) =>  this._body = textarea }  ></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }
}

  _handleSubmit(event){
    event.preventDefault();

    let author = this._author;
    let  body = this._body;

    this.props.addComment(author.value, body.value);
  }
}

  class CommentBox extends React.Component {
    render() {
      return(
        /*
        JSX goes here
        */
        <div className="comment-box">
          <CommentForm addComment={this._addComment.bind(this)} />
        </div>
      )
    }
  }

  _addComment(author, body){
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat]});
  }
