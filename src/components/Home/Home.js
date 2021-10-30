import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Authors from "../Authors/Authors";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Books></Books>
      <Gallery></Gallery>
      <Authors></Authors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
