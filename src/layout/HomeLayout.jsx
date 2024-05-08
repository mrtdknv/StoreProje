import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-full w-full min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
