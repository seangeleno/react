  class CommentBox extends React.Component {
    ...
    render(){

      let buttonText = "Show comments";

      if (this.state.showComments) {
        buttonText = "Hide Comments";
        ...
      }

      return (
      /*<button onClick={this._handleClick.bind(this)}>Show comments</button> */
      <button onClick={this._handleClick.bind(this)}>{ buttonText }</button>
      ...);
    };
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
}
