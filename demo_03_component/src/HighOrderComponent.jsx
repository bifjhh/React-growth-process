import React, { Component } from "react";
import "./RenderProps.min.css";
import MouseHighOrder from './Mouse.HighOrder'

class RenderPorps extends Component {
  CoordinatesHighOrder(mouse) {
    return(
      <p>鼠标当前位置--X:{mouse.x}, Y:{mouse.y}</p>
    )
  }

  CatHighOrder(mouse) {
    const style = {
      top: mouse.y+'px',
      left: mouse.x+'px',
    }
    return(
      <div className="cat" style={style}>
        <img src={require('./cat.png')} alt="小猫"/>
      </div>
    )
  }

  render() {
    const MousePosition = MouseHighOrder(this.CoordinatesHighOrder)
    const Cat = MouseHighOrder(this.CatHighOrder)
    return (
      <div>
        <MousePosition />
        <Cat />
      </div>
    );
  }
}

export default RenderPorps;
