import React, { Component } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import {NavLink,Route} from 'react-router-dom'
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
              <NavLink activeClassName="activeLink" className="list-group-item" to='/home'>home</NavLink>
              <NavLink activeClassName="activeLink" className="list-group-item" to='/about'>about</NavLink>
            </div>
            
          </div>
          <div className="col-lg-8">activeClassName="activeLink" 
            <div class='panel'>
              <div className="panel-body">
                <Header/>
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