import React, { Component } from 'react'
import store from '../store'
import {inputChangeAction, saveItemAction, delItemAction, getList} from '../store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.saveItem = this.saveItem.bind(this)
    this.delItem = this.delItem.bind(this)
    // 开启订阅者
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return (
      <div>
        <TodoListUI
          inputValue={this.state.inputValue}
          list={this.state.list}
          inputChange={this.inputChange}
          saveItem={this.saveItem}
          delItem={this.delItem}
        />
      </div>
    )
  }

  // 生命周期函数 - 挂载之前
  componentDidMount () {
    this.getData()
  }

  // 请求 JSON 数据
  getData () {
    axios.get('https://easy-mock.com/mock/5d4a4b9ea644025f212848a2/reactd-emo/react-redux-axios')
    .then(res => {
      const action = getList(res.data.data.list)
      store.dispatch(action)
    })
    .catch(error => {
      console.log('请求出错'+error)
    })
  }

  // 监听数据
  inputChange (e) {
    const action = inputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 保存数据
  saveItem (e) {
    if (this.state.inputValue) {
      const action = saveItemAction()
      store.dispatch(action)
    }
  }
  
  // 删除数据
  delItem (index) {
    const action = delItemAction(index)
    store.dispatch(action)
  }

  // 订阅者更新数据
  storeChange () {
    this.setState(store.getState())
  }
}
export default TodoList