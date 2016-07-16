class Comment extends React.Component {
  render() {
    return (
        <div className="comment">
        <p className="comment-header">
          Anne Droid
        </p>
        <p class="commend-body">
          I wanna know what love is...
        </p>
        <div class="comment-footer">
          <a href="#" class="comment-footer-delete">
            Delete Comment
          </a>
        </div>
      </div>
    );
  }
}
