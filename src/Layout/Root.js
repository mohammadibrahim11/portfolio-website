import React from "react";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

import Nav from "../Shared/Nav/Nav";

const Root = () => {
  return (
    <div>
    {/* <Header></Header> */}
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Root;
