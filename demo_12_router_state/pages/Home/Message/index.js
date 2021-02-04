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
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((messObj) => {
             return (
              <li key={messObj.id}>
                <Link to={{pathname:'/clin/home/message/detail',state:{id:messObj.id,tatil:messObj.tatil}}}>{messObj.tatil}</Link>
              </li>
             )
            })
          }
        </ul>
        <hr/>
        <Route path="/clin/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}

export default Message;