/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {graphqlOperation} from 'aws-amplify';
import {API} from 'aws-amplify';
import _ from 'lodash';
import Banner from '../../components/Banner';
import MenuIcon from '../../components/MenuIcon';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../../utils';
import {HeaderComponent} from '../../router/HomeStack';
import ProductModal from '../../components/ProducModal';
import CartActionShortcut from '../../components/CartActionShortcut';
import ListFooterComponent from './ListFooterComponent';
import {addToCart, removeToCart} from '../../store/features/cart/cartSlice';
import {useDispatch} from 'react-redux';
import FilterModal from '../../components/FilterModal';

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

const listProductsQuery = `
query MyQuery {
  listProducts (limit: 10000) {
    items {
      id
      isRecommended
      createdAt
      country
      content
      category
      title
      updatedAt
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

const makeBanneData = data => {
  return data.map(item => {
    return {uri: item.image, ...item};
  });
};

export const RecommendedBox = ({item}) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(item));
  };
  const handleRemove = () => {
    dispatch(removeToCart(item));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        globalThis.itemDetails = item.id;
        navigation.navigate('ProductDetails', {rawItem: item});
      }}
      style={{
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 2,
        padding: 1,
        // overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}>
        <CartActionShortcut
          add={handleAdd}
          remove={handleRemove}
          productId={item?.id}
        />
      </View>
      <ProductModal
        title={item.title}
        price={item?.price || item?.content?.price}
        image={item.image || item.content.image}
        country={item.country}
        des={item?.description || item.content.description}
        onClose={() => setVisible(false)}
        visible={visible}
      />
      <TouchableOpacity
        style={{height: 80, width: '100%'}}
        onPress={() => {
          setVisible(true);
        }}>
        <Image
          source={{uri: item?.image}}
          style={{height: 80, width: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={{textAlign: 'left', fontSize: 16, color: 'black'}}>
        {item.title}
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 17,
            color: 'black',
            marginLeft: -6,
          }}>
          {item?.price || item?.content?.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({searchValue}: HomeScreenProps) => {
  const [products, setProducts] = useState<any>([]);
  const [recommendedProduct, setRecommendedProduct] = useState<any>([]);

  const [filterProducts, setFilterProducts] = useState<any>([]);
  const [countryFilter, setCountryFilter] = useState<any>('ALL');
  const [countryFilterModalOpen, setCountryFilterModalOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [bannerImages, setBannerImages] = useState<ProductItemProps[]>([]);
  console.log(countryFilter, 'countryFilter');
  const navigation = useNavigation<any>();
  useEffect(() => {
    // dispatch(increment());

    const fetchProducts = async () => {
      try {
        const allProducts = (await API.graphql(
          graphqlOperation(listProductsQuery, {}),
        )) as any;

        console.log(allProducts);

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

        setRecommendedProduct(
          data.filter(item => {
            const isRecommended = item?.isRecommended || null;
            if (isRecommended) {
              return item;
            }
          }),
        );
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

  console.log(products, 'products');
  console.log(products, 'recommendedProduct');
  console.log(filterProducts, 'filterProducts');
  return (
    <View style={{flex: 1}}>
      <FilterModal
        visible={countryFilterModalOpen}
        onClose={() => setCountryFilterModalOpen(false)}
        products={products}
        onSelect={val => setCountryFilter(val)}
      />
      <HeaderComponent
        searchValue={searchString}
        setSearchValue={setSearchString}
        onFilterSelect={() => setCountryFilterModalOpen(true)}
      />

      {filterProducts.length ? (
        <FlatList
          data={filterProducts}
          initialNumToRender={10}
          numColumns={4}
          contentContainerStyle={{}}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({item}) => {
            const itemCountry = item?.country || item?.content?.country;
            if (countryFilter === 'ALL') {
              return (
                <View style={{flex: 1, margin: 5}}>
                  <RecommendedBox item={item} />
                </View>
              );
            } else {
              if (itemCountry === countryFilter) {
                return (
                  <View style={{flex: 1, margin: 5}}>
                    <RecommendedBox item={item} />
                  </View>
                );
              } else {
                return null;
              }
            }
          }}
        />
      ) : (
        <FlatList
          style={{
            flex: 1,
          }}
          data={recommendedProduct}
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
                    zIndex: 100,
                  }}>
                  <Text style={styles.menuText}>Shop Categories</Text>
                </View>
                <MenuIcon />
                <Text style={[styles.title, {marginBottom: -50}]}>
                  Flash Sale
                </Text>
              </>
            );
          }}
          initialNumToRender={10}
          numColumns={4}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({item}: any) => {
            const isRecommended = item?.isRecommended || null;
            if (!isRecommended) return null;
            console.log(item);
            return null;
          }}
          ListFooterComponent={
            filterProducts.length ? (
              <></>
            ) : (
              <ListFooterComponent allProduct={products} />
            )
          }
        />
      )}
    </View>
  );
};
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  menuText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    fontStyle: 'normal',
    marginVertical: 20,
    paddingLeft: 10,
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
    fontSize: 20,
    fontFamily: fonts.primary[900],
    fontWeight: '500',
    color: 'red',
    fontStyle: 'normal',
    marginLeft: 10,
    marginVertical: 28,
    marginBottom: -40,
  },
  titleSearch: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.primary[200],
    marginLeft: 10,
    color: colors.borderstrip,
  },
  image: {
    height: 40,
    width: 40,
  },
  icon: {
    width: 20,
    height: 30,
  },
  menu: {
    flex: 2,
    height: 250,
    marginVertical: 3,
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
    fontSize: 10,
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
