import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ReachRouterLink } from "@reach/router"

function Header({ isInMfeMode }) {
  return (
    <div>
      {isInMfeMode && <ReactRouterLink to="/">Host Home</ReactRouterLink>}|
      <ReachRouterLink to="/dashboard"> Local Home</ReachRouterLink> |
      <ReachRouterLink to="/dashboard/page1"> Local Page 1</ReachRouterLink>
    </div>
  )
}

export default Header
