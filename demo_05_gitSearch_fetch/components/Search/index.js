import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Search extends Component {
   handleClick = async () => {
    PubSub.publish('searchState',{isFirst:false,isLoading:true})
    const {inputValue:{value:keyWord}} = this
    // fetch 访问方式
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log("服务器连接成功")
    //     return response.json()
    //   },
    //   error => {
    //     console.log("服务器连接失败 ",error)
    //     return new Promise(()=>{})
    //   }
    // ).then(
    //   response => console.log("data is ",response),
    //   error => console.log("获取数据失败",error)
    // )

    //fetch方式优化1
    // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log("服务器连接成功")
    //     return response.json()
    //   }
    // ).then(
    //   response => console.log("data is ",response),
    // ).catch(
    //   error => console.log("访问失败",error)
    // )

    //fetch方法优化2
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('searchState',{isLoading:false,items:data.items})
      console.log(data)
    } catch (error) {
      console.log("访问失败",error)
      PubSub.publish('searchState',{isLoading:false,err:error.message})
    }



    // axios 访问方式
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response => PubSub.publish('searchState',{isLoading:false,items:response.data.items}),
    //   error => PubSub.publish('searchState',{isLoading:false,err:error.message})
    // )
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.inputValue =c} type="text" placeholder="enter the name you search"></input>&nbsp;<button onClick={this.handleClick}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;