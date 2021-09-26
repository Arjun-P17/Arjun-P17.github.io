import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Work from "../components/Work/Work";
import About from "../components/About/about";
import Skills from "../components/Skills/skills";
import Promotion from "../components/Promotion/Promotion";
import Footer from "../components/Footer/Footer";
import "./home.scss";

const Home = () => {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Header></Header>
        <Work></Work>
        <About></About>
        <Skills></Skills>
        <Promotion></Promotion>
        <Footer></Footer>
      </main>
    </>
  );
};
export default Home;
