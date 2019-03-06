react_learning
1.state负责存储组件里的数据 
/ JSX中使用JS表达式需要使用{}包裹表达式 “value={this.state.inputValue}“ 
/ 事件绑定时需要用bind(this)对函数的作用域进行变更 ”onChange={this.handleInputChange.bind(this)} ”ES6语法 
/ 改变数据项中的内容应使用setState()函数传入对象的形式 “this.setState({})"

2.组件具体渲染的内容由render函数return()的结果决定 
/JSX中<div>这类标签无需包裹''，相较于JS
/JSX使用<>标签形式来使用自定义组件，自定义组件首字母大写 
/JSX要求render函数返回的结果必须整体被包含在一个大的元素中，flex布局时希望顶层元素只用<div>和<ul>,故在JSX常用<Fragment>占位符（可隐藏）至于最外层
  
3.”list: [...this.state.list, this.state.inputValue]“ ES6语法 展开运算符 将之前的数组list展开，在放入一个新数组inputValue
/”this.state.list.map((item, index) => {return <li key={index}>{item}</li>})“ ES5语法 map()对list中的元素进行循环
/reat做循环渲染时需要给渲染出的每一项增加一个key值，key值应为每一项的唯一标识符,尽量不要用index
/react直接操作数据 immutable 至使state不允许做任何改变 ，可用” const list = [] ” 拷贝出一个list副本，在去改变该副本

4.JSX定义样式使用className而非class，后者与关键字同名，有混淆
/使用dangerouslySetInnerHTML这一列标签属性对内容进行设置，显示不希望被转译的内容 <li dangerouslySetInnerHTML={{__html: item}}> 外层花括号表示内部是一个JS表达式，内层花括号表示这是一个JS对象
/<label>标签用于自动聚焦光标<label htmlFor="insertArea" > 输入内容</label>
  
5.react是一种声明式开发方式，Jquery/原生属于命令式开发方式，后者60%的代码都是做DOM操作关注每步细节，前者面向数据编程，根据构建好的数据自动构建网站，节省了大量的DOM操作
/react可以与Jquery,Angular,Vue等框架共存 react只负责渲染在index.js入口文件中用react-dom挂载的那部分HTML
/react组件化开发，普通标签首字母小写，组件大写；组件应用是个树状结构，组件间的通信：父组件通过属性向子组件传值，子组件就接收到父组件的值/子组件向父组件传值，需调用父组件传递过来的方法，间接操作父组件的值，子组件可用PropTypes来对传递的参数进行类型限制
/react单项数据流，子组件面对父组件传来的值，只能使用，不能改变，该值为只读属性：若多个子组件改变该值时，出错后不易查找
/react视图层框架，大型项目有多层组件时，只能解决数据和页面渲染，组件间的传值依赖其他框架flask redux mobbo
/函数式编程 将函数拆分，易于维护/ 易于前端进行自动化测试：给函数一个输入，查看输出是否符合预期即可(e2e test)

6.PropTypes 与 DefaultProps (接收参数时对参数类型做校验，定义参数默认值)
/每个组件都有自己的Props参数，该参数是从父组件接收的一些属性
/首先从‘prop-types'中引入'PropTypes'组件,然后“App.propTypes={content: PropTypes.string}”对App组件中传递的参数content属性必须时字符串
/父组件没有向子组件传递对应属性，“App.defauProps={test:'hello world'}“

7.Props, State 与render函数
/当组件的Props或State发生改变时，render函数就会重新执行/父组件的render函数被运行时，它的子组件的render都将被重新运行一次

8.虚拟DOM
/state数据 
JSX摸板 
数据+摸板相结合，生成真实的DOM，显示
state 发生改变
数据+摸板 结合，生成真实的DOM,替换原始的DOM

缺陷：第一次和第二次都生成了完整的DOM片段，第二次的DOM去替换第一次的DOM, 生成和替换都昊性能

/state 数据
JSX 摸板
数据+摸板 结合生成真实的DOM，显示
state 发生改变
数据+摸板 结合生成真实的DOM,并不直接替换原始的DOM
新的DOM(DocumentFragment )始DOM 做比对，找差异
找出iuput发生的变化
只用新的DOM中的input元素，替换老的DOM中的input元素

性能提升不明显

/state 数据
JSX 摸板
数据+摸板 结合生成真实的DOM,来显示
<div id='abc'><span>hello world</span></div>
生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM){损耗了性能:JS创建JS对象简单，创建DOM调用webApplicatino级别的API故 损耗性能}
['div',{id:'abc'}, ['span',{},'hello world']]
state 发生变化
生成新的虚拟DOM
['div',{id:'abc'}, ['span',{},'bye']]
比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容{极大提升了性能}
直接操作DOM,改变span中的内容

9 深入了解虚拟DOM
state 数据 
JSX 摸板 <div>标签
生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM){损耗了性能:JS创建JS对象简单，创建DOM调用webApplicatino级别的API故 损耗性能}
['div',{id:'abc'}, ['span',{},'hello world']]
用虚拟DOM的结构生成真实的DOM ,来显示
<div id='abc'><span>hello world</span></div>
state 发生变化
生成新的虚拟DOM
['div',{id:'abc'}, ['span',{},'bye']]
比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容{极大提升了性能}
直接操作DOM,改变span中的内容

