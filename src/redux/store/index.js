import {createStore, applyMiddleware} from 'redux'
import reducer from '../../redux/reducer/index.js'
let store = createStore(
    reducer
)

export default store
