import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    tasks:PropTypes.array.isRequired,
    taskChange:PropTypes.func.isRequired,
    taskDel:PropTypes.func.isRequired

  }
  render() {
    let {tasks,taskChange,taskDel} = this.props
    return (
          tasks.map((task)=>{
          return <Item key={task.id} task={task} taskChange={taskChange} taskDel={taskDel}></Item>
        })
     
    )
  }
}
