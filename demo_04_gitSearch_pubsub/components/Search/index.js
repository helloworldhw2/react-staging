import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'

class Search extends Component {
  handleClick = () => {
    PubSub.publish('searchState',{isFirst:false,isLoading:true})
    const {inputValue:{value:keyWord}} = this
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => PubSub.publish('searchState',{isLoading:false,items:response.data.items}),
      error => PubSub.publish('searchState',{isLoading:false,err:error.message})
    )}
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