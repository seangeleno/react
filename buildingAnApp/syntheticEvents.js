class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="content-form-fields">
          <input placeholder="Name: " />
          <textarea placeholder="Comment:"></textarea>
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
}
