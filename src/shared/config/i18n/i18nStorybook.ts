import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation', 'profile', 'main', 'articles', 'articleDetails', 'adminPanel', 'about'];

const supportedLanguages = ['en', 'ru'];
const resources = ns.reduce((acc: any, n) => {
  supportedLanguages.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      // eslint-disable-next-line import/no-dynamic-require, global-require
      [n]: require(`../../../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {});

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    // debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: supportedLanguages,
    resources,
  });

export default i18n;
