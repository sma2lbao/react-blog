import {createStore, applyMiddleware} from 'redux'
import reducer from '../../redux/reducer/index.js'
import createSaga from 'redux-saga'
import rootSaga from '../../saga/index.js'
const saga = createSaga()
let store = createStore(
    reducer,
    applyMiddleware(saga)
)
saga.run(rootSaga)

export default store
