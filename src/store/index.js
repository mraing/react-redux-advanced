import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducer'

import createSagaMiddleware from 'redux-saga' //引入 sage
import mySage from './sage';

const sagaMiddleware = createSagaMiddleware() // 创建中间件

// 增强函数
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))

// createStore() 只接受两个参数，所以要使用增强函数才能同时使用thunk 和 redux dev toods 工具
const store = createStore(Reducer,enhancer)

sagaMiddleware.run(mySage)

export default store
