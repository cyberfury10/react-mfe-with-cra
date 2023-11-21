import React from "react"
import Header from "./header"

function Page1({ isInMfeMode }) {
  return (
    <>
      <Header isInMfeMode={isInMfeMode} />
      <div>Page 1 React APP</div>
    </>
  )
}

export default Page1
