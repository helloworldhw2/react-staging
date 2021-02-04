import React, { Component } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink';
import News from './News'
import  Message from './Message'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div><h1>Home component</h1></div>
          <ul className='nav nav-tabs'>
            <li><MyNavLink to="/clin/home/news">news</MyNavLink></li>
            <li><MyNavLink to="/clin/home/message">message</MyNavLink></li>
          </ul>
        </div>
        <div className="row">
          <Switch>
            <Route path="/clin/home/news" component={News}/>
            <Route path="/clin/home/message" component={Message}/>
            <Redirect to='/clin/home/news'></Redirect>
          </Switch>
        </div>
      </div>
      
     
    )
  }
}

export default Home;