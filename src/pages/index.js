import React from "react"
import Header from "../components/Header"
import Content from "../components/home/Content"
import Footer from "../components/Footer"
import SEO from "../components/seo"

function Index() {
  return (
    <div id="root">
      <SEO title="Home" />
      <Header />
      <div className="content-wrapper">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Index
