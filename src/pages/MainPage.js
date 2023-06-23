import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement ";
import Footer from "../components/Footer";

export default function MainPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
