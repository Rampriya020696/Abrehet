/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import {compose} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';
import ActionBtn from '../../components/ActionBtn';

import {selectCartItems} from '../../store/features/cart/cartSlice';
import {colors, fonts} from '../../utils';

const Cart = ({onPress}) => {
  const [countryViseProducts, setCountryViseProducts] = useState({});
  const cartItems = useSelector(selectCartItems);

  const navigation = useNavigation<any>();
  const onCheckout = () => {
    navigation.navigate('Address');
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // setProducts(globalThis.cart ? Object.values(globalThis.cart) : []);
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    const data = cartItems.reduce((obj, currentItem) => {
      if (obj[currentItem?.content?.country] !== undefined) {
        obj[currentItem?.content?.country].push(currentItem);
      } else {
        obj[currentItem?.content?.country] = [currentItem];
      }
      return obj;
    }, {});

    setCountryViseProducts(data);
  }, [cartItems]);

  return (
    <View style={styles.page}>
      <Text style={styles.cart}>Cart</Text>

      {Object.values(countryViseProducts).length ? (
        Object.entries(countryViseProducts).map(([key, items]) => {
          const total = items.reduce((total, item) => {
            let cost = item?.content?.cost?.replaceAll(' ', '')?.slice(1);

            cost = Number(cost) * item.qty;
            let newTotal = total + cost;
            // console.log(`total ${total} + ${cost} = ${newTotal}`);
            return newTotal;
          }, 0);
          return (
            <TouchableOpacity
              key={key}
              style={{padding: 25}}
              onPress={() =>
                navigation.navigate('CartItemScreen', {cartItemData: items})
              }>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Country:</Text>
                <Text>{key}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Net Qty :</Text>
                <Text>{items.length}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Total :</Text>
                <Text>{total}</Text>
              </View>
              <ActionBtn
                title="Proceed to checkout"
                onPress={() =>
                  navigation.navigate('CartItemScreen', {cartItemData: items})
                }
              />
            </TouchableOpacity>
          );
        })
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../icons/empty.png')}
            style={{width: 200, height: 200, transform: [{translateX: -18}]}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 20,
              opacity: 0.4,
            }}>
            Cart Is Empty!
          </Text>
        </View>
      )}
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
