'use strict';

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props){
    super (props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",

        },
        {
          username: "Anonymous",

          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }


  componentDidMount (){
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 2000);
  }

  onKeyPress(event){
    if(event.charCode==13){
      console.log(`Content entered => ${event.target.value}`);
      const newMessage = {username: this.state.currentUser.name,
                          content: event.target.value};
      const message = this.state.messages.concat(newMessage);
      this.setState({messages:message});
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div className ="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages ={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser}
                  newMessage ={this.onKeyPress.bind(this)}/>
      </div>
    );
  }
}

export default App;
