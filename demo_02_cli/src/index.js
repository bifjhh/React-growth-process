
import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
// const title = React.createElement('h1', null, 'hello React')
// const isLoading = false
// const loadData  = () => isLoading ? (<div>loading...</div>) : (<div>数据加载完成</div>)
// // const title = <h1>hello JSX</h1>
// const title = (
//   <h1>条件渲染:
//     {loadData()}
//   </h1>
// )
// const list = [
//   { id: 1, txt: '第一' }, 
//   { id: 2, txt: '第二' },
//   { id: 3, txt: '第三' },
// ]

// const title = (
//   // <h1>列表渲染: </h1>
//   <ul>
//     {list.map(e=>(<li key={e.id}>{e.id} {e.txt}</li>))}
//   </ul>
// )

const title = <h1 className="title">hello JSX</h1>

ReactDOM.render(title, document.getElementById('root'))
