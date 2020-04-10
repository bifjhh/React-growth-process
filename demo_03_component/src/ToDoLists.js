import React, { Component } from "react";
import "./ToDoLists.min.css";
class ToDoLists extends Component {
  constructor(params) {
    super();
    this.state = {
      msg: {
        userNaame: "",
        content: ""
      },
      lists: []
    };
  }

  submit = () => {
    const { msg, lists } = this.state.msg;
    lists.push({ ...msg });
    msg.userNaame = "";
    msg.content = "";
    this.setState({ lists, msg });
  };
  inputChange = e => {
    const { name, value } = e.target;
    const msg = { ...this.state.msg, [name]: value };
    this.setState({ msg });
  };
  delList = index => {
    const lists = this.state.lists;
    lists.splice(index, 1);
    this.setState({ lists });
  };
  getListHtml = () => {
    const list = this.state.lists;
    if (!list.length) return <div className="noMsg">暂时没有数据</div>;
    return list.map((e, i) => {
      return (
        <div className="list" key={i + e.userNaame}>
          <div className="info">
            <span className="name">{e.userNaame}: </span>
            <span className="content">{e.content}</span>
          </div>
          <div className="del">
            <button className="del_btn" onClick={i => this.delList(i)}>
              删除
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="listbox">
        <h3>ToDoLists</h3>
        <div>
          <input
            type="text"
            name="userNaame"
            className="name"
            placeholder="请输入昵称"
            value={this.state.msg.userNaame}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <textarea
            name="content"
            className="content"
            placeholder="请输入具体内容"
            value={this.state.msg.content}
            onChange={this.inputChange}
          ></textarea>
        </div>
        <div>
          <button type="submit" onClick={this.submit}>
            发表评论
          </button>
        </div>
        <div className="list_box">{this.getListHtml()}</div>
      </div>
    );
  }
}

export default ToDoLists;
