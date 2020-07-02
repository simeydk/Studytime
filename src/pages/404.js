import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div id="root">
    <SEO title="404 Page Not Found" />
    <Header />
    <div className="content-wrapper">
      <h1>404 - PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    <Footer />
  </div>
)

export default NotFoundPage
