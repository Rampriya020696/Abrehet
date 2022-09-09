/* eslint-disable @typescript-eslint/no-unused-vars */
// THIS IS THE ONE
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {DataStore} from 'aws-amplify';
import * as types from '../../API';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import _ from 'lodash';

import initProducts from '../../data/products';

import Banner from '../../components/Banner';
import MenuIcon from '../../components/MenuIcon';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Gap from '../../components/Gap';
import {colors, fonts} from '../../utils';
import {
  ILRecomended1,
  ILRecomended2,
  ILRecomended3,
  ILRecomended4,
  ILRecomended5,
  ILRecomended6,
  ILRecomended7,
} from '../../Assets';
import Recomended from '../../components/Recomended';
import {HeaderComponent} from '../../router/HomeStack';
import {FlashList} from '@shopify/flash-list';

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
];

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  const [products, setProducts] = useState<ProductItemProps[]>([]);

  const navigation = useNavigation<any>();
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

  // console.log(products);

  return (
    <View style={{flex: 1}}>
      <HeaderComponent searchValue="Search..." setSearchValue={() => {}} />

      <ScrollView style={{flex: 1}}>
        <View style={styles.page}>
          {/* Render Product Component */}

          <View style={{width: '100%', height: 200}}>
            <Banner
              images={images}
              onPress={() => navigation.navigate('FlashSale')}
            />
          </View>

          <View
            style={{
              backgroundColor: 'transparent',
              paddingHorizontal: 20,
              paddingVertical: 20,
              zIndex: 100,
            }}>
            <Text style={styles.menuText}>Menu</Text>
          </View>

          <View style={{marginTop: 5}}>
            <MenuIcon />
          </View>

          {/* Akhir Category Component */}
          <View style={styles.gap} />
          {/* Recomended */}
          <Gap height={20} />
          <Text style={styles.title}>Recomended</Text>
          <Gap height={5} />
          <View style={styles.recomended}>
            <FlashList
              data={products.slice(0, 30)}
              // data={products}
              numColumns={2}
              keyExtractor={(item: any) => String(item.id)}
              estimatedItemSize={200}
              renderItem={({item}: any) => {
                // return <ProductItem item={item}  />;
                return (
                  <Recomended
                    image={{uri: item?.image}}
                    title={item?.title}
                    price={item?.price}
                    rating="4.8"
                    totalSale="932 Sale"
                    onPress={() => {
                      globalThis.itemDetails = item.id;
                      // console.log('item pressed', globalThis);
                      navigation.navigate('ProductDetails');
                    }}
                  />
                );
              }}
            />
          </View>
          {/* Akhir Recomended Component */}
        </View>
      </ScrollView>
    </View>
  );
};
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  menuText: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gap: {
    height: 0,
    borderColor: colors.borderGap,
    borderWidth: 10,
  },
  circleDiv: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.header,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: width * 0.69,
    height: 40,
  },
  linearGradient: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    marginLeft: 20,
  },
  titleSearch: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.primary[200],
    marginLeft: 10,
    color: colors.borderstrip,
  },
  image: {
    height: 200,
    width: 400,
  },
  icon: {
    width: 20,
    height: 19,
  },
  menu: {
    flex: 1,
    height: 250,
  },
  promotionCategory: {
    flexDirection: 'row',
  },
  weekPromotion: {
    marginLeft: 20,
  },
  bg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleFlash: {
    fontSize: 30,
    fontFamily: fonts.secondary[800],
    color: colors.white,
  },
  titleSale: {
    fontSize: 30,
    fontFamily: fonts.secondary[300],
    color: colors.white,
    marginTop: -10,
  },
  saleTime: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.white,
  },
  category: {
    marginLeft: 20,
  },
  slide: {
    marginTop: 0,
  },
  recomended: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
