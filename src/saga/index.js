import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}
export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}


export function* loginAsync() {
  yield call(delay, 1000)
  console.log('join')
  yield put({type: 'LOGIN'})
}
export function* watchLoginAsync() {
  yield* takeEvery('LOGIN_ASYNC', loginAsync)
}
