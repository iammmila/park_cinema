import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar/Navbar";

function AdminRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AdminRoot;