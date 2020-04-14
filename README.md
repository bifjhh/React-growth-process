## React 练习仓库

### 目录

#### demo_01

- 主要是在 js 中使用`React.createElement`完成渲染

#### demo_02

- 使用 React-cli 脚手架工具完成
- 在`jsx`语法中使用条件渲染
- 在`jsx`语法中使用列表渲染

#### demo_03

- 组件

  - 关于`函数式声明组件`无状态组件
  - 关于`class声明组件`有状态组件

- `form表单`

  - 受控组件
  - 通过`ref`得到表单内容的值

- 完成一个 todolist 组件

- `props`传参

  - 组件通过`props`传参
  - 父组件-->子组件传参
  - 子组件-->通过回调函数给父组件传递参数
  - 兄弟组件-->通过状态提升,在公共父组件内提供方法,状态,进行修改状态

- 使用`createContext`多层嵌套组件传递数据

  - `React.createContext()` 得到`{ Provider, Consumer }`组件
  - 使用 `Provider` 包裹元素 并设置`value`属性 用来设置需要传递的数据
  - 在 `Consumer` 标签内 使用回调函数接收传递的数据 `{data => <span>多层层节点 -- {data}</span>}`

- `props` `children`属性

  - 表示组件标签的子节点,当组件标签有子节点时,props 就会有这个属性
  - `children` 的值可以为任意值:文本,元素,组件,函数

- `props` 数据校验
  - 依赖`prop-types` npm 包
  - 设置组件的`this.propTypes`属性
    ```js
      import propTypes from 'prop-types';
      this.propTypes = {
        max: propTypes.number
      }
    ```
