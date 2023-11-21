import React from "react"
import App from "./App"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

const root = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
ReactDOM.render(root, document.getElementById("root"))
