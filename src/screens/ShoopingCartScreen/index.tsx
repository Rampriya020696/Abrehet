/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import {compose} from '@reduxjs/toolkit';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import {useSelector} from 'react-redux';
import ActionBtn from '../../components/ActionBtn';
import CartItem from '../ShoopingCartScreen/CartItem';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/features/cart/cartSlice';
import {colors, fonts} from '../../utils';
import Accordion from 'react-native-collapsible/Accordion';
import {ScrollView} from 'react-native-gesture-handler';

const test = [
  {
    title: 'Asmara, Mendefera, Keren and Dekemhare',
    content: [
      {
        qty: 2,
        id: 'Eri 276',
        isRecommended: null,
        createdAt: '2022-04-23T18:21:43.490Z',
        country: 'Asmara, Mendefera, Keren and Dekemhare',
        content: {
          country: 'Asmara, Mendefera, Keren and Dekemhare',
          image:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/20221228_103415.jpg',
          images:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/20221228_103437.jpg',
          cost: '$60',
          price: '$99.99',
          description: 'Cooker Gas. We deliver to the address provided. ',
          id: '16',
          title: 'Cooker Gas',
        },
        category: 'Groceries',
        title: 'Cooker Gas',
        updatedAt: '2022-07-22T17:56:59.238Z',
        cost: '$60',
        description: 'Cooker Gas. We deliver to the address provided. ',
        image:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/20221228_103415.jpg',
        images:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/20221228_103437.jpg',
        price: '$99.99',
      },
      {
        qty: 2,
        id: 'Eri 310',
        isRecommended: null,
        createdAt: '2022-04-23T18:21:43.490Z',
        country: 'Asmara, Mendefera, Keren and Dekemhare',
        content: {
          country: 'Asmara, Mendefera, Keren and Dekemhare',
          image:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/Water+Filter.jpg',
          images:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/Water+Filter.jpg',
          cost: '$50',
          price: '$65.99',
          description: 'Water Filter 24L. We deliver to the address provided. ',
          id: '16,2',
          title: 'Water Filter',
        },
        category: 'Groceries',
        title: 'Water Filter',
        updatedAt: '2022-07-22T17:56:59.238Z',
        cost: '$50',
        description: 'Water Filter 24L. We deliver to the address provided. ',
        image:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/Water+Filter.jpg',
        images:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Electronics/Water+Filter.jpg',
        price: '$65.99',
      },
      {
        qty: 1,
        id: 'Eri 252',
        isRecommended: null,
        createdAt: '2022-04-23T18:21:43.490Z',
        country: 'Asmara, Mendefera, Keren and Dekemhare',
        content: {
          country: 'Asmara, Mendefera, Keren and Dekemhare',
          image: 'https://appimagesabrehet.s3.amazonaws.com/Potato',
          images:
            'https://appimagesabrehet.s3.amazonaws.com/Potato,https://appimagesabrehet.s3.amazonaws.com/Potato,https://appimagesabrehet.s3.amazonaws.com/Potato',
          cost: '$1.65',
          price: '$2.40',
          description:
            'Per Killo. We deliver to Asmara, Mendefera, Keren and Dekemhare',
          id: '2',
          title: 'Potato',
        },
        category: 'Groceries',
        title: 'Potato',
        updatedAt: '2022-07-22T17:56:59.238Z',
        cost: '$1.65',
        description:
          'Per Killo. We deliver to Asmara, Mendefera, Keren and Dekemhare',
        image: 'https://appimagesabrehet.s3.amazonaws.com/Potato',
        images:
          'https://appimagesabrehet.s3.amazonaws.com/Potato,https://appimagesabrehet.s3.amazonaws.com/Potato,https://appimagesabrehet.s3.amazonaws.com/Potato',
        price: '$2.40',
      },
    ],
  },
  {
    title: 'International',
    content: [
      {
        qty: 2,
        id: 'Muller 16',
        isRecommended: null,
        createdAt: '2022-05-30T20:14:23.315Z',
        country: 'International',
        content: {
          country: 'International',
          image:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Zurya+with+green+and+Nesela.jpg',
          images:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Zurya+with+green+and+Nesela.jpg',
          cost: '$110',
          price: '$150',
          description:
            'Zurya green with Nesela delivery fee included. International shippment available. ',
          title: 'Zurya green with Nesela',
        },
        category: 'Muller Fassion',
        title: 'Zurya green with Nesela',
        updatedAt: '2022-05-30T20:14:23.315Z',
        cost: '$110',
        description:
          'Zurya green with Nesela delivery fee included. International shippment available. ',
        image:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Zurya+with+green+and+Nesela.jpg',
        images:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Zurya+with+green+and+Nesela.jpg',
        price: '$150',
      },
      {
        qty: 2,
        id: 'Muller 19',
        isRecommended: true,
        createdAt: '2022-05-30T20:14:23.315Z',
        country: 'International',
        content: {
          country: 'International',
          image:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Red+Shifon.jpg',
          images:
            'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Red+Shifon.jpg',
          cost: '$110',
          price: '$120',
          description:
            'Red Shifon delivery fee included. International shippment available. ',
          title: 'Red Shifon',
        },
        category: 'Muller Fassion',
        title: 'Red Shifon',
        updatedAt: '2022-05-30T20:14:23.315Z',
        cost: '$110',
        description:
          'Red Shifon delivery fee included. International shippment available. ',
        image:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Red+Shifon.jpg',
        images:
          'https://s3.amazonaws.com/abrehet.update.data.ui/Muller+Fashion/Red+Shifon.jpg',
        price: '$120',
      },
      {
        qty: 1,
        id: 'Muller 10',
        isRecommended: null,
        createdAt: '2022-05-30T20:14:23.315Z',
        country: 'International',
        content: {
          country: 'International',
          image:
            'https://appimagesabrehet.s3.amazonaws.com/Muler+Fasion/Light+Green+dress+without+nesela+160.jpg',
          images:
            'https://appimagesabrehet.s3.amazonaws.com/Muler+Fasion/Light+Green+dress+without+nesela+160.jpg',
          cost: '$110',
          price: '$165',
          description:
            'Light green Dress with Nesela delivery fee included. International shipment is available. ',
          title: 'Light Green Dress with Nesela',
        },
        category: 'Muller Fassion',
        title: 'Light Green Dress with Nesela',
        updatedAt: '2022-05-30T20:14:23.315Z',
        cost: '$110',
        description:
          'Light green Dress with Nesela delivery fee included. International shipment is available. ',
        image:
          'https://appimagesabrehet.s3.amazonaws.com/Muler+Fasion/Light+Green+dress+without+nesela+160.jpg',
        images:
          'https://appimagesabrehet.s3.amazonaws.com/Muler+Fasion/Light+Green+dress+without+nesela+160.jpg',
        price: '$165',
      },
    ],
  },
];

const BigCheckoutBtn = ({title, total, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 10,
        backgroundColor: '#0bad0a',

        width: 300,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '900',
          padding: 18,
        }}>
        {title}
      </Text>
      <Text
        style={{
          backgroundColor: '#098a09',
          color: 'white',
          position: 'absolute',
          right: 20,
          bottom: 15,
          padding: 3,
          fontSize: 12,
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
  console.log(cartItems, 'cartItems');
  console.log(countryViseProductsArray, 'countryViseProductsArray');
  const navigation = useNavigation<any>();
  const onCheckout = () => {
    navigation.navigate('Address');
  };

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

  return (
    <View style={styles.page}>
      <Text style={styles.cart}>Cart</Text>

      {/* {Object.values(countryViseProducts).length ? (
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
      )} */}
      {countryViseProductsArray.length ? (
        <>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '900',
              marginBottom: 10,
              marginLeft: 27,
            }}>
            Cart By Countries
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
                        paddingVertical: 2,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Total :</Text>
                        <Text>$ {total}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Net Qty :</Text>
                        <Text>{section.content.length}</Text>
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
            title={'Checkout All Carts'}
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
