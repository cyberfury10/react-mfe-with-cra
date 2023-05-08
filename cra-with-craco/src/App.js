import React from "react"
import { Button, TextBox, List, DropDown, Table } from "react_webpack_app/component"

import "./index.css"
function App() {
  return (
    <>
      <h1> App name: "cra-with-craco"</h1>
      <div className="cra-container">
        <p> The contents here are loaded from <span style={{color: "green", fontWeight: "bold"}}>react-app-with-webpack</span></p>
        <Button />
        <TextBox />
        <List />
        <DropDown />
        <Table />
      </div>
    </>
  );
}

export default App;
