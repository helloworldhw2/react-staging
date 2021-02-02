import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  axiosTestStudent = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('success',response.data)},
      error => {console.log('error',error)}
    )
  }
  axiosTestCar = () => {
    axios.get('http://localhost:3000/api2/car').then(
      response => {console.log('success',response.data)},
      error => {console.log('error',error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.axiosTestStudent}>testStudent</button>
        <button onClick={this.axiosTestCar}>testCar</button>
      </div>
    );
  }
}

export default App;
