export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_PASS = 'LOGIN_PASS'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

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
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}
