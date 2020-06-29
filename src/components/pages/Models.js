import React from "react";
import Header from "../Header";
import Apps from "../apps/Apps";
import Footer from "../Footer";

function Models() {
  return (
      <>
      <Header />
      <div className='content'>
      <Apps pastpapers={true} quiz={true} flashcards={true} />
      </div>
      <Footer />
    </>

  )
}

export default Models

