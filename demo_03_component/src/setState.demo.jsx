import React, { Component } from "react";

class SetStateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      age: 20
    };
  }
  addNum = () => {
    this.setState({
      num: this.state.num + 1
    });
    console.log("num:", this.state.num);

    this.setState({
      num: this.state.num + 1
    });
    console.log("num2:", this.state.num);
  };
  addAge = () => {
    // 推荐语法
    this.setState((state, props) => {
      return {
        age: state.age + 1
      };
    });

    // state 代表当前最新的state 所以这里可以用最新的数据操作
    this.setState((state, props) => {
      return {
        age: state.age + 1
      };
    }, ()=> console.log('数据更新完成:', this.state.age));

/*     // 其他方法
    const state = {
      age: this.state.age + 1 // 这里取this.state内的数据
    };

    state.age += 1; // 这里使用更新后的数据
    // this.setState(state); */
  };
  render() {
    console.log("render");

    return (
      <div>
        <h1>setState num:{this.state.num}</h1>
        <button onClick={this.addNum}>num+1</button>
        <h1>setState age:{this.state.age}</h1>
        <button onClick={this.addAge}>age+1</button>
      </div>
    );
  }
}

export default SetStateDemo;
