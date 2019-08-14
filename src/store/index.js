import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'

// 增强函数
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancer(applyMiddleware(thunk))

// createStore() 只接受两个参数，所以要使用增强函数才能同时使用thunk 和 redux dev toods 工具
const store = createStore(
  Reducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
