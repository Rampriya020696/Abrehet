import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
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

const MyOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Track My Order" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Gap height={10} />
        <Text style={styles.detail}>Wed, 12 September</Text>
        <Text style={styles.detail}>Order ID : 5l36 - 9iu2</Text>
        <Gap height={20} />
        <Text style={styles.title}>Orders</Text>
        <Gap height={20} />
        <View style={styles.orders}>
          <ICOrder marginTop={10} />
          <Image source={ICBox} style={styles.image} />
          <View style={styles.text}>
            <Text style={styles.tujuan}>Ready to Pickup</Text>
            <Text style={styles.desc}>Order from TrevaShop</Text>
          </View>
          <View style={styles.clock}>
            <Text style={styles.time}>11:00</Text>
          </View>
        </View>
        <View style={styles.orders}>
          <ICOrder marginTop={10} />
          <Image source={ICKurir} style={styles.image} />
          <View style={styles.text}>
            <Text style={styles.tujuan}>Order Processed</Text>
            <Text style={styles.desc}>We are preparing your order</Text>
          </View>
          <View style={styles.clock}>
            <Text style={styles.time}>09:50</Text>
          </View>
        </View>
        <View style={styles.orders}>
          <ICOrder marginTop={10} />
          <Image source={ICHand} style={styles.image} />
          <View style={styles.text}>
            <Text style={styles.tujuan}>Payment Confirmed</Text>
            <Text style={styles.desc}>Awaiting Confirmation</Text>
          </View>
          <View style={styles.clock}>
            <Text style={styles.time}>08:20</Text>
          </View>
        </View>
        <View style={styles.orders}>
          <ICBlipOrder marginTop={10} />
          <Image source={ICNote} style={styles.image} />
          <View style={styles.text}>
            <Text style={styles.tujuan}>Order Placed</Text>
            <Text style={styles.desc}>We have receive your order</Text>
          </View>
          <View style={styles.clock}>
            <Text style={styles.time}>08:00</Text>
          </View>
        </View>
        <Gap height={40} />
        <View style={styles.arrived}>
          <Image source={ICHouse} style={styles.house} />
          <View style={styles.spec}>
            <Text style={styles.delivery}>Delivery Address</Text>
            <Text style={styles.place}>Home, Work & Other Address</Text>
            <Text style={styles.address}>
              House No:1234, 2nd Floor Sector 18, {'\n'}Silicon Valey Amerika
              Serikat
            </Text>
          </View>
        </View>
      </ScrollView>
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
