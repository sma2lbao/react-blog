
export const GET_USER = 'GET_USER'
export const GET_PASSWORD = 'GET_PASSWORD'
export const LOGIN = 'LOGIN'

export const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const getPassword = (password) => {
  return {
    type: GET_PASSWORD,
    password
  }
}

export const login = (user, password) => {
  return {
    type: LOGIN,
    user,
    password
  }
}
