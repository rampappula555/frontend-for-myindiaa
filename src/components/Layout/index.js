import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProtectedRoutes from "../ProtectedRoutes";

const Layout = () => {
  return (
    <div>
      <ProtectedRoutes>
        <Navbar />
        <Outlet />
        <Footer />
      </ProtectedRoutes>
    </div>
  );
};

export default Layout;
