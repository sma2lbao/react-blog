import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import reducer from '../reducer/index.js'
import createSaga from 'redux-saga'
import * as sagas from '../../saga/index.js'

var store = createStore(
  reducer,
  applyMiddleware(createSaga(...sagas))
)
export default store
