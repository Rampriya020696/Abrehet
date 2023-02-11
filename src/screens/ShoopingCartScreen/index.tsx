/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import {compose} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import ActionBtn from '../../components/ActionBtn';
import CartItem from '../ShoopingCartScreen/CartItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  handleOrdersComplete,
  selectCartItems,
  selectCartTotal,
} from '../../store/features/cart/cartSlice';
import {colors, fonts} from '../../utils';
import Accordion from 'react-native-collapsible/Accordion';
import {ScrollView} from 'react-native-gesture-handler';

const BigCheckoutBtn = ({title, total, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 10,
        backgroundColor: '#3A2E6E',

        width: 300,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '400',
          padding: 18,
        }}>
        {title}
      </Text>
      <Text
        style={{
          backgroundColor: '#3A2E6E',
          color: 'white',
          position: 'absolute',
          right: 20,
          bottom: 12,
          padding: 3,
          fontSize: 16,
          paddingVertical: 8,
          borderRadius: 5,
        }}>
        {total}
      </Text>
    </TouchableOpacity>
  );
};

const Cart = () => {
  const [countryViseProducts, setCountryViseProducts] = useState({});
  const [countryViseProductsArray, setCountryViseProductsArray] = useState([]);
  const [activeSections, setActiveSections] = useState([0]);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  console.log(cartItems, 'cartItems');
  console.log(countryViseProductsArray, 'countryViseProductsArray');
  const navigation = useNavigation<any>();

  useEffect(() => {
    const data = cartItems.reduce((obj, currentItem) => {
      if (obj[currentItem?.content?.country] !== undefined) {
        obj[currentItem?.content?.country].push(currentItem);
      } else {
        obj[currentItem?.content?.country] = [currentItem];
      }
      return obj;
    }, {});

    let arr = [];
    for (let key in data) {
      let obj = {
        title: key,
        content: data[key],
      };
      arr.push(obj);
    }

    setCountryViseProducts(data);
    setCountryViseProductsArray(arr);
  }, [cartItems]);

  const handleCrossPress = items => {
    dispatch(handleOrdersComplete({orderData: items}));
  };

  return (
    <View style={styles.page}>
      <Text style={styles.cart}>Cart</Text>

      {countryViseProductsArray.length ? (
        <>
          <Text
            style={{
              fontSize: 20,
              
              color: 'black',
              marginBottom: 10,
              marginLeft: 27,
            }}>
            Cart By Categories
          </Text>
          <ScrollView style={{paddingHorizontal: 25}}>
            <Accordion
              underlayColor="transparent"
              sections={countryViseProductsArray}
              activeSections={activeSections}
              renderHeader={(section, _, isActive) => {
                const total = section.content?.reduce((total, item) => {
                  let cost = item?.content?.cost?.replaceAll(' ', '')?.slice(1);
                  cost = Number(cost) * item.qty;
                  let newTotal = total + cost;
                  // console.log(`total ${total} + ${cost} = ${newTotal}`);
                  return newTotal;
                }, 0);
                return (
                  <View
                    style={{
                      backgroundColor: isActive ? '#d2d2d2' : 'white',
                      elevation: 1,
                      borderRadius: 5,
                      padding: 15,
                      marginVertical: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => handleCrossPress(section.content)}
                      style={{
                        backgroundColor: 'white',
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        zIndex: 1,
                      }}>
                      <Ionicons name="close" size={15} color="black" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '900',
                      }}>
                      {section.title}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingVertical: 12,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Total: </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>$ {total}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Net Qty: </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 19, color: 'black'}}>{section.content.length}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
              renderContent={section => {
                return (
                  <View style={{paddingBottom: 20}}>
                    {section?.content?.map(item => (
                      <CartItem cartItem={item} />
                    ))}
                    <View style={{alignItems: 'center'}}>
                      <ActionBtn
                        title={'checkout now!'}
                        containerStyle={{width: '90%', borderRadius: 5}}
                        onPress={() => {
                          navigation.navigate('Address', {
                            cartItemData: section?.content,
                          });
                        }}
                      />
                    </View>
                  </View>
                );
              }}
              onChange={s => {
                setActiveSections(s);
              }}
            />
          </ScrollView>
        </>
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
      {countryViseProductsArray.length ? (
        <View style={{alignItems: 'center', padding: 10}}>
         
          <BigCheckoutBtn
            title={'All Carts Checkout                         '} 
            total={`$ ${cartTotal.toFixed(2)}`}
            onPress={() => {
              navigation.navigate('Address', {cartItemData: cartItems});
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  wrapper: {paddingHorizontal: 10},
  cart: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 20,
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
