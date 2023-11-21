import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ReachRouterLink } from "@reach/router"

function Header({ isReactRouter }) {
  const CustomRouter = isReactRouter ? ReactRouterLink : ReachRouterLink
  return (
    <div>
      <ReactRouterLink to='/'>Host Home</ReactRouterLink> | 
      <CustomRouter to="/dashboard"> Local Home</CustomRouter> | <CustomRouter to="/dashboard/page1"> Local Page 1</CustomRouter>
    </div>
  )
}

export default Header
