import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageBar from './MessageBar.jsx';

var data = {
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
  ],
};

class App extends Component {

  constructor(props){
     super (props);
    this.state = {loading:true};

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})  // change the state. this calls render() and the component updates.
    }, 3000)
  }

  render() {
    console.log("Rendering <App/>");

    if(this.state.loading){
      return <h1>loading...</h1>
    } else {
    return (
      <div className ="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList/>
        <MessageBar/>
      </div>
    ); }
  }
}
export default App;
