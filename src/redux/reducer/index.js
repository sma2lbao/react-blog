import { combineReducers } from 'redux'

import {LOGIN_USER, LOGIN_PASS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, HEAD_LIST, HEAD_ACTIVE, ARTICLE_TITLE, ARTICLE_COMT, POST_ARTICLE_REQUEST, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE} from '../../redux/action/index.js'

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
      return Object.assign({}, state, {isLoading: action.loading})
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {msg: action.text})
    case LOGIN_FAILURE:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}

const headList = (state = [], action) => {
  switch (action.type) {
    case HEAD_LIST:
      return action.list
    default:
      return state
  }
}
const headActive = (state = 0, action) => {
  switch (action.type) {
    case HEAD_ACTIVE:
      return action.index
    default:
      return state
  }
}
const article = (state = {title: '', comt: ''}, action) => {
  switch (action.type) {
    case ARTICLE_TITLE:
      return Object.assign({}, state, {title: action.title})
    case ARTICLE_COMT:
      return Object.assign({}, state, {comt: action.comt})
    default:
      return state
  }
}

const postArticle = (state = {isLoading: false, msg: '', error: ''}, action) => {
  switch (action.type) {
    case POST_ARTICLE_REQUEST:
      return Object.assign({}, state, { isLoading: action.loading })
    case POST_ARTICLE_SUCCESS:
      return Object.assign({}, state, {msg: action.msg})
    case POST_ARTICLE_FAILURE:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}

const reducers = combineReducers({
  loginInfo,
  loginStatu,
  headList,
  headActive,
  article,
  postArticle
})

export default reducers
