import React, { Component } from 'react';
import Search from './components/Search'
import List from './components/List'
class App extends Component {
    state = {
        items:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
   

    getStates = (stateObj) =>{
        this.setState(stateObj)
    }
  render() {
    return (
      <div className="container">
        <Search getStates={this.getStates}/>
        <List state={this.state}/>
      </div>
    );
  }
}

export default App;