import {useNavigation} from '@react-navigation/native';
import {navItem} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {ILCartItem} from '../../Assets';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import Strip from '../../components/Strip';
import {addToCart, removeToCart} from '../../store/features/cart/cartSlice';
import {colors, fonts} from '../../utils';

interface CartProductItemProps {
  cartItem: {
    id: string;
    qty: number;
    cost?: string;
    description: string;
    title: string;
    image: string;
    price: string;
  };
}
const CartItem = ({cartItem}: CartProductItemProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  // const {quantity: quantityProp, item} = cartItem;
  // const [quantity, setQuantity] = useState(quantityProp);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={{uri: cartItem.image}} style={styles.image} />
        <View style={styles.name}>
          <Text numberOfLines={2} style={styles.title}>
            {cartItem.title}
          </Text>
          <Text style={styles.desc}>
            {`${cartItem.description.substring(0, 80)}...`}
          </Text>
          <Text style={styles.price}>{cartItem.price}</Text>
          <View style={styles.pilih}>
            <TouchableOpacity
              onPress={() => {
                dispatch(removeToCart(cartItem));
                // let newQty = quantity - 1;
                // globalThis.cart[item.id].quantity = newQty;
                // setQuantity(newQty);
              }}>
              <Text style={styles.nomer}>-</Text>
            </TouchableOpacity>
            <View style={styles.strip} />
            <TouchableOpacity>
              <Text style={styles.nomer}>{cartItem.qty}</Text>
            </TouchableOpacity>
            <View style={styles.strip} />
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(cartItem));
                // let newQty = quantity + 1;
                // globalThis.cart[item.id].quantity = newQty;
                // setQuantity(newQty);
              }}>
              <Text style={styles.nomer}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Strip />
      <View style={styles.pay}>
        <Text style={styles.total}> Qty: {cartItem.qty}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // globalThis.itemDetails = item.id;
            // console.log('item pressed', globalThis);
            navigation.navigate('ProductDetails');
          }}>
          <Text style={styles.titlePay}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartItem;

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
