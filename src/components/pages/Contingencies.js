import React from "react";
import Header from "../Header";
import Apps from "../apps/Apps";
import Footer from "../Footer";

function Contingencies() {
  return (
      <>
      <Header />
      <div className='content-wrapper'>
      <Apps pastpapers={true} quiz={true} flashcards={false} />
      </div>
      <Footer />
    </>

  )
}

export default Contingencies

