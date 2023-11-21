import React from "react"

import { Router } from "@reach/router"
import Home from "./home"
import Page1 from "./page1"
import { Redirect } from "@reach/router"

const AppPage = ({isInMfeMode = false}) => (
  <>
    <Router>
      <Redirect from="/" to="dashboard" noThrow={true} />
      <Home path="dashboard/" isInMfeMode={isInMfeMode}/>
      <Page1 path="dashboard/page1" isInMfeMode={isInMfeMode}/>
    </Router>
  </>
)

export default AppPage
