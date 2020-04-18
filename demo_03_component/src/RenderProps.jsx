import React, { Component } from "react";
import "./RenderProps.min.css";
import Mouse from './Mouse'

class RenderPorps extends Component {

  renderCoordinates(mouse) {
    return(
      <p>鼠标当前位置--X:{mouse.x}, Y:{mouse.y}</p>
    )
  }

  renderCat(mouse) {
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
    return (
      <div>
        <Mouse renderProps={this.renderCoordinates}/>
        <Mouse renderProps={this.renderCat}/>
      </div>
    );
  }
}

export default RenderPorps;
