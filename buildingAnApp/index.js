/* React Components will always begin with a class, extension, React.Component, render(){} and return()*/

/*
  class newComponent extends React.Component {
    render() {
      return ();
    }
  }
*/

//myFirst component #comment

  class CommentComponent extends React.Component{
    render(){
      const comments = this._getComments();
      return(
      <div className="commentBox">
        <h3>Comments</h3>
        /*<h4 className="comment-count">There are this many ==> {comments.length} comments</h4> */
        <h4 className="comment-count">
        {this.getCommentsTitle(comments.length)}
        </h4>
        <div className="comment-list">
           {comments} /*jsx renders arrays*/
        </div>
      </div>
    );

    _getComments() {
      const commentList = [
        {id: 1, auhor: "Morgan Freeman", body: "Great stuff!"},
        {id: 2, auhor: "John Morgan", body: "Terrible stuff!"}
      ];

      return commentList.map(( comment )=> {
        return (
          /*important to include key to keep track of sequential comments*/
          <Comment
          author={comment.author}
          body={comment.body}
          key={ comment.id }
          avatarUrl={ comment.avatarUrl }
          />);
      });
    }
  }

  _getCommentsTitle(commentCount){
      if (commentCount === 0 || !commentCount) {
        return "No comments yet";
      } else if (commentCount === 1 ) {
        return '1 comment';
      } else {
        return '${commentCount} comments';
      }
  }


  class Comment extends React.Component {
    render(){
      return (
        <div className="comment">
          <p className="comment-header">
            {this.props.author}
          </p>
          <div className="comment-actions">
            <a href="#">Delete comment</a>
          </div>
        </div>
      );
    }
    _getComments() {
      const commentList = [
        {id: 1, auhor: "Morgan Freeman", body: "Great stuff!"},
        {id: 2, auhor: "John Morgan", body: "Terrible stuff!"}
      ];
      /*map() method requires one argument, a function that accepts a single argument
       representing the current item in the array.*/
      return commentList.map(( comment )=> {
        return (
          /*important to include key to keep track of sequential comments*/
          <Comment author={comment.author} body={comment.body} key={ comment.id } />
        );
      });
    }
  }
  ========

  class CommentBox extends React.Component {
  render() {
    const comments = this._getComments() || [];
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{comments.length} comments</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl:'images/default-avatar.png' },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...' , avatarUrl:'images/default-avatar.png' }
    ];

    return commentList.map((comment) => {
      return  <Comment author={comment.author} body={comment.body} key={ comment.id } avatarUrl={comment.avatarUrl} />
    });
  }
}

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}
