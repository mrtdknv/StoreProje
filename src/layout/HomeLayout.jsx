import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={`h-full w-full min-h-screen bg-primary text-textColor`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
