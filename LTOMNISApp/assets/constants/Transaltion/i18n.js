import * as RNLocalize from "react-native-localize";
import i18n from 'i18n-js';

I18n.translations = {
    en: {
      chooseLanguage: 'Choose Language',
      english: 'English',
      spanish: 'Spanish',
      // ... other translations
    },
    es: {
      chooseLanguage: 'Elegir idioma',
      english: 'Inglés',
      spanish: 'Español',
      // ... other translations
    },
  };

i18n.translations = translations;

// fallbacks if the current locale doesn't have a translation
i18n.fallbacks = true;

// initial locale is based on the device settings
i18n.locale = RNLocalize.getLocales()[0].languageCode;

export default i18n;
