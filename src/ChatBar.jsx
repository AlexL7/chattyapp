'use strict';

import React, {Component} from 'react';



class ChatBar extends Component {

  render() {
    console.log("Rendering <ChatBar/>");

    return (
      <footer>
       <input
       id="username"
       type="text"
       placeholder="Your Name (Optional)"
       value = {this.props.currentUser.name} />

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