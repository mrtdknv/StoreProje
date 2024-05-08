import i18next from "i18next";
import { I18nContext, initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      hello: "merhaba",
      home: "Anasayfa",
      about: "Hakkımızda",
    },
  },
  en: {
    translation: {
      hello: "hello",
      home: "Home",
      about: "About",
    },
  },
};

i18next.use(initReactI18next).init({
  lng: "tr",
  resources,
});

export default i18next;
