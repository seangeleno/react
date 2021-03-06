# Handling Data Changes with State

1. Direct vs Indirect DOM Maniuplation

# Things such as Backbone and jQuery manipulate the DOM directly

## whereas React does not modify the DOM directly, instead the user modifies a component state object in response to user events and let React handle updates to the DOM.

```javascript
class CommentBox extends React.Component {
  render(){
    const comments = this._getComments();
    if (this.state.showComments) {
      // add more code for displayingcomments
    }
    return (
      <div className="comment-box">
        <h4 className="h4">{ this._getCommentsTitle }<h4>
        <div className="comment-list">{ comments }
      </div>

    );
  }
}
```
The state is a JS object that lives inside each component. We can access it via __this.state__

# Hiding Comments on the Initial State

###  CONSTRUCTORS STARTs WITH SUPER();
```javascript
class CommentBox extends React.Component {
  constructor(){
    super();

    this.state = {
      showComments: false;
    }
  }
}
```
# State represents data that changes over time

# We update state by calling *this.setState()*

# We declare an initial state in the component constructor
