'use strict';

import React, {Component} from 'react';


//
class ChatBar extends Component {

  render() {
    console.log("Rendering <ChatBar/>");

    return (
      <footer>
        <input
        id="username"
        type="text"
        placeholder="Type your name and hit ENTER"
        onKeyPress={this.props.newUserName} />

       <input
       id="new-message"
       type="text"
       placeholder="Type a message and hit ENTER"
       onKeyPress={this.props.newMessage} />
      </footer>
    );
  }
}
export default ChatBar;