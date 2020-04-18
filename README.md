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
    import propTypes from "prop-types";
    Validation.propTypes = {
      max: propTypes.number
    };
    ```
  - 必填项 `isRequired`
    ```js
    import propTypes from "prop-types";
    Validation.propTypes = {
      max: propTypes.number.isRequired, // 添加了isRequired
      count: propTypes.number
    };
    ```
  - 指定数据结构 `propTypes.shape({})`

- `props`默认值
  ```js
  Validation.defaultProps = {
    count: 10
  };
  ```

#### 组件的生命周期

> 组件从被创建,到卸载经历的过程-->函数组件没有生命周期

- 钩子函数

  > 组件的生命周期,每一个过程所提供的操作的方法

- 生命周期的三个阶段

  - 创建时(页面加载)
    - `constructor` 初始化一些数据
    - `render` 每次页面渲染都会执行, 不能调用`this.setState()`
    - `componentDidMount` 进行一些网络请求,操作 DOM
    - 注意,只有`componentDidMount`可以操作`DOM`,因为`constructor` 和 `render`钩子执行时页面还没有加载完成
  - 更新时

    - 更新时机
      - `new props` 组件接收到新的参数时会更新
      - `setState` 改变组件数据时
      - `forceUpdate` 强制执行更新
    - `render` 每次数据更新,都会让页面重新渲染 同创建时的`render` 是同一个
    - `componentDidUpdate` 更新完成之后
      - 执行操作`DOM`,发送`Ajax`
      - 如果在此钩子函数中使用`setState` 则需要使用一个`if`条件来执行, (负责则会进行递归更新了)

  - 卸载时
    - `componentWillUnmount`
      - 执行一些收尾操作,定时器之类

#### render props

- 在组件内使用`props` 来渲染内容
  - 场景, 组件负责获取数据,根据不同的传入值渲染不同的内容(view 层)
- 使用`children`代替`props`函数

#### 高阶组件(HOC)

> HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式

- 简述
  - 高阶组件就是是参数为组件，返回值为新组件的函数。

- 区别
  - 组件是将 `props` 转换为 UI，而`高阶组件`是将组件转换为另一个组件。

- 使用
  - 创建一个以`with`开头的函数
  - 内部创建一个class组件,参数为组件
  - 返回这个组件
- 补充
  - 设置组件的`displayName` 防止复用组件名称相同不易区分
  - 向下传递`props`

#### setState() 方法说明
- 异步执行数据的更新
  ```js
    // 例: this.num = 1
    this.setState({
      num: this.state.num + 1
    })
    console.log(this.num) // 结果为1, 因为数据还没有完成更新之后就执行了log输出
    this.setState({
      num: this.state.num + 1 // 此时的this.num 依旧是 1, 所以如果有多个setState执行,请注意
    })
    // 通过回调函数的方式,可以获取页面最新的数据
    this.setState((state, props) => {
      return {
        num: state.num + 1
      };
    }, // 通过传递第二个参数,一个回调函数,可以对数据状态更新后执行操作
    ()=> console.log('数据更新完成:', this.state.age));
  ```
- 同一方法体内执行多次`setState`会被合并为一次执行操作,只会触发一次`render`方法重新渲染