import { combineReducers } from 'redux'

import {LOGIN_USER, LOGIN_PASS} from '../../redux/action/index.js'

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

 const reducers = combineReducers({
  loginInfo,
})

export default reducers
