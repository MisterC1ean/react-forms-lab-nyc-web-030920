import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  changeContent = (event) => {
    this.setState({content: event.target.value})
  }

  render() {
    // console.log(this.state)
    // console.log(this.props)

    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.content} onChange={this.changeContent} type="text" name="message" id="message" />
        <p>Remaining Characters: {this.props.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
