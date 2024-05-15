import React from "react";
import { useTranslation } from "react-i18next";
import LoginCard from "../../components/card/LoginCard";

export default function Login() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <LoginCard />
    </div>
  );
}
