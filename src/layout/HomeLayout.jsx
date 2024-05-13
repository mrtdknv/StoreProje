import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <Navbar />
          <div className={`h-full w-full min-h-screen bg-buttonColor`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
