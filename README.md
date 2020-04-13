## React 练习仓库

#### 关于目录
1. demo_01
  - 主要是在js中使用`React.createElement`完成渲染
2. demo_02
  - 使用React-cli 脚手架工具完成
  - 在`jsx`语法中使用条件渲染
  - 在`jsx`语法中使用列表渲染
3. demo_03_组件
  - 关于`函数式声明组件`无状态组件
  - 关于`class声明组件`有状态组件
  - `form表单`之受控组件
  - 通过`ref`得到表单内容的值
  - 完成一个todolist组件
  - 组件通过`props`传参
    - 父组件-->子组件传参
    - 子组件-->通过回调函数给父组件传递参数
    - 兄弟组件-->通过状态提升,在公共父组件内提供方法,状态,进行修改状态
  - 使用`createContext`多层嵌套组件传递数据
    - `React.createContext()` 得到`{ Provider, Consumer }`组件
    - 使用 `Provider` 包裹元素 并设置`value`属性 用来设置需要传递的数据
    - 在 `Consumer` 标签内 使用回调函数接收传递的数据 `{data => <span>多层层节点 -- {data}</span>}`