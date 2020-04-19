import React, { Component, PureComponent } from "react";


class Children extends PureComponent {
  render() {
    console.log('Children组件重新渲染');
    
    return (
      <div>
        <div>{JSON.stringify(this.props.msg)}</div>
        <div>{JSON.stringify(this.props.age)}</div>
      </div>
    )
  }
}
class PureComponentDemo extends Component {
  constructor() {
    super()
    this.state = {
      msg: {
        name: 'bifjhh',
        age: 26
      }
    }
  }

  updateState = () => {
    // const msg = this.state.msg   // 直接使用原有Object则保存的引用地址相同,会导致纯组件不会更新
    const msg = {...this.state.msg}  // 创建一个新的Object使用一个新的引用指向,则可以触发纯组件内部的数据更新

    msg.age += 1
    this.setState({
      msg
    })
  }
  render() {
    console.log('PureComponentDemo组件重新渲染');
    return (
      <div>
        <h1>纯组件</h1>
        <Children msg={this.state.msg}/>
        <Children age={this.state.msg.age}/>
        <div>{JSON.stringify(this.state.msg)}</div>
        <button onClick={this.updateState}>改变state</button>
      </div>
    );
  }
}

export default PureComponentDemo;
