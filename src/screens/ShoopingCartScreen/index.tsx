import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILCartItem} from '../../Assets';
import Strip from '../../components/Strip';
import {colors, fonts} from '../../utils';

const Cart = ({navigation, onPress}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.cart}>Cart</Text>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={ILCartItem} style={styles.image} />
          <View style={styles.name}>
            <Text numberOfLines={2} style={styles.title}>
              Samsung Galaxy Note 9 8 GB ..asds asdasd
            </Text>
            <Text style={styles.desc}>Internal 1 TB</Text>
            <Text style={styles.price}>$ 950</Text>
            <View style={styles.pilih}>
              <TouchableOpacity>
                <Text style={styles.nomer}>-</Text>
              </TouchableOpacity>
              <View style={styles.strip} />
              <TouchableOpacity>
                <Text style={styles.nomer}>1</Text>
              </TouchableOpacity>
              <View style={styles.strip} />
              <TouchableOpacity>
                <Text style={styles.nomer}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Strip />
        <View style={styles.pay}>
          <Text style={styles.total}>Total : $ 950</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Delivery')}>
            <Text style={styles.titlePay}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {paddingHorizontal: 10},
  cart: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 20,
    color: colors.text.secondary,
    fontFamily: fonts.secondary[600],
  },
  container: {
    elevation: 3,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  pay: {
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  button: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    backgroundColor: colors.pay,
  },
  titlePay: {
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center',
    fontFamily: fonts.primary[600],
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 5,
    marginVertical: 10,
  },
  name: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: fonts.primary[700],
  },
  total: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  desc: {
    fontSize: 12,
    marginVertical: 10,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    marginBottom: 10,
  },
  pilih: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    borderWidth: 0.5,
    marginBottom: 10,
  },
  strip: {
    width: 1,
    height: 30,
    borderWidth: 0.5,
    marginRight: 12,
    marginLeft: 12,
  },
  nomer: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
  },
});
