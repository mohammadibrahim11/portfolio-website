import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="row">
      <div className="col-1">
        <h1>socila media</h1>
      </div>
      <div className="col-10">
        <Header></Header>
        <About></About>
      </div>
      <div className="col-1">
        <h1>mail</h1>
      </div>
    </div>
  );
};

export default Home;
