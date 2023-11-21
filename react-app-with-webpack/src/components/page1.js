import React from "react"
import Header from "./header"

function Page1({ isReactRouter }) {
  return (
    <>
      <Header isReactRouter={isReactRouter} />
      <div>Page 1 React APP</div>
    </>
  )
}

export default Page1
