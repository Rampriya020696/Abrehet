import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
import product from '../../data/product';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';



const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  console.log(route.params);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image corousel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)} >
        {product.options.map(option => (
        <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
          from ${product.price}
          {product.oldPrice && (
              <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
         )}
      </Text>

      {/* Decription */}
      <Text style={styles.description}>
        {product.description}
      </Text>

      {/* Quantity selctor */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Buttom */}
       <Button 
       text={'Add To Cart'} 
       onPress={() => {
         console.warn('Add to cart');
         }}
         containerStyle={{
           backgroundColor: '#e3c905'
         }}
          />
       <Button text={'Buy Now'} 
       onPress={() => {
         console.warn('Buy now');
         }} 
         />
  </ScrollView>
  );
};

export default ProductScreen;