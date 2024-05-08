import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const backgroundClassName = darkTheme
    ? "bg-orange-600 text-slate-600 dark:bg-slate-600"
    : "bg-slate-600 dark:bg-orange-600";

  return (
    <div>
      <Navbar />
      <div className={`h-full w-full min-h-screen ${backgroundClassName}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
