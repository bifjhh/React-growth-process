// 1. 创建元素
  // 参数1 元素名称
  // 参数2 属性
  // 参数3及以后 子节点
const title = React.createElement('h1', null, 'hello React')

// 渲染
// 要渲染的元素
// 要挂载的地方
ReactDOM.render(title, document.getElementById('app'))