import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

// Reducer function
const initialState = { countries: [] }

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COUNTRIES":
      return { ...state, countries: action.payload }
    default:
      return state
  }
}

// Create store
const store = createStore(reducer, applyMiddleware(thunk))

export default store
