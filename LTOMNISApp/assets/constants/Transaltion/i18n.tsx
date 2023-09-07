import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

import esTranslations from './esTranslations';
import enTranslations from './enTranslations';

console.log(i18n);
i18n.translations = {
  en: enTranslations,
  es: esTranslations,
};

// fallbacks if the current locale doesn't have a translation
i18n.fallbacks = true;

// initial locale is based on the device settings
// i18n.locale = RNLocalize.getLocales()[0].languageCode;
i18n.locale = 'es'; // Set to Spanish

export default i18n;
