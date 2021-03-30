import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { open } from "./reducers/open"
import thunk from "redux-thunk"

const rootReducer = combineReducers({ open })

/* eslint-disable no-underscore-dangle */
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).window.__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
)
/* eslint-enable */

export default store
