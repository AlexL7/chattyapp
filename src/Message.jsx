import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");

    var arrOfMessages = this.props.messages;

    return (
       <div className="message">
         <span className="username">{arrOfMessages[0].username} </span>
         <span className="content">I won't be impressed with technology until I can download food.</span>
       </div>
    );
  }
}
export default Message;


