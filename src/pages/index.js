import * as React from "react"
import Header from "../component/Navbar"
import Body from "../component/Body"
import '../style/global.css'
// styles
const bodyPage={
  margin:"0px",
}


// data


// markup
const IndexPage = () => {
  return (
    <main style={bodyPage}>
    <Body/>

      <h1>Hello</h1>
    </main>
  )
}

export default IndexPage
