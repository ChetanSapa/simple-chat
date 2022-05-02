import './App.css';
import React from 'react'
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
  state = {
    messages: []
  }
  componentDidMount() {
    this.fetchAllMessages()
  }
  fetchAllMessages = () => {
    fetch('/api/messages').then(response => response.json()).then(messages => {
      this.setState({ messages })
    })
  }
  addNewMessage = (text) => {
    fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => this.fetchAllMessages())
  }
  render() {
    const { messages } = this.state
    return (
      <div className="app">
        <h1 className='title'><span>another brick in </span>The Wall</h1>
        <Form addNewMessage={this.addNewMessage} />
        <List messages={messages} />
      </div>
    );
  }

}

export default App;
