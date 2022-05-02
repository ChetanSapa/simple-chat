import React from 'react'
import ListItem from './List-item';

class List extends React.Component {
    render() {
        return (
            <div className='list'>
                {this.props.messages.map(message => <ListItem className='list__item' key={message.id} data={message} />)}
            </div>
        )
    }

}

export default List;