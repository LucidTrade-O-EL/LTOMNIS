import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from 'i18n-js';

const ChooseLanguage: React.FC = () => {
  const [locale, setLocale] = useState(i18n.locale);

  const changeLanguage = (locale: string) => {
    setLocale(locale);
    i18n.locale = locale;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('chooseLanguage')}</Text>
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => changeLanguage('en')}>
        <Text style={styles.languageText}>{i18n.t('english')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => changeLanguage('es')}>
        <Text style={styles.languageText}>{i18n.t('spanish')}</Text>
      </TouchableOpacity>
      {/* Add more languages as needed */}
    </View>
  );
};

// ... (rest of your styles and export)


// ... (rest of your code)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  languageText: {
    fontSize: 18,
  },
});

export default ChooseLanguage;
