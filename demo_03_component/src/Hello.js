import React, { Component } from "react";

// /**
//  * 函数式声明组件
//  * @param {*} params
//  */
// function HelloComponent() {
//   return (
//     <h1>Hello React Component</h1>
//   )
// }

/**
 * class 声明组件
 */
class NewClassCmp extends Component {
  constructor(params) {
    super()
    this.state = {
      count: 0
    }
  }
  handleClick(e) {
    e.preventDefault(); // 阻止a标签行为
    console.log("msg");
  }

  add = ()=> {
    this.setState({
      count: this.state.count+1
    })
  }
  add() {
    this.setState({
      count: this.state.count+1
    })
  }

  reduction = ()=> {
    this.setState({
      count: this.state.count-1
    })
  }
  render() {
    return (
      // <a href="www.baidu.com" onClick={this.handleClick}>new React new Class Component</a>
      <div>
        <button onClick={this.add.bind(this)}>+1</button>
        <button onClick={this.reduction}>-1</button>
        <h3>num: {this.state.count}</h3>
      </div>
    );
  }
}

export default NewClassCmp;
