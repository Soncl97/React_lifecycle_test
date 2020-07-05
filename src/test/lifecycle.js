import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    return <div/>;
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("-----------------------------------------------");
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("-----------------------------------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log("Should Component Update - Do not Render");
      return false;
    }
    console.log("Should Component Update - Render");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("Component Did Update");
    console.log("---------------------------------------------");
  }

  increament = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreament = () => {
    this.setState({
      count: this.state.count -1
    });
  }

  render() {
    console.log("render");
    return(
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increament}>increament</button>
        <button onClick={this.decreament}>decreament</button>
      </div>
    )
  }
}

export default Lifecycle;