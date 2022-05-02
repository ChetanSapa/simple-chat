import React from 'react'

class ListItem extends React.Component {
  render() {
    return (
      <div className="list__item">
       {this.props.data.text}   
      </div>
    );
  }
  
}

export default ListItem;