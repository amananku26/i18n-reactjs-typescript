import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-http-backend";
import commonSinhala from "./locales/si/common.json";
import commonHindi from "./locales/hi/common.json";
import commonEn from "./locales/en/common.json";

const resources = {
  en: { common: commonEn },
  si: { common: commonSinhala },
  hi: { common: commonHindi }
};

const options = {
  order: ["querystring", "localStorage", "navigator"],
  caches: ["localStorage"],
  lookupQuerystring: "lng"
};
i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en' // <--- turn off for detection to work
    detection: options,
    resources,
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: ["en", "si", "hi"],
    interpolation: {
      escapeValue: false
    },
    debug: false
  });

export default i18n;
