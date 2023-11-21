import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import Page1 from "./components/page1"
import { Router } from "@reach/router"
import Home from "./components/home"
import { Redirect } from "@reach/router"

const App = ({ isInMfeMode = false }) => (
  <>
    <h1>App name: "react-app-with-webpack"</h1>
    <Router primary={true} noThrow={true}>
      <Redirect from="/" to="dashboard" noThrow={true} />
      <Home path="dashboard/" isInMfeMode={isInMfeMode} />
      <Page1 path="dashboard/page1" isInMfeMode={isInMfeMode} />
    </Router>
  </>
)

ReactDOM.render(<App />, document.getElementById("app"))
