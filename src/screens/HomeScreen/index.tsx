/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image, } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import * as types from '../../API';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import _ from 'lodash';

import initProducts from '../../data/products';

import Banner from '../../components/Banner';
import MenuIcon from '../../components/MenuIcon';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// import useNavigationContainer from 'reac-native-'



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


const images = [
  require('../../Assets/Banner.png'),
  require('../../Assets/Baner2.png'),
  require('../../Assets/Category3.png'),
  require('../../Assets/Baner5.png'),
  require('../../Assets/Category1.png'),
  require('../../Assets/Baner3.png'),
]


const HomeScreen = ({ searchValue }: HomeScreenProps) => {
  const [products, setProducts] = useState<ProductItemProps[]>([]);
  const carouselRef = useRef();

  const navigation = useNavigation<any>();
  useEffect(() => {
    const fetchProducts = async () => {
      let allProducts = (await API.graphql({ query: queries.listProducts })) as {
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

      <View style={{ width: '100%', height: 200 }}>
        <Banner images={images} />
      </View>

      <View style={{
        backgroundColor: 'transparent', paddingHorizontal: 20, paddingVertical: 20,
        zIndex: 100,
      }}>
        <Text style={styles.menuText}>
          Menu
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <MenuIcon onPress={() => navigation.navigate('Home')} />
      </View>

      {/* <FlatList
        data={products.filter(val => {
          console.log(val);
          return (
            !searchValue || // eslint-disable-next-line prettier/prettier
            (val.country && val.country.toLowerCase().startsWith(searchValue.toLowerCase())) ||
            // eslint-disable-next-line prettier/prettier
            (val.title && val.title.toLowerCase().startsWith(searchValue.toLowerCase())));
        })}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuText: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black'

  },
});

export default HomeScreen;