JSX -> createElement ->虚拟DOM{JS对象} -> 真实的DOM
没有JSX，直接操作CreateElemnt较为复杂

优点：性能提升 / 使得跨端应用得以实现  React Native(得益于虚拟DOM,手机之类的终端没有DOM,虚拟DOM可以生成相应的组件

Diff , diffence
同层比对：只要一层不对，就全部替换(算法简单)
比对时虚拟DOM数上的节点赋予相应的key值，提升比对性能。key值不能用index，因为增删节点时，index会改变，可用稳定key值如item

10.setState()是一个异步函数，setState(()=>(),()=>());第二个函数在setState异步执行完成后才开始执行
11.react 中可以使用e.target获取事件对应的元素对应的DOM节点 / 也可以使用ref获取 ES6语法中 ref={(input)=>{this.input=input}

12.react中的生命周期函数 ：在某一时刻组件会自动调用执行的函数
组件初始化自己的数据 state props  (constructor)
组件被渲染并挂在到页面上 mounting (componentWillMount) 在组件即将被挂在到页面的时刻自动执行 ,( render)渲染  , (componentDidMount) 组件被挂载完成后执行  挂载即组件第一次被放到页面上的时候，第二次只执行render
shouldComponentUpdate 在组件被更新之前会被自动执行，返回布尔值，决定组件是否应该被更新 
componentWillUpdate 组件被更新前，shouldComponentUpdate 执行返回true之后    render 执行  组件更新  componentDidUpdate 组件被更新后被执行
componentWillReceiveProps 一个组件要从父组件接收参数，只要父组件的render函数被重新执行了，子组件的componentWillReceiveProp生命周期函数就会被执行
componentWillUnmounting 组件即将被从页面中移除的时候执行

shouldComponentUpdate 返回false,组件不更新，以提升性能”shouldComponentUpdate(nextProps,nextProps) {if(nextProps.content !== this.props.content) return true;} else {return false}

13.react中性能优化的方式： 改变作用域的方法放在constructor里，保证函数作用域绑定执行一次也可避免子组件的无谓渲染 ”constructor(props) {this.handleClick=this.handleClick.bind(this)}“ 
setState是一个异步函数，可以把多次的数据的改变结合成一次，降低虚拟DOM的比对频率
底层虚拟DOM同层比对，key值比对，提升比对速度
借助shouldComponentUpdate 返回false,组件不作无谓更新，以提升性能

14.componentDidMount componentWillMount constructor都只执行一次，可将ajax请求放于其中，推荐放入componentDidMount
”componentDidMount() {axiox.get('/api/*** ').then(()=>{alert('succ')}).catch(()=>{alert('error')})}”成功了执行then,失败执行catch

15.Redux=Reducer+flux
创建store：index.js文件，” import {createStore}  from 'redux'; const store = createStore(reducer); exprot  default  store; “ 入口文件
/reducer.js文件，返回一个函数 ”  const defaultState = {}  export default (state=defaultState ,action) => { return state;} “负责存储数据
/action 在react是一个对象 “const action = {type:'change_input_value',value:e.target.value} ” type表明actionde 行为 然后被函数派发 “store.dispatch(action);”store可以自动将action发至reducer
/reducer拿到了之前的数据以及action ，判断执行 “ if (action.type === 'change_input_value') {const newState = JSON.parse(JSON.stringfy(state)); newState.inputValue = action.value; return newState}  注：reducer可以接受state，但绝不能修改state 故引入newState,修改后将state返回给store
/组件订阅store ”store.subscribe(this.handleStoreChange )“ 同时在组件中添加新方法” handleStoreChange () {this.setState(store.getState));} “
以便即时更新
/

16.UI组件专门做渲染，容器组件处理逻辑  容器组件中引入UI组件，仅便于维护
/当UI组件只有render()函数时 ,可将其改为无状态组件 ” const App = (props) => { return ()}  “ 只有一个函数，不执行render函数，性能提升

17.使用redux中间件 ，在store/index.js文件中引入 applyMidleware 组件，并在createStore中使用，      ” import {createStore, applyMidleware} from 'redux'  const store = createStore (reducer,applyMiddleware([thunk, window...]) ”  需引入 compose 具体参考 github redux-devtools

18.使用redux-thunk中间件实现ajax数据请求，将ajax请求从生命周期函数中移至action , 这样action不仅可返回对象，也可返回函数了“ export const getApp = () => {return (dispatch) => {axios.get('/lins.json').then((res)=>{const data = res.data; const action = initListAction(data).catch(()=>{alert('error')}) dispatch(action);})}} 异步代码拆分，便于自动化测试

19.使用redux-saga中间件，会将异步逻辑专门放至单独的文件中管理 ，store/sagas.js 具体参考 github react-saga
saga要求使用 ES6的generator函数 ” function* getInitList() {const res = yield axios.get('/list.json');const action= initListAction(res.data);put(action);})}}  function* mySaga() {yield takeEvery (GET_INIT_LIST, getInitList);} “









