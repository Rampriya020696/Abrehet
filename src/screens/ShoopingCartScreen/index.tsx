import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {ILCartItem} from '../../Assets';
import ActionBtn from '../../components/ActionBtn';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import Strip from '../../components/Strip';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/features/cart/cartSlice';
import {colors, fonts} from '../../utils';
import CartItem from './CartItem';

const Cart = ({onPress}) => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation<any>();
  const onCheckout = () => {
    navigation.navigate('Address');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setProducts(globalThis.cart ? Object.values(globalThis.cart) : []);
    });
    return unsubscribe;
  }, [navigation]);

  // console.log(globalThis.cart, 'CART');
  return (
    <View style={styles.page}>
      <Text style={styles.cart}>Cart</Text>
      <View
        style={{
          marginLeft: 20,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: fonts.primary[600],
          }}>
          {/* Subtotal ({products.length} item): */}
          Subtotal ({cartItems.length} item):
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            {/* {products
              .reduce((summedPrice, product) => {
                let itemPrice = summedPrice + product['item']['price'];
                if (typeof itemPrice === 'string') {
                  itemPrice = Number(itemPrice?.replaceAll('$', ''));
                }
                return itemPrice * product['quantity'];
              }, 0)
              .toFixed(2)} */}
            {cartTotal.toFixed(2)}
          </Text>
        </Text>

        <ActionBtn
          title="Proceed to checkout"
          onPress={onCheckout}
          containerStyle={{marginHorizontal: 20, marginLeft: 0}}
        />
      </View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
      {/* item start */}

      {/* item end */}
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
