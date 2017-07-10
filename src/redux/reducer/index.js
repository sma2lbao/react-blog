import { combineReducers } from 'redux'

import {LOGIN_USER, LOGIN_PASS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../../redux/action/index.js'

const loginInfo = (state = {user: '', pass: ''}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {user: action.user})
    case LOGIN_PASS:
      return Object.assign({}, state, {pass: action.pass})
    default:
      return state
  }
}
const loginStatu = (state = {isLoading: false, msg: '', error: '' }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log('loading');
      return Object.assign({}, state, {isLoading: true})
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {msg: action.text})
    case LOGIN_FAILURE:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}

 const reducers = combineReducers({
  loginInfo,
  loginStatu,
})

export default reducers
