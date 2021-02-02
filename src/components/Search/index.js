import React, { Component } from 'react';

class Search extends Component {
  handleClick = () => {
    console.log(this.inputValue.value)
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