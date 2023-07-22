import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import he from './locales/he.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en,
    he,
  },
  interpolation: {
    escapeValue: true, // react already safes from xss - but developer should be responsible about mitigation of xss attack
  },
});

export default i18n;
