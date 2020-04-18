import { Component } from "react";
import PropTypes from 'prop-types';

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
    return this.props.children(this.state);
  }
}

Mouse.propTypes = {
  children: PropTypes.func.isRequired
}
export default Mouse;
