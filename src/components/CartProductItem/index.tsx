/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      price: number;
      oldPrice: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: item.image}} />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.price}>
             {item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> {item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={quantity}
          setQuantity={val => {
            globalThis.cart[item.id].quantity = quantity;
            setQuantity(val);
          }}
        />
      </View>
    </View>
  );
};

export default CartProductItem;
