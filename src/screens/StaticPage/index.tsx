/* eslint-disable prettier/prettier */
import {SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';

const StaticPage = () => {
  const {title} = useRoute<any>().params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={title} onPress={navigation.goBack} />
    </SafeAreaView>
  );
};

export default StaticPage;
