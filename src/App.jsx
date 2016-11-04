'use strict';

import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


const ws = new WebSocket("ws://localhost:5000");

let newMessage = "";

// opening connecting to server
ws.onopen = function(ev) {
  console.log("Connected to server!");
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        name: "Anonymous"
      }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      messageSystem: undefined,
      onlineCount: 0
    };
  }




  componentDidMount() {
      console.log("componentDidMount <App />");
      console.log("Simulating incoming message");

      ws.onclients = (ev) => {
        console.on('in on clients')
        console.log(JSON.parse(ev.data));
      }

      ws.onmessage = (ev) => {
        const data = JSON.parse(ev.data);
        console.log(data);

        newMessage = JSON.parse(ev.data);
        console.log(`Date recieved : ${newMessage}`);
        // Add a new message to the list of messages in the data store
        const messages = this.state.messages.concat(newMessage)
          // Update the state of the app component.
          // Calling setState will trigger a call to render() in App and all child components.
        this.setState({
          messages: messages,
          onlineCount: data.onlineCount
        });
      }
    }



// Updating change in Username

  newUserName = (event) => {
    let newUser = 'Anonymous';
    newUser = {
      name: event.target.value
    };



    if (event.charCode == 13) {
      let notification = `${this.state.currentUser.name} changed their name to ${newUser.name}`;
      const updateUser = {
        type: "incomingNotification",
        content: notification
      }

      ws.send(JSON.stringify(updateUser));
      this.setState({
        currentUser: newUser
      });
    }
  }

// Composing new message and sending data to server
  newMessage = (event) => {
    if (event.charCode == 13) {
      console.log(`Content entered => ${event.target.value}`);
      const newMessage = {
        username: this.state.currentUser.name,
        content: event.target.value,
        type: "incomingMessage"
      };

      ws.send(JSON.stringify(newMessage));
    }
  }


// render the DOM through react
  render() {
    console.log("Rendering <App/>");
    return (
      <div className = "wrapper" >
        <nav>
          <h1> Chatty </h1>
        </nav>
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser}
                  newMessage = {this.newMessage}
                 newUserName = {this.newUserName}/>
      </div>
    );
  }
}

export default App;