import React from 'react';
import {Button, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export const EntryPoint = () => {
  const {t, i18n} = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{t('welcome')}</Text>
      <Text>{t('greeting')}</Text>
      <Button title={t('instruction')} onPress={handleLanguageChange} />
    </View>
  );
};
