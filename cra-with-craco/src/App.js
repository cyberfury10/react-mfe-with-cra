import React from "react"
import { AppPage } from "react_webpack_app/component"

import "./index.css"
import { Route, Routes } from "react-router-dom"
import Page1 from "./components/page1"
import Home from "./components/home"
import { Router } from "@reach/router"
function App() {
  return (
    <>
      <h1> App name: "cra-with-craco"</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route
          path="/mfe"
          element={
            <Router primary>
              <AppPage default />
            </Router>
          }
        />
      </Routes>
    </>
  )
}

export default App
