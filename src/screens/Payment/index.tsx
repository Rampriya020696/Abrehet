/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../utils';

const Payments = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Purchases" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Payments;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },

  
});
