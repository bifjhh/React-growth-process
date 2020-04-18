import React, { Component } from "react";

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
        <div>num:{this.state.num}</div>
        <button onClick={this.addNum}>+1</button>
        <button onClick={this.update}>强制更新</button>
      </div>
    );
  }
  componentDidMount() {
    console.warn("生命周期--页面加载完成 componentDidMount");
  }
  componentDidUpdate() {
    console.warn("生命周期--页面更新完成");
  }
}

export default LifeCycle;
