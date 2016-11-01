import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageBar from './MessageBar.jsx';



class App extends Component {
  constructor(props){
    super (props);
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div className ="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList/>
        <MessageBar/>
      </div>
    );
  }
}
export default App;
