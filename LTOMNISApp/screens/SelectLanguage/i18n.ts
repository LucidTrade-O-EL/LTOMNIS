import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json'; // Adjust path as needed
import es from './locales/es.json'; // Adjust path as needed

// Define the structure for the resources object
interface TranslationResources {
  translation: {
    [key: string]: string;
  };
}

interface Resources {
  en: TranslationResources;
  // ... other languages
}

const resources: Resources = {
  en: {
    translation: {
      // Your English translations
    },
  },
  // ... other languages
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
