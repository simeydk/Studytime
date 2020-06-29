import React from "react";
import Header from "../Header";
import Subheader from "../home/Subheader";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Header />
      <div className='content'>
      <Subheader />
      </div>
      <Footer />
    </>
  );
}

export default Home;
