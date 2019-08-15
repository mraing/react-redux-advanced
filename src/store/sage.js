import { takeEvery, put } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionType'
import {getListAction} from './actionCreators'
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    const res = yield axios.get('https://easy-mock.com/mock/5d4a4b9ea644025f212848a2/reactd-emo/react-redux-axios')
    const action = getListAction(res.data.data)
    yield put(action)
}

export default mySaga