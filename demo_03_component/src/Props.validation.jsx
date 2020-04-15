import React, { Component } from "react";
import propTypes from "prop-types";

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>
          props校验数据类型: {this.props.max} count: {this.props.count}
        </h1>
      </div>
    );
  }
}
Validation.propTypes = {
  max: propTypes.number.isRequired,
  count: propTypes.number,
  // 集中常见的类型
  num: propTypes.number,
  fn: propTypes.func,
  str: propTypes.string,
  tag: propTypes.element,
  // 自定义类型
  userInfo: propTypes.shape({
    name: propTypes.string,
    age: propTypes.number
  })
}
export default Validation;
