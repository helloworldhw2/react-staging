import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Detail from "../Detail"


class Message extends Component {
  state = {
    messageArr:[
    {id:1,tatil:"message1"},
    {id:2,tatil:"message2"},
    {id:3,tatil:"message3"},
    ]
  }

  pushLink = (id,tatil) => {
    //push跳转 params参数
    // this.props.history.push(`/clin/home/message/detail/${id}/${tatil}`)
    //push跳转 search参数
    // this.props.history.push(`/clin/home/message/detail?id=${id}&tatil=${tatil}`)
    //push跳转 state参数
    this.props.history.push("/clin/home/message/detail",{id,tatil})
  }

  replaceLink = (id,tatil) => {
    this.props.history.replace("/clin/home/message/detail",{id,tatil})
  }
  goback = () =>{
    this.props.history.goBack()
  }
  forward = () =>{
    this.props.history.goForward()
  }
  render() {
    const {messageArr} = this.state
   
    return (
      <div>
        <ul>
          {
            messageArr.map((messObj) => {
             return (
              <li key={messObj.id}>
                <Link to={{pathname:"/clin/home/message/detail",state:{id:messObj.id,tatil:messObj.tatil}}}>{messObj.tatil}</Link>
                <button onClick={()=>{this.pushLink(messObj.id,messObj.tatil)}}>push</button>
                <button onClick={()=>{this.replaceLink(messObj.id,messObj.tatil)}}>replace</button>
              </li>
             )
            })
          }
        </ul>
        <hr/>
        <Route path="/clin/home/message/detail" component={Detail}></Route>
        <button onClick={this.goback}>back</button>
        <button onClick={this.forward}>forword</button>
      </div>
    )
  }
}

export default Message;