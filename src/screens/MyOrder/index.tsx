/* eslint-disable prettier/prettier */
import {useRoute} from '@react-navigation/native';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ICBlipOrder,
  ICBox,
  ICHand,
  ICHouse,
  ICKurir,
  ICNote,
  ICOrder,
} from '../../Assets';
import Gap from '../../components/Gap';
import Header from '../../components/Header';

import {colors, fonts} from '../../utils';
import TrackingView from './TrackingView';

const MyOrder = ({navigation}) => {
  const {order} = useRoute().params;

  return (
    <View style={styles.page}>
      <Header title="Track My Order" onPress={() => navigation.goBack()} />
      <TrackingView order={order} />
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
  },
  orders: {
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 12,
  },
  text: {
    marginLeft: 20,
  },
  tujuan: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  clock: {
    flex: 1,
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 16,
    fontFamily: fonts.secondary[500],
    marginTop: 10,
    marginRight: 40,
  },
  arrived: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderWidth: 1,
    borderColor: colors.borderstrip,
    borderRadius: 20,
    marginBottom: 80,
  },
  house: {
    width: 40,
    height: 40,
  },
  spec: {
    marginLeft: 20,
  },
  delivery: {
    fontSize: 18,
    fontFamily: fonts.secondary[600],
  },
  place: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
  },
  address: {
    fontSize: 14,
    color: colors.text.secondary,
  },
});
