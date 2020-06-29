import React from "react";
import Header from "../Header";
import Content from "../home/Content";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Header />
      <div className='content-wrapper'>
      <Content />
      </div>
      <Footer />
    </>
  );
}

export default Home;
