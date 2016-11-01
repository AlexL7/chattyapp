'use strict';

import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    const arr0fMessages = this.props.messages;
    return (
      <div id="message-list">
        {
          arr0fMessages.map((obj, index)=> {
            return (<Message key ={index} message = {this.props.messages[index]}/>)
        })}

       <div className="message system">
        Anonymous1 changed their name to nomnom.
       </div>
      </div>
    );
  }
}
export default MessageList;
