import React, { Component } from "react";

class FormInput extends Component {
  constructor(params) {
    super();
    this.textRef = React.createRef();
    this.state = {
      text: "",
      checkbox: "",
      text2: ""
    };
  }

  inputChange = e => {
    const target = e.target;
    const key = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [key]: value });
  };

  refChange = e => {
    const value = this.textRef.current.value;
    console.log(value);
  };
  render() {
    return (
      // <a href="www.baidu.com" onClick={this.handleClick}>new React new Class Component</a>
      <div>
        <span>text</span>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.inputChange}
        />
        <br></br>
        <span>text2</span>
        <input
          type="text"
          name="text2"
          value={this.state.text2}
          onChange={this.inputChange}
        />
        <br></br>
        <span>复选框</span>
        <input
          type="checkbox"
          name="checkbox"
          checked={this.state.checkbox}
          onChange={this.inputChange}
        />
        <br></br>
        <span>非受控组件00使用ref</span>
        <input
          type="text"
          name="textRef"
          ref={this.textRef}
          onChange={this.refChange}
        />
        <br></br>
      </div>
    );
  }
}

export default FormInput;
