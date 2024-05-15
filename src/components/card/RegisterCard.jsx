import React from "react";
import { useTranslation } from "react-i18next";

export default function RegisterCard() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-logincardbg rounded-xl h-96 w-80 shadow-shadow shadow-2xl lg:w-2/5 md:w-3/5 md:h-3/4 p-4 flex flex-col items-center">
        <h4 className="text-text text-2xl font-bold font-serif">
          {t("register")}
        </h4>
        <input
          className="bg-logininputbg rounded-3xl text-text p-2 mt-5 text-center w-full lg:w-3/4 focus:outline-none focus:bg-logininputbg focus:text-text active:bg-logininputbg active:text-text"
          placeholder="Email"
        />
        <input
          className="bg-logininputbg rounded-3xl text-text p-2 mt-5 text-center w-full lg:w-3/4 focus:outline-none focus:bg-logininputbg focus:text-text active:bg-logininputbg active:text-text"
          type="password"
          placeholder={t("password")}
        />
        <input
          className="bg-logininputbg rounded-3xl text-text p-2 mt-5 text-center w-full lg:w-3/4 focus:outline-none focus:bg-logininputbg focus:text-text active:bg-logininputbg active:text-text"
          type="text"
          placeholder={t("name")}
        />
        <input
          className="bg-logininputbg rounded-3xl text-text p-2 mt-5 text-center w-full lg:w-3/4 focus:outline-none focus:bg-logininputbg focus:text-text active:bg-logininputbg active:text-text"
          type="text"
          placeholder={t("surname")}
        />
        <div className="h-4 lg:h-8"></div>{" "}
        <button className="w-48 h-10 font-bold rounded-3xl mt-6 text-buttontextColor bg-buttonColor">
          {t("register")}
        </button>
      </div>
    </div>
  );
}
