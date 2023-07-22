import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native';
import './i18n';

// Entrypoint component is basic implementation of locale.

const App = () => {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('en');

  const handleLanguageChange = () => {
    const newLanguage = lang === 'en' ? 'he' : 'en';
    // setLang(newLanguage);
    i18n
      .changeLanguage(newLanguage)
      .then(() => setLang(newLanguage))
      .catch(err => console.log(err));
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{t('welcome')}</Text>
      <Text>{t('greeting')}</Text>
      <Button title={t('instruction')} onPress={handleLanguageChange} />
    </View>
  );
};

export default App;
