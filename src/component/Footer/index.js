import React, { Component } from 'react'

export default class Footer extends Component {
  handleOnChange = (event) =>{
    if(event.target.checked) return this.props.taskCheck(1)
    else return this.props.taskCheck(2)
  }

  delAllCheckTasks = () =>{
    this.props.delAllCheckTasks()
  }
  render() {
    const {tasks} = this.props
    let total = tasks.length
    let checkedNum = tasks.reduce((pre,task)=>pre + (task.done ? 1 : 0),0)
    return (
      <div>
        <input type='checkbox' checked={total === checkedNum && total != 0 ? true : false} onChange={this.handleOnChange}></input> 当前任务数{checkedNum}\任务总数{total}
        <button onClick={this.delAllCheckTasks}>删除</button>
      </div>
    )
  }
}
