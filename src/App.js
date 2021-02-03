import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import {Link,Route} from 'react-router-dom'
// import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div  className='col-lg-6 page-header'><h2>router is coming</h2></div>
        </div>
        <div className='row'>
          <div className="col-lg-4">
            <div className="list-group">
              <Link class="list-group-item" to='/home'>home</Link>
              <Link class="list-group-item" to='/about'>about</Link>
            </div>
            
          </div>
          <div className="col-lg-8">
            <div class='panel'>
              <div className="panel-body">
                <Route path='/home' component={Home}></Route>
                <Route path='/about' component={About}></Route>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export default App;