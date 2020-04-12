import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.msg || "暂无"
    };
  }
  
  submit = e => {
    const msg = e.target.value;
    this.setState({ msg });
    this.props.cb(msg)
  };

  render() {
    return (
      <div>
        <div>msg: {this.state.msg}</div>
        <input type="submit" value="改变数据" onClick={this.submit} />
      </div>
    );
  }
}

class Props extends Component {
  constructor() {
    super();
    this.state = {
      msg: "父组件传递的"
    };
  }

  message = msg => {
    this.setState({ msg });
  };
  render() {
    return (
      <div>
        <h3>组件传参</h3>
        <Child msg={this.state.msg} cb={this.message} />
      </div>
    );
  }
}

export default Props;
