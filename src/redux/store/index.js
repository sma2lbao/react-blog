import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import reducer from '../reducer/index.js'
import createSaga from 'redux-saga'
import { helloSaga } from '../../saga/index.js'

var store = createStore(
  reducer,
  applyMiddleware(createSaga(helloSaga))
)
export default store
