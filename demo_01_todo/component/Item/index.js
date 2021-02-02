import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {flag:false}
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({flag:flag})
    }
  }
  
  handlechangeState = (id) =>{
    return (event) =>{
      this.props.taskChange(id,event.target.checked)
    }
  }

  handleOnClick = (id) =>{
    if(window.confirm('确定删除吗?')){
    this.props.taskDel(id)
    }
  }
  
  render() {
    let {id,name,done} = this.props.task
    return (
      <div style={{backgroundColor: this.state.flag===true ? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <input type='checkbox' checked={done} onChange={this.handlechangeState(id)}/>
        <span>{name}</span><button onClick={() =>{ this.handleOnClick(id)}} style={{display:this.state.flag===true?'block':'none'}}>删除</button>
        
      </div>
    )
  }
}
