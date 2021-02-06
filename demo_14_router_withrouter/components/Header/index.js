import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  goback = () =>{
    this.props.history.goBack()
  }
  forward = () =>{
    this.props.history.goForward()
  }
  render() {
    return (
      <div>
        <h1>Header component</h1>
        <button onClick={this.goback}>back</button>
        <button onClick={this.forward}>forword</button>
      </div>
    )
  }
}

export default withRouter(Header)