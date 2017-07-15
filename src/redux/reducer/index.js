import { combineReducers } from 'redux'

import {LOGIN_USER, LOGIN_PASS,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,LOG_OUT,
  HEAD_LIST, HEAD_ACTIVE,
  ARTICLE_TITLE, ARTICLE_COMT,
  POST_ARTICLE_REQUEST, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE,
  GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE,
  SET_ARTICLE_TARGET,
  GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE,
  GET_HOME_ARTICLES_REQUEST, GET_HOME_ARTICLES_SUCCESS, GET_HOME_ARTICLES_FAILURE,
} from '../../redux/action/index.js'

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
const loginStatu = (state = {isLoading: false, msg: '', error: '', isLogin: false }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {isLoading: action.loading})
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {msg: action.text, isLogin: true})
    case LOGIN_FAILURE:
      return Object.assign({}, state, {error: action.error})
    case LOG_OUT:
      return Object.assign({}, state, {isLogin: false})
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

const getArticle = (state = {isLoading: false, json: {title: '', comt: ''}, error: ''}, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return Object.assign({}, state, {isLoading: action.loading})
    case GET_ARTICLE_SUCCESS:
      return Object.assign({}, state, {json: action.json})
    case GET_ARTICLE_FAILURE:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}
const setArticleTarget = (state = 1499821270716, action) => {
  switch (action.type) {
    case SET_ARTICLE_TARGET:
      return action.time
    default:
      return state
  }
}

const getArticles = (state = {isLoading: false, json: [], error: ''}, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return Object.assign({}, state, {isLoading: action.loading})
    case GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, {json: action.json})
    case GET_ARTICLES_FAILURE:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}

const getHomeArticles = (state = {isLoading: false, json: [], error: ''}, action) => {
  switch (action.type) {
    case GET_HOME_ARTICLES_REQUEST:
      return Object.assign({}, state, {isLoading: action.loading})
    case GET_HOME_ARTICLES_SUCCESS:
      return Object.assign({}, state, {json: action.json})
    case GET_HOME_ARTICLES_FAILURE:
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
  postArticle,
  getArticle,
  setArticleTarget,
  getArticles,
  getHomeArticles,
})

export default reducers
