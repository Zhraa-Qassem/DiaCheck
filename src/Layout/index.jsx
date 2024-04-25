import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({}) => {
  return (
    <>
    <NavBar />
    <div className='pt-44'>
      <Outlet />
    </div>
    <Footer />
    </>
  );
};

export default Layout;
