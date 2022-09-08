import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    globalThis.itemDetails = item.id;
    console.log('item pressed', globalThis);
    navigation.navigate('ProductDetails');
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
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
    </Pressable>
  );
};

export default ProductItem;
