import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    locales: ['en', 'ru'],
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
