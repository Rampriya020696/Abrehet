/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {DataStore} from 'aws-amplify';
import {Product} from '../../models';

import initProducts from '../../data/product';
interface HomeScreenProps {
  searchValue: string;
}

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //const results = await DataStore.query(Product);
      //setProducts(results);
      //comment for testing
      setProducts([initProducts]);
    };
    fetchProducts();
  }, []);

  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    flex: 1,
  },
});

export default HomeScreen;
