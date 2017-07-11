export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_PASS = 'LOGIN_PASS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const HEAD_LIST = 'HEAD_LIST'
export const HEAD_ACTIVE = 'HEAD_ACTIVE'
export const ARTICLE_TITLE = 'ARTICLE_TITLE'
export const ARTICLE_COMT = 'ARTICLE_COMT'
export const POST_ARTICLE_REQUEST = 'POST_ARTICLE_REQUEST'
export const POST_ARTICLE_SUCCESS = 'POST_ARTICLE_SUCCESS'
export const POST_ARTICLE_FAILURE = 'POST_ARTICLE_FAILURE'

export const setLoginUser = (user) => {
  return {
    type: LOGIN_USER,
    user
  }
}
export const setLoginPass = (pass) => {
  return {
    type: LOGIN_PASS,
    pass
  }
}
export const loginSuccess = (text) => {
  return {
    type: LOGIN_SUCCESS,
    text
  }
}
export const loginRequest = (loading) => {
  return {
    type: LOGIN_REQUEST,
    loading
  }
}
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}
export const getHeadlist = (list) => {
  return {
    type: HEAD_LIST,
    list
  }
}
export const setHeadactive = (index) => {
  return {
    type: HEAD_ACTIVE,
    index
  }
}
export const setArticleTitle = (title) => {
  return {
    type: ARTICLE_TITLE,
    title
  }
}
export const setArticleComt = (comt) => {
  return {
    type: ARTICLE_COMT,
    comt
  }
}
export const postArticleRequest = (loading) => {
  return {
    type: POST_ARTICLE_REQUEST,
    loading
  }
}
export const postArticleSuccess = (msg) => {
  return {
    type: POST_ARTICLE_SUCCESS,
    msg
  }
}
export const postArticleFailure = (error) => {
  return{
    type: POST_ARTICLE_FAILURE,
    error
  }
}
