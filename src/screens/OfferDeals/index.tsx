/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../utils';

const OfferDeals = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Offer Deals" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default OfferDeals;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
