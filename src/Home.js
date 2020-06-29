import React from "react";
import Header from "./components/Home/Header";
import Subheader from "./components/Home/Subheader";
import Footer from "./components/Home/Footer";

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
