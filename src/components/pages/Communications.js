import React from "react";
import Header from "../Header";
import Apps from "../apps/Apps";
import Footer from "../Footer";

function Communications() {
  return (
      <>
      <Header />
      <div className='content-wrapper'>
      <Apps pastpapers={true} quiz={false} flashcards={false} />
      </div>
      <Footer />
    </>

  )
}

export default Communications

