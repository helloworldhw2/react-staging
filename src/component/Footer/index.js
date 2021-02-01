import React, { Component } from 'react'

export default class Footer extends Component {
  handleOnChange = (event) =>{
    if(event.target.checked) return this.props.taskCheck(1)
    else return this.props.taskCheck(2)
  }
  render() {
    return (
      <div>
        <input type='checkbox' onChange={this.handleOnChange}></input> 当前任务数{}\任务总数{this.props.allTaskNum}
      </div>
    )
  }
}
