import React from "react"
import Header from "./header"

function Home({ isInMfeMode }) {
  return (
    <div>
      <Header isInMfeMode={isInMfeMode} />
      Home REACT APP
    </div>
  )
}

export default Home
