import React, { Component } from 'react'
import store from '../store'
// import {INPUT_CHANGE, SAVE_ITEM, DEL_ITEM} from '../store/actionType'
import {inputChangeAction, saveItemAction, delItemAction} from '../store/actionCreators'
import TodoListUI from './TodoListUI'


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