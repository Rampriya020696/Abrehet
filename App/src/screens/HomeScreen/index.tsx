/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {DataStore} from 'aws-amplify';
import * as types from '../../API';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import _ from 'lodash';

import initProducts from '../../data/products';
interface HomeScreenProps {
  searchValue: string;
}

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    price: number;
    oldPrice?: number;
    country?: string;
  };
}

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  const [products, setProducts] = useState<ProductItemProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let allProducts = (await API.graphql({query: queries.listProducts})) as {
        data: types.ListProductsQuery;
      };
      setProducts(
        allProducts.data.listProducts!.items.map(item => {
          return _.pick(JSON.parse(item!.content), [
            'id',
            'title',
            'image',
            'price',
            'oldPrice',
            'country',
          ]);
        }),
      );
    };
    fetchProducts();
  }, []);

  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products.filter(val => {
          console.log(val);
          return (
            !searchValue || // eslint-disable-next-line prettier/prettier
              (val.country && val.country.toLowerCase().startsWith(searchValue.toLowerCase())) ||
            // eslint-disable-next-line prettier/prettier
              (val.title && val.title.toLowerCase().startsWith(searchValue.toLowerCase())));
        })}
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
