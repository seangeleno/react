class Comment extends React.Component {
    /*
  2 methods predefined from React and 1 newly created one

  constructor defines this.state ie {} and cals super() method
  */
    constructor() {
        super();
        this.state = {
            isAbusive: false
        };
    }
    /*render() verifies if abusive and then instantiates commentBody and sets it to the result of hte T/F*/
    render() {
        let commentBody;
        /*if its not abusive hen do this*/
        if (!this.state.isAbusive) {
            commentBody = this.props.body;

        } else {/*but if if it is abusive mark it as abusive*/
            commentBody = <em>Content marked as abusive</em>;
        }

        return (
        /*This is the actual HTML or JSX that we want if all conditions above are satisfied
      order goes comment > comment-header, comment-body, comment-actions
      */ < div className = "comment" > <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`}/> < p className = "comment-header" > {
            this.props.author
        } < /p>
      <p className="comment-body">
        {commentBody}
      </p > <div className="comment-actions">
            <a href="#">Delete comment</a>
            <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
        </div> < /div>
  );
}

_toggleAbuse(event) {
  event.preventDefault();
      /* this.setState will be repeated throughout(4 x in this case)1. checks and if is one does the other and vice versa an object is passed as a paramter of this.setState with the variable ot check for then by doing !this.state.SOMEPARAMETER */

  this.setState({
    isAbusive: !this.state.isAbusive
    });
  }
}

class CommentBox extends React.Component {
  constructor() {
    super();
    /* second this.state */
    this.state = {
      showComments: false,
      comments: [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!', avatarUrl: 'images/default-avatar.png' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff', avatarUrl: 'images/default-avatar.png' }
      ]
    };
  }

  render() {
    const comments = this._getComments();
    return(
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} / > <h3>Comments</h3>
            {
            this._getPopularMessage(comments.length)
        } < h4 className = "comment-count" > {
            this._getCommentsTitle(comments.length)
        } < /h4>
        <div className="comment-list">
          {comments}
        </div > </div>);
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
            return (
                <div>This post is getting really popular, dont miss out!</div>
            );
        }
    }

    _getComments() {
        /*doesnt verify just goes ahead and returns a map() method, which itself uses comment as a parameter and returns our first Component Comment binding the parameters of the comment to those of the user*/
        return this.state.comments.map((comment) => {
            return (<Comment author={comment.author} body={comment.body} avatarUrl={comment.avatarUrl} key={comment.id}/>);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }

    _addComment(commentAuthor, commentBody) {
        let comment = {
            id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
            author: commentAuthor,
            body: commentBody
        };

        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }
}

class CommentForm extends React.Component {

    constructor() {
        super();
        /*third this.state*/
        this.state = {
            characters: 0
        };
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>New comment</label>
                <div className="comment-form-fields">
                    <input placeholder="Name:" ref={input => this._author = input}/>
                    <textarea placeholder="Comment:" ref={textarea => this._body = textarea} onKeyUp={this._getCharacterCount.bind(this)}></textarea>
                </div>
                <p>{this.state.characters}
                    characters</p>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();

        this.props.addComment(this._author.value, this._body.value);

        this._author.value = '';
        this._body.value = '';

        this.setState({characters: 0});
    }

    _getCharacterCount() {
        this.setState({characters: this._body.value.length});
    }
}
