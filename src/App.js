import React, { Component } from 'react';
import './App.css';
import Numbers from "./Components/Numbers/Numbers";

class App extends Component {
  state ={
    numbers : [
        0, 0, 0, 0, 0
    ]
  };

  getRandomNumber = () =>
    Math.floor(Math.random() * (37 - 5) + 5);

  getNumbers = () => {
    let array = [];

    for(let i = 1; i < 6;){
      let number = this.getRandomNumber();
      if(array.includes(number)){
        continue;
      }
      array.push(number);
      ++i;
    }

    array.sort(function (a,b) {
      return a -b ;
    });

    let newArray = {...this.state};
    newArray.numbers = array;
    let numbers = newArray.numbers;
    this.setState({numbers});
  };

  render() {
    return (
        <div className="App">
          <button className='btn' onClick={this.getNumbers}>Render Number!</button>
          <div className='row'>
            <Numbers number={this.state.numbers[0]}/>
            <Numbers number={this.state.numbers[1]}/>
            <Numbers number={this.state.numbers[2]}/>
            <Numbers number={this.state.numbers[3]}/>
            <Numbers number={this.state.numbers[4]}/>
          </div>
          </div>
    );
  }
}

export default App;
