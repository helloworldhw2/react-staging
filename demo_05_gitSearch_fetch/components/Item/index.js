import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Item extends Component {
    state = {
      items:[],
      isFirst:true,
      isLoading:false,
      err:''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('searchState',(_,data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  
  
  
  render() {
    const {isFirst,isLoading,items,err} = this.state
    return (
      isFirst ? <h1>欢迎登陆,请输入搜索内容</h1> :
      isLoading ? <h1>loading ......</h1> :
      err !== '' ? <h1 style={{color:'red'}}>`访问错误:${err}`</h1> : 
      items.map((item) =>{
        return (
          <div key={item.id} className="card">
            <a href={item.html_url} target="_blank" rel="noreferrer"/>
            <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
            <p className="card-text">{item.login}</p>
          </div>
        )
      })
    )
    // const {avatar_url,html_url,login} = this.props.items
    // return (
    //   items.map((item) =>{
    //     return 
    //   })
    // )
  }
}

export default Item;