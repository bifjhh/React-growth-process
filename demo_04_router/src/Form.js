import React, { Component } from "react";

class FormInput extends Component {
  toList= () => {
    this.props.history.push('/todolist')
    console.log(this.props);
  }
  render() {
    return (
      <div>
        form 路由内容
        <br/>
        <button onClick={this.toList}>跳转到ToDoList</button>
      </div>
    );
  }
}

export default FormInput;
