import React from "react";
import { useTranslation } from "react-i18next";

export default function LoginCard() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-logincardbg rounded-xl h-96 w-80 shadow-shadow shadow-2xl lg:w-2/5 p-4 flex flex-col items-center">
        <h4 className="text-text text-2xl font-bold font-serif">
          {t("login")}
        </h4>
        <input
          className="bg-logininputbg rounded-3xl text-text p-2 mt-5 text-center w-full lg:w-3/4 focus:outline-none focus:bg-logininputbg focus:text-text active:bg-logininputbg active:text-text"
          placeholder="Email"
        />
        <div className="h-4 lg:h-8"></div>{" "}
        {/* Boşluk eklemek için div kullanımı */}
        <input
          className="bg-logininputbg rounded-3xl text-text p-2 text-center w-full lg:w-3/4 focus:outline-none focus:bg-logininputbg focus:text-text active:bg-logininputbg active:text-text"
          type="password"
          placeholder={t("password")}
        />
        <p className="mt-6 text-text">{t("fargotpassword")}</p>
        <p className="mt-6 text-text">{t("register")}</p>
        <button className="w-48 h-10 font-bold rounded-3xl mt-6 text-buttontextColor bg-buttonColor">
          {t("login")}
        </button>
      </div>
    </div>
  );
}
