import { INPUT_CHANGE, SAVE_ITEM, DEL_ITEM } from './actionType'

// 初始数据
const defaultState = {
  inputValue: '',
  list: [
    '张三',
    '李四',
    '王五',
    '赵六',
    '风花雪月'
  ]
}

export default (state = defaultState, action) => {
  // 进行深度拷贝，不能影响原数据
  // state 只读，不能修改
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 监听数据
    case INPUT_CHANGE:
      newState.inputValue = action.value
      return newState
    // 保存数据
    case SAVE_ITEM:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    // 删除数据
    case DEL_ITEM:
      newState.list.splice(action.value, 1)
      return newState
    default:
      break;
  }
  return state
}