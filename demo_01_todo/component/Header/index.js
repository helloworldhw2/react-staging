import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'


export default class Header extends Component {
  static propTypes = {
    addTask:PropTypes.func.isRequired
  }
  handlekeyUp = (event)=>{
    const {target,keyCode} = event
    if(keyCode !== 13) return
    if(target.value.trim() === ''){
      alert('请输入内容')
      return
    }
    this.props.addTask({id:nanoid(),name:target.value,done:false})
    target.value = ""
  }
  render() {
    return (
      <div>
        <input type='text' placeholder='请输入任务' onKeyUp={this.handlekeyUp}></input>
      </div>
    )
  }
}
