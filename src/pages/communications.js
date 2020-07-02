import React from "react"
import Header from "../components/Header"
import Apps from "../components/apps/Apps"
import Footer from "../components/Footer"
import SEO from "../components/seo"

function Communications() {
  return (
    <div id="root">
      <SEO title="Apps" />
      <Header />
      <div className="content-wrapper">
        <Apps pastpapers={true} quiz={false} flashcards={false} />
      </div>
      <Footer />
    </div>
  )
}

export default Communications
