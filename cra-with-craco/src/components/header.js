import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"

function Header(props) {
  return (
    <div>
      <ReactRouterLink to="/page1">Page 1</ReactRouterLink> |  
      <ReactRouterLink to="/">Home</ReactRouterLink> | 
      <ReactRouterLink to="/mfe">Mfe</ReactRouterLink> 
    </div>
  )
}

export default Header