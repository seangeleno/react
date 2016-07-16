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
    <div className="commentBox">
      <h3>Comments</h3>
      <h4 className="comment-count">2 Comments</h4>
      <div className="comment-list">
        <Comment author="jimbo" body="great body" />
        <Comment author="jackson" body="i like beer" />
      </div>
    </div>
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
}
