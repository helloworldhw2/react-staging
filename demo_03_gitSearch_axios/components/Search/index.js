import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  handleClick = () => {
    this.props.getStates({isFirst:false,isLoading:true})
    const {inputValue:{value:keyWord}} = this
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        this.props.getStates({isLoading:false,items:response.data.items})
      },
      error => { this.props.getStates({isLoading:false,err:error.message})}
     )
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