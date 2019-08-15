import { INPUT_CHANGE, SAVE_ITEM, DEL_ITEM, GET_LIST , GET_MY_LIST} from './actionType'
import axios from 'axios'
// import store from '.'

// 监听数据
export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  value
})
// 保存数据
export const saveItemAction = () => ({
  type: SAVE_ITEM
})
// 删除数据
export const delItemAction = (index) => ({
  type: DEL_ITEM,
  index
})
// 获取 JSON 数据
export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

// 中间件：异步请求数据
export const getTodoList = () => {
  // 可以传入参数，免去书写 store.dispatch()
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5d4a4b9ea644025f212848a2/reactd-emo/react-redux-axios')
    .then((res) => {
      let data = res.data.data
      const action = getListAction(data)
      dispatch(action)
    })
    .catch((erro) => {
      console.log('请求失败',erro)
    })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})