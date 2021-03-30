import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Routers } from "@/app/router/index"
import store from "./app/store"
console.log(Routers)

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById("root")
)
