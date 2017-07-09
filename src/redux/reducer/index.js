import {combineReducers} from 'redux'
import {GET_USER, GET_PASSWORD, LOGIN, LOGIN_ASYNC} from '../action'

const login = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('join');
      if("sma2lbao" === action.user && "000000" === action.password)
      {
        return true
      }
      else {
        return false
      }
    // case LOGIN_ASYNC:
    //   console.log('');
    //   return true
    default:
      return state
  }
}

const inputInfo = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {user: action.user})
    case GET_PASSWORD:
      return Object.assign({}, state, {password: action.password})
    default:
      return state
  }
}

const loginReducer = combineReducers({
  login,
  inputInfo
})
export default loginReducer