import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickNumber: 0,
      color: '',
    }
  }

  handleClick() {
    let newColor;

    this.setState((state, _props) => ({
      clickNumber: state.clickNumber + 1,
    }));

    if (this.state.clickNumber % 2 !== 0) newColor = 'green';
     else newColor = 'red';

    this.setState(({
      color: newColor,
    }));
  }


  render(){
    return(
      <div className="App">
        <button onClick={ this.handleClick }>Click</button>
        <p style={{color: this.state.color}}>{this.state.clickNumber}</p>
      </div>
    )
  }


  // ##############################
  // constructor() {
  //   super()
  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleClickBtn2 = this.handleClickBtn2.bind(this);
  //   this.state = {
  //     click: 0,
  //     clickBtn2: 0,
  //     clickBtn3: 0,
  //   }
  // }

  // handleClick() {
  //   this.setState((state, _props) => ({
  //     click: state.click + 1,
  //   }))
  // }

  // handleClickBtn2() {
  //   this.setState((state, _props) => ({
  //     clickBtn3: state.clickBtn3 + 1,
  //   }))
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <button onClick={() => this.handleClick()}>Click</button>
  //       <button onClick={() => {this.setState((state, _props) => ({clickBtn2: state.clickBtn2 + 1}))}}>{this.state.clickBtn2}</button>
  //       <button onClick={ this.handleClickBtn2 }>{this.state.clickBtn3}</button>
  //       <p>{this.state.click}</p>
  //     </div>
  //   );
  // }

// ##############################
  // constructor() {
  //   super()
  //   this.handleClick = this.handleClick.bind(this);
  //   this.state = {
  //     name: 0
  //   }
  // }

  //   handleClick(nome, _event) {
  //   this.setState((_estadoAnterior, _props) => ({
  //     name: nome
  //   }));
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <button onClick={() => this.handleClick('Anderson')}>Click</button>
  //       <p>{this.state.name}</p>
  //     </div>
  //   );
  // }

  // ##############################

  // constructor() {
  //   super()
  //   this.handleClick = this.handleClick.bind(this);
  //   this.state = {
  //     clickNumber: 0
  //   }
  // }
  

  // handleClick(event) {
  //   this.setState((estadoAnterior, _props) => ({
  //     clickNumber: estadoAnterior.clickNumber + 1
  //   }));
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <button onClick={this.handleClick}>Click</button>
  //       <p>{this.state.clickNumber}</p>
  //     </div>
  //   );
  // }
 
}

export default App;
