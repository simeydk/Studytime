import React from "react"
import Header from "../components/Header"
import Apps from "../components/apps/Apps"
import Footer from "../components/Footer"
import SEO from "../components/seo"

function Models() {
  return (
    <div id="root">
      <SEO title="Apps" />
      <Header />
      <div className="content-wrapper">
        <Apps pastpapers={true} quiz={true} flashcards={true} />
      </div>
      <Footer />
    </div>
  )
}

export default Models
