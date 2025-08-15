import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
