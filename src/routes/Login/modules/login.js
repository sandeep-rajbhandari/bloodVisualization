// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

// ------------------------------------
// Actions
// ------------------------------------
export function login(user = {}) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}
export function logout(user = {}) {
  return {
    type: LOGOUT_USER,
    payload: user
  }
}

export const actions = {
  login
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_USER]: (state, action) => { return { ...state, user: action.payload } },
  [LOGOUT_USER]: (state, action) => { return { ...state, user: {} } },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { user: {} }
export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
