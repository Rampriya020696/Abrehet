/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {graphqlOperation} from 'aws-amplify';
import * as types from '../../API';
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';

import Banner from '../../components/Banner';
import MenuIcon from '../../components/MenuIcon';
import {useNavigation} from '@react-navigation/native';
import Gap from '../../components/Gap';
import {colors, fonts} from '../../utils';
import Recomended from '../../components/Recomended';
import {HeaderComponent} from '../../router/HomeStack';
import RenderPorductItem from './RednderProductItem';

interface HomeScreenProps {
  searchValue: string;
}

const listBannerQuerie = `
query MyQuery {
  listBanners {
    items {
      id
      image
    }
  }
}
`;

interface ProductItemProps {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  country?: string;
}

const images = [
  require('../../Assets/Banner.png'),
  require('../../Assets/Baner2.png'),
  require('../../Assets/Category3.png'),
  require('../../Assets/Baner5.png'),
  require('../../Assets/Category1.png'),
  require('../../Assets/Baner3.png'),
];

const makeBanneData = data => {
  return data.map(item => {
    return {uri: item.image, ...item};
  });
};

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  const [products, setProducts] = useState<any>([]);

  const [filterProducts, setFilterProducts] = useState<any>([]);
  const [searchString, setSearchString] = useState('');
  const [bannerImages, setBannerImages] = useState<ProductItemProps[]>([]);

  const navigation = useNavigation<any>();
  useEffect(() => {
    // dispatch(increment());
    const fetchProducts = async () => {
      try {
        let allProducts = (await API.graphql({
          query: queries.listProducts,
        })) as {
          data: types.ListProductsQuery;
        };

        const data = allProducts?.data?.listProducts?.items.filter(item => {
          if (!item?.createdAt) return;
          if (!item?.content) {
            return item;
          }
          let temp = item;
          temp.content = JSON.parse(item.content);
          temp.cost = item.content?.cost;
          temp.country = item.content?.country;
          temp.description = item.content?.description;
          temp.image = item.content?.image;
          temp.images = item.content?.images;
          temp.price = item.content?.price;
          return temp;
        });

        setProducts(
          data?.filter(item => {
            return item?.title !== 'Product unavailable. ';
          }),
        );
        // setProducts(
        //   allProducts.data.listProducts!.items.map(item => {
        //     return _.pick(JSON.parse(item!.content), [
        //       'id',
        //       'title',
        //       'image',
        //       'price',
        //       'oldPrice',
        //       'country',
        //     ]);
        //   }),
        // );
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBannerImages = async () => {
      try {
        const res = (await API.graphql(
          graphqlOperation(listBannerQuerie, {}),
        )) as any;
        setBannerImages(makeBanneData(res?.data?.listBanners?.items));
      } catch (error) {
        console.log(error, 'fetchBannerImages');
      }
    };
    fetchProducts();
    fetchBannerImages();
  }, []);

  useEffect(() => {
    if (!searchString.length) {
      setFilterProducts([]);
      return;
    }

    setFilterProducts(
      products.filter(item =>
        item.title.toLowerCase().includes(searchString.toLowerCase()),
      ),
    );
  }, [searchString]);
  console.log(products);

  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        searchValue={searchString}
        setSearchValue={setSearchString}
      />
      <FlatList
        style={{
          flex: 1,
        }}
        data={searchString ? filterProducts : products}
        ListHeaderComponent={() => {
          if (searchString) return <View />;
          return (
            <>
              <View style={{width: '100%', height: 200}}>
                <Banner
                  images={bannerImages}
                  onPress={() => navigation.navigate('FlashSale')}
                />
              </View>

              <View
                style={{
                  backgroundColor: 'transparent',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  zIndex: 100,
                }}>
                <Text style={styles.menuText}>Shop Categories</Text>
              </View>

              <View
                style={{
                  marginTop: 4,
                }}>
                <MenuIcon />
              </View>

              {/* Akhir Category Component */}
              <View style={styles.gap} />
              {/* Recomended */}
              <Gap height={20} />
              <Text style={styles.title}>Recommended</Text>
              <Gap height={5} />
            </>
          );
        }}
        initialNumToRender={10}
        numColumns={2}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({item}: any) => {
          return <RenderPorductItem item={item} />;
        }}
      />
    </View>
  );
};
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  menuText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    fontStyle: 'normal',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gap: {
    height: 0,
    borderColor: colors.borderGap,
    borderWidth: 0,
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
    paddingVertical: 20,
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
    height: 80,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontFamily: fonts.primary[900],
    fontWeight: '400',
    color: 'black',
    fontStyle: 'normal',
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
    height: 400,
    width: 400,
  },
  icon: {
    width: 20,
    height: 30,
  },
  menu: {
    flex: 2,
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
