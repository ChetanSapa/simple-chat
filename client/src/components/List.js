import React from 'react'
import ListItem from './List-item';

class List extends React.Component {
  render() {
    return this.props.messages.map(message => <ListItem className key={message.id} data={message}/>);
  }
  
}

export default List;