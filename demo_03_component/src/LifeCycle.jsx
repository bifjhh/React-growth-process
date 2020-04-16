import React, { Component } from "react";


class LifeCycle extends Component {
  constructor(props) {
    console.warn('生命周期-->创建时(页面加载前) constructor');
    super(props)
  }
  render() {
    console.warn('生命周期--页面渲染时 render');
    return (
      <div>
        <h1>组件的生命周期</h1>
      </div>
    );
  }
  componentDidMount() {
    console.warn('生命周期--页面加载完成 componentDidMount');
  }
}

export default LifeCycle;
