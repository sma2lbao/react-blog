import {delay} from 'redux-saga'
import {takeEvery, put, call, all, select} from 'redux-saga/effects'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../redux/action/index.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9498/api/blog/';

export function* loginAsync () {
  yield put({type: LOGIN_REQUEST})
  const {loginInfo} = yield select()
  // console.log(loginInfo);
  const data = yield call(axios, {type: 'GET', url: 'user', params: {user: loginInfo.user, pass: loginInfo.pass}})
  console.log(data.data);
  if(data.msg){
    yield put({type: LOGIN_SUCCESS})
  }
  else {
    yield put({type: LOGIN_FAILURE})
  }
}

export function* watchLoginAsync() {
  yield takeEvery('LOGIN_ASYNC', loginAsync)
}

export default function* rootSaga() {
  yield all([
    watchLoginAsync(),
  ])
}
