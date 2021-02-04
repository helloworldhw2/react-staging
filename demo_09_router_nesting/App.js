import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

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
              <MyNavLink to="/clin/home" id={1} sex='man'>home</MyNavLink>
              <MyNavLink to="/clin/about">about</MyNavLink>
            </div>
            
          </div>
          <div className="col-lg-8">
            <div className='panel'>
              <div className="panel-body">
                <Header/>
                <Switch>
                  <Route path='/clin/home' component={Home}></Route>
                  <Route path='/clin/about' component={About}></Route>
                  <Redirect to='/clin/about'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export default App;