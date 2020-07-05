import React, {Component} from 'react';
import Lifecycle from "./test/lifecycle";
import './App.css';

class App extends Component {
  state = {
    visible: true,
    ignoreProp: 0,
  };

  ignoreProp = () => this.setState({
    ignoreProp: Math.random()
  });

  render() {
    return(
    <div className="App">
      {this.state.visible ? <Lifecycle ignoreProp={this.state.ignoreProp}/> : null}
      <button onClick={this.ignoreProp}>ignoreProp</button>
      <button onClick={()=>{this.setState({visible: !this.state.visible});}}>
        toggle counter
      </button>
    </div>)
  }
}
export default App;
