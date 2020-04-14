import React, { Component } from "react";


class ChildrenDemo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>通过children获取子节点: {this.props.children}</h1>
      </div>
    );
  }
}

export default ChildrenDemo;
