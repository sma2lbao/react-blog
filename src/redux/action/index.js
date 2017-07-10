export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_PASS = 'LOGIN_PASS'
export const LOGIN_

export const setLoginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

export const setLoginPass = (pass) => {
  return {
    type: 'LOGIN_PASS',
    pass
  }
}
