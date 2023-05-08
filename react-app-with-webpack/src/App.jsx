import React from "react"
import ReactDOM from "react-dom"
import { Button, TextBox, List, DropDown, Table } from "cra/component"

import "./index.css"

const App = () => (
  <>
  <h1>App name: "react-app-with-webpack"</h1>
  <div className="react-webpack-container">
  <p> The contents here are loaded from <span style={{color: "green", fontWeight: "bold"}}>cra-with-craco</span></p>
    <Button />
    <TextBox />
    <List />
    <DropDown />
    <Table />
  </div>
</>
)

ReactDOM.render(<App />, document.getElementById("app"))
