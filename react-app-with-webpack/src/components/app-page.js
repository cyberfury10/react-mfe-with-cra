import React from "react"

import { Router } from "@reach/router"
import Home from "./home"
import Page1 from "./page1"
import { Redirect } from "@reach/router"

const AppPage = ({isReactRouter}) => (
  <>
    <Router>
      <Redirect from="/" to="dashboard" noThrow={true} />
      <Home path="dashboard/" />
      <Page1 path="dashboard/page1" />
    </Router>
  </>
)

export default AppPage
