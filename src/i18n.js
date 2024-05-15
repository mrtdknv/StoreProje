import i18next from "i18next";
import { I18nContext, initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      hello: "merhaba",
      home: "Anasayfa",
      about: "Hakkımızda",
      login: "Giriş Yap",
      password: "Şifre",
      fargotpassword: "Şifremi Unuttum",
      register: "Kaydol",
      name: "Ad",
      surname: "Soy Ad",
    },
  },
  en: {
    translation: {
      hello: "hello",
      home: "Home",
      about: "About",
      login: "Login",
      password: "Password",
      fargotpassword: "Fargot Password",
      register: "Register",
      name: "Nama",
      surname: "Surname",
    },
  },
};

i18next.use(initReactI18next).init({
  lng: "tr",
  resources,
});

export default i18next;
