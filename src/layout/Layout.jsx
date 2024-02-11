// 
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./sidebar/Navbar";



const Layout = () => {
  return (
    <div className="flex">
      <div className="">
      <Sidebar />
      </div>
      
      <div className="ml-10">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
