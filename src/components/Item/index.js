import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noreferrer"/>
        <img alt="head_portrait" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3167217747,615342072&fm=11&gp=0.jpg" style={{width: '100px'}}/>
        <p className="card-text">reactjs</p>
      </div>
    );
  }
}

export default Item;