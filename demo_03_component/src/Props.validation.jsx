import React, { Component } from "react";
import propTypes from 'prop-types';

class Validation extends Component {
  constructor(props) {
    super(props)
    this.propTypes = {
      max: propTypes.number
    }
  }
  render() {
    return (
      <div>
        <h1>props校验数据类型: {this.props.max}</h1>
      </div>
    );
  }
}
export default Validation;
