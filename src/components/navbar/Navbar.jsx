import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const navigation = [
  { name: "home", href: "/", current: false },
  { name: "about", href: "/about", current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // i18n ve t değişkenlerini tanımla

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  // Navigation dizisini çeviri fonksiyonu ile doldur
  const translatedNavigation = navigation.map((item) => ({
    ...item,
    name: t(item.name),
  }));

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-lg">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {translatedNavigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:text-white"
                    } px-3 py-2 rounded-md text-sm font-medium`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-white"
              onClick={() => clickHandle("tr")} // TR butonu
            >
              TR
            </button>
            <button
              className="text-white"
              onClick={() => clickHandle("en")} // EN butonu
            >
              EN
            </button>
            <button className="bg-violet-800" onClick={changeTheme}>
              Tema
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {translatedNavigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:text-white"
              } block px-3 py-2 rounded-md text-base font-medium`}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex"></div>
      </div>
    </nav>
  );
}

export default Navbar;
