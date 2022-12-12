import React from "react";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Root = () => {
  return (
    <div>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Root;
