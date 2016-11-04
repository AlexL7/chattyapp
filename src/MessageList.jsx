'use strict';

import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");

    const arr0fMessages = this.props.messages;;
    let count = 1;

    arr0fMessages.map((obj) => {
      count = obj.onlineCount
    });

    return (
      <div id = "message-list" >
        <div id = "onlineUsers" >
          Users Online: {count}
        </div> {
          arr0fMessages.map((obj, index) => {
              return (
                <Message key = {index}
                     message = {this.props.messages[index]}/>)
              })
          }

          <div className = "message system" >
        </div>
      </div>
      );
    }
  }
  export default MessageList;