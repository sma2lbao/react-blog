import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_')
}
