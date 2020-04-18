import React, { Component } from "react";

function withMouse(WrappedComponent) {
 
  class Mouse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
    }
    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    };

    render() {
      return <WrappedComponent {...this.state}{...this.props}/>;
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}

export default withMouse;
