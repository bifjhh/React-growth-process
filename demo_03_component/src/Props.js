import React, { Component } from "react";

// const Props = props => {
//   return (
//     <div>
//       <h3>组件传参</h3>
//       msg: {props.msg}
//     </div>
//   );
// };

class Props extends Component {
  constructor(params) {
    super(params);
    this.state = {
      msg: params.msg || '暂无'
    }
  }

  render() {
    return (
      <div>
        <h3>组件传参</h3>
        msg: {this.state.msg}
      </div>
    );
  }
}

export default Props;
