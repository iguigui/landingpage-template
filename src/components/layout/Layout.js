import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = ({ className }) => {
  return (
    <div className="mainlayout">
      <Outlet />
    </div>
  );
};

export default Layout;
