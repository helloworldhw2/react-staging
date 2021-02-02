import React, { Component } from 'react';
import Item from '../Item'
import './index.css'

class List extends Component {
  render() {
    return (
      <div className="row">
        <Item/>
      </div>
    );
  }
}

export default List;