import React, { Component } from 'react';
import Item from '../Item'
import './index.css'

class List extends Component {
  render() {
    return (
      <div className="row">
        <Item items={this.props.state}/>
      </div>
    );
  }
}

export default List;