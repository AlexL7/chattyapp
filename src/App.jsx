'use strict';

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


const ws = new WebSocket("ws://localhost:5000");

let newMessage ="";

  ws.onopen = function(ev){
  console.log("Connected to server!");
};

ws.onmessage = function(ev) {
   newMessage = ev.data;
   console.log("in onmessage with message below");
  console.log(newMessage);
}


class App extends Component {

  constructor(props){
    super (props);
    this.state = {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
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
    console.log("Simulating incoming message");

    ws.onmessage = (ev) => {
    newMessage = ev.data;
    console.log(`Date recieved : ${newMessage}`);
     // Add a new message to the list of messages in the data store
    newMessage = JSON.parse(newMessage);
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages});
  }
}
//
  newUserName = (event) => {
    let newUser = 'Anonymous';
    newUser ={name: event.target.value};
    if(newUser.name.length > 1){
      this.setState({currentUser:newUser});
      console.log('Username Updated to :', newUser);
      const message = this.state.messages.concat(newMessage);

    }
  }

  newMessage = (event)=> {
    if(event.charCode==13){
      console.log(`Content entered => ${event.target.value}`);
      const newMessage = {username: this.state.currentUser.name,
                          content: event.target.value};

      ws.send(JSON.stringify(newMessage));
      //const message = this.state.messages.concat(newMessage);
      //this.setState({messages:message});
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
                  newMessage ={this.newMessage}
                  newUserName ={this.newUserName} />
      </div>
    );
  }
}

export default App;