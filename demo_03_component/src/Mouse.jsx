import React, { Component } from "react";


class Mouse extends Component {
  constructor(props) {
    super(props)
    this.state= {
      x:0,
      y:0
    }
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return this.props.renderProps(this.state);
  }
}

export default Mouse;
