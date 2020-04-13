import React, { Component } from "react";
// createContext() 得到{ Provider, Consumer }组件
// 使用Provider 包裹元素 并设置value属性 用来设置需要传递的数据
// 在Consumer 标签内 使用回调函数接收传递的数据 {data => <span>好几层子节点 -- {data}</span>}
const { Provider, Consumer } = React.createContext()

class ContextDemo extends Component {
  constructor(params) {
    super()
    this.state = {
      msg: '测试数据'
    }
  }
  render() {
    return (
      <Provider value={this.state.msg}>
        <Node />
      </Provider>
    );
  }
}

const Node = props => {
  return (
    <div className="node">
      <SubNode />
    </div>
  )
}

const SubNode = props => {
  return (
    <div className="subnode">
      <Child />
    </div>
  )
}

const Child = props => {
  return (
    <div className="child">
      <Consumer>{data => <span>多层节点 -- {data}</span>}</Consumer>
    </div>
  )
}

export default ContextDemo;
