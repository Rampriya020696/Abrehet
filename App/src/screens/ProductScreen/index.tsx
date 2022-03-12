/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute} from '@react-navigation/native';
import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
//import product from '../../data/product';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import * as types from '../../API';
import {API, graphqlOperation, sectionFooterSecondaryContent} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';

interface ProductItemDetails {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  options: string[];
  ratings: number;
  oldPrice?: number;
}

const ProductScreen = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState<ProductItemDetails>();
  const [selectedOption, setSelectedOption] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!globalThis.cart) {
      globalThis.cart = {};
    }
    const fetchProducts = async () => {
      let getProducts = (await API.graphql(
        graphqlOperation(queries.getProducts, {id: globalThis.itemDetails}),
      )) as {
        data: types.GetProductsQuery;
      };

      let parsed = _.pick(JSON.parse(getProducts.data.getProducts!.content), [
        'id',
        'title',
        'description',
        'image',
        'images',
        'price',
        'options',
        'oldPrice',
        'ratings',
        'title',
        'avgRating',
      ]);
      parsed.images = parsed.images.split(',');
      if (!parsed.options) {
        parsed.options = [];
      } else {
        parsed.options = parsed.options.split(',');
      }
      setProduct(parsed);
    };
    fetchProducts();
  }, []);

  const route = useRoute();

  if (!product) {
    return (
      <ScrollView style={styles.root}>
        <Text style={styles.title}>Loading</Text>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image corousel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      {product.options.length > 0 ? (
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}>
          {product.options.map(option => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker>
      ) : null}

      {/* Price */}
      <Text style={styles.price}>
        {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> {product.oldPrice}</Text>
        )}
      </Text>

      {/* Decription */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selctor */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Buttom */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          if (!globalThis.cart[product.id]) {
            globalThis.cart[product.id] = {};
            globalThis.cart[product.id].id = product.id;
            globalThis.cart[product.id].quantity = quantity;
            globalThis.cart[product.id].item = product;
          } else {
            globalThis.cart[product.id].quantity += quantity;
          }
          setText("added to cart");
          console.log(globalThis.cart);
        }}
        containerStyle={{
          backgroundColor: '#e3c905',
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          if (!globalThis.cart[product.id]) {
            globalThis.cart[product.id] = {};
            globalThis.cart[product.id].id = product.id;
            globalThis.cart[product.id].quantity = quantity;
            globalThis.cart[product.id].item = product;
          } else {
            globalThis.cart[product.id].quantity += quantity;
          }
          console.log(globalThis.cart);
        }}
      />
      <Text>{text}</Text>
    </ScrollView>
  );
};

export default ProductScreen;
