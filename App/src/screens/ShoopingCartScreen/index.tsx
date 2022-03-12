/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';

const ShopingCartScreen = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  const onCheckout = () => {
    navigation.navigate('Address');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setProducts(globalThis.cart ? Object.values(globalThis.cart) : []);
      //console.log(cart);
    });
    return unsubscribe;
  }, [navigation]);
  console.log(products);
  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Subtotal ({products.length} item):{'  '}
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            {products
              .reduce(
                (summedPrice, product) =>
                  summedPrice +
                  parseFloat(product.item.price.match(/[\d\.]/g).join('')) *
                    product.quantity,
                0,
              )
              .toFixed(2)}{' '}
          </Text>
        </Text>
        <Button
          text="Proceed to checkout"
          onPress={onCheckout}
          containerStyle={{backgroundColor: '#fff23d', borderColor: '#c7b782'}}
        />
      </View>
      {/* Render Product Component */}

      <FlatList
        data={products}
        renderItem={({item}) => (
          <CartProductItem
            updateCart={() => {
              setProducts(
                globalThis.cart ? Object.values(globalThis.cart) : [],
              );
            }}
            cartItem={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    margin: 10,
  },
});

export default ShopingCartScreen;
