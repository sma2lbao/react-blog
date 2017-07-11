import {delay} from 'redux-saga'
import {takeEvery, put, call, all, select} from 'redux-saga/effects'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, HEAD_LIST,loginRequest, loginFailure, loginSuccess, } from '../redux/action/index.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9498/api/blog/';

export function* loginAsync () {
  yield put({type: LOGIN_REQUEST, loading: true})
  yield call(delay, 1000)
  const {loginInfo} = yield select()
  try{
    const json = yield call(axios, {type: 'GET', url: 'user', params: {user: loginInfo.user, pass: loginInfo.pass}})
    if(json.data.msg){
      yield put({type: LOGIN_REQUEST, loading: false})
      yield put({type: LOGIN_SUCCESS, text: json.data.msg})
      yield call(delay, 4000)
      yield put({type: LOGIN_SUCCESS, text: ''})
    }
    else {
      yield put({type: LOGIN_REQUEST, loading: false})
      yield put({type: LOGIN_FAILURE, error: json.data.error})
      yield call(delay, 4000)
      yield put({type: LOGIN_FAILURE, error: ''})
    }
  } catch(error) {
    yield put({type: LOGIN_REQUEST, loading: false})
    yield put({type: LOGIN_FAILURE, error: error.toString()})
    yield call(delay, 4000)
    yield put({type: LOGIN_FAILURE, error: ''})
  }
}

export function* watchLoginAsync() {
  yield takeEvery('LOGIN_ASYNC', loginAsync)
}

export function* getHeadlist() {
  try{
    const json = yield call(axios, {type: 'GET', url: 'heads'})
    yield put({type: HEAD_LIST, list: json.data.data})
  } catch(error) {
    yield put({type: HEAD_LIST, list: []})
  }
}

export function* watchGetHeadList() {
  yield takeEvery('GET_HEADLIST_ASYNC', getHeadlist)
}

export function* postArticle(title, article) {
  console.log('join');
  
}

export function* watchPostArticle() {
  yield takeEvery('POST_ARTICLE', postArticle)
}

export default function* rootSaga() {
  yield all([
    watchLoginAsync(),
    watchGetHeadList(),
    watchPostArticle(),
  ])
}
