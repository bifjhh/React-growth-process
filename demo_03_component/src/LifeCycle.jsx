import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>num:{this.props.num}</div>
    )
  }

  componentWillUnmount() {
    console.warn("生命周期--页面卸载 componentWillUnmount");
  }
}

class LifeCycle extends Component {
  constructor(props) {
    console.warn("生命周期-->创建时(页面加载前) constructor");
    super(props);
    this.state = {
      num: 0
    };
  }

  addNum = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  update = () => {
    this.forceUpdate();
  };
  render() {
    console.warn("生命周期--页面渲染时 render");
    return (
      <div>
        <h1>组件的生命周期</h1>
        {
          this.state.num>2?'组件卸载': (
            <div>
              <Counter num={this.state.num} />  
              <button onClick={this.addNum}>+1</button>
            </div>
          )
        }
        <button onClick={this.update}>强制更新</button>
      </div>
    );
  }
  componentDidMount() {
    console.warn("生命周期--页面加载完成 componentDidMount");
  }
  componentDidUpdate() {
    console.warn("生命周期--页面更新完成 componentDidUpdate");
  }
}

export default LifeCycle;
