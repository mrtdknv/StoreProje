import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h3>{t("hello")}</h3>
    </div>
  );
}

export default Home;
