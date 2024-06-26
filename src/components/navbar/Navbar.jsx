import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTheme } from "../../redux/datas/themeSlice";
import { current } from "@reduxjs/toolkit";

const navigation = [
  { name: "home", href: "/", current: false },
  { name: "login", href: "/login", current: false },
  { name: "register", href: "/register", current: false },
];

function Navbar() {
  const dispatch = useDispatch();
  const activeTheme = useSelector((state) => state.theme.activeTheme);

  useEffect(() => {
    localStorage.setItem("currentTheme", activeTheme);
  }, [activeTheme]);

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

  const [dropOpen, setDropOpen] = useState(false);

  const handleChangeTheme = (theme) => {
    dispatch(changeActiveTheme(theme));
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
            {/*<button className="bg-violet-800" onClick={changeTheme}>
              Tema
            </button>*/}
            {/*-----------------------------*/}

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              onClick={() => {
                setDropOpen(!dropOpen);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown button{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                dropOpen ? "hidden" : ""
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li
                  onClick={() => {
                    handleChangeTheme("halloween");
                  }}
                >
                  halloween
                </li>
                <li
                  onClick={() => {
                    handleChangeTheme("summer");
                  }}
                >
                  summer
                </li>
              </ul>
            </div>

            {/*-----------------------------*/}
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
