/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
//import product from '../../data/product';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import * as types from '../../API';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import _ from 'lodash';
import Header from '../../components/Header';
import {
  ICCart2,
  ICCartWarna,
  ICChatWarna,
  ICStar,
  ICStarBorder,
  ICStarWhite,
  ILRecomended7,
} from '../../Assets';
import {colors, fonts} from '../../utils';
import Gap from '../../components/Gap';
import Label from '../../components/atoms/Label';
import Strip from '../../components/Strip';
import Recomended from '../../components/Recomended';

const images = [
  require('../../Assets/Recomended-Image1.png'),
  require('../../Assets/Recomended-Image2.png'),
  require('../../Assets/Recomended-Image3.png'),
];

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
  country?: string;
}

const ProductScreen = () => {
  const [product, setProduct] = useState<ProductItemDetails>();

  const [active, setActive] = React.useState(0);
  const [selectedOption, setSelectedOption] = useState('black');
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation<any>();

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
        'country',
      ]);
      parsed.images = parsed.images.split(',');
      if (!parsed.options) {
        parsed.options = [];
      } else {
        parsed.options = parsed.options.split(',');
      }
      console.log({parsed});
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
    <View style={{flex: 1}}>
      <Header
        title="Product Detail"
        icon={ICCart2}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.root}>
        <View style={styles2.wrap}>
          <ScrollView
            // onScroll={change}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles2.wrap}>
            {product?.images?.map((e, index) => (
              <Image
                key={e}
                resizeMode="contain"
                style={styles2.wrap}
                source={{uri: e}}
              />
            ))}
          </ScrollView>
          <View style={styles2.wrapDot}>
            {product?.images?.map((e, index) => (
              <Text
                key={e}
                style={active === index ? styles2.dotActive : styles2.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>

        {/* Name of Item */}
        <View style={styles2.section1}>
          <Text style={styles2.name}>{product.title}</Text>
          <Text style={styles2.name}>{product.price}</Text>
          <View style={styles2.strip} />
          <View style={[styles2.sale, {justifyContent: 'center'}]}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            {/* <View style={styles2.rating}>
              <Text style={styles2.nilai}>4.1</Text>
              <Image source={ICStarWhite} style={styles2.starRating} />
            </View>
            <Text>932 Sale</Text> */}
          </View>
        </View>
        <View style={styles2.stripGap} />
        <View style={styles2.gap} />
        <View style={styles2.stripGap} />
        <Gap height={20} />

        {/* Country */}
        <Text style={styles2.title}>Country</Text>
        <View style={styles2.row}>
          <Text>{product?.country}</Text>
        </View>
        <Gap height={10} />

        <View style={styles2.stripGap} />
        <View style={styles2.gap} />
        <View style={styles2.stripGap} />
        <Gap height={20} />

        {/* Description */}
        <Text style={styles2.title}>Description</Text>
        <Text style={styles2.desc}>{product.description}</Text>

        <Gap height={20} />
      </ScrollView>
      <View style={styles2.button}>
        <TouchableOpacity style={styles2.borderIcon}>
          <Image source={ICCartWarna} style={styles2.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles2.borderIcon}
          onPress={() => navigation.navigate('Chat')}>
          <Image source={ICChatWarna} style={styles2.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles2.payButton}
          // onPress={() => navigation.navigate('Delivery')}
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
          }}>
          <Text style={styles2.pay}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles2 = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  // Gap (jarak)

  gap: {
    height: 0,
    borderColor: colors.borderGap,
    borderWidth: 10,
  },

  // Header

  header: {
    backgroundColor: colors.white,
  },

  // Image Slider

  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6, //25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    marginTop: 13,
    color: '#888',
    opacity: 0.5,
  },
  dotActive: {
    fontSize: 28,
    margin: 3,
    color: '#888',
    opacity: 0.5,
  },
  image: {
    height: 350,
    width: 300,
    alignSelf: 'center',
    marginBottom: 12,
  },

  // Desc of Item (name,price,rateing,etc)

  section1: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.2,
    marginTop: 2,
    opacity: 0.5,
  },
  stripGap: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    opacity: 0.5,
  },
  rating: {
    backgroundColor: '#8BC34A',
    width: 80,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  starRating: {
    width: 14,
    height: 14,
  },
  nilai: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.white,
    marginRight: 12,
  },
  sale: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  // Title of Component

  title: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.black,
    paddingHorizontal: 20,
  },

  // Size

  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  // Desc of Item

  desc: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    color: colors.text.secondary,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  more: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    color: colors.blueButton,
    alignSelf: 'center',
  },

  // Review Component

  review: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  wrapperButtonSeeAll: {flexDirection: 'row'},
  viewAll: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.blueButton,
    marginRight: 5,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  titleReview: {
    fontSize: 16,
    fontFamily: fonts.secondary[500],
    marginLeft: 16,
    color: colors.text.secondary,
  },
  starReview: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  avatarUser: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    marginLeft: 20,
    alignSelf: 'center',
  },
  wrapperReview: {
    paddingHorizontal: 20,
  },

  // Top Rated Component

  topRated: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAll: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.blueButton,
    paddingRight: 20,
  },
  ratedProduct: {
    backgroundColor: colors.borderGap,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  topRatedProduct: {
    backgroundColor: colors.borderGap,
  },

  // Bottom Button Component

  button: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  borderIcon: {
    borderWidth: 1,
    borderColor: colors.borderstrip,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 60,
    marginRight: 12,
  },
  icon: {
    height: 20,
    width: 20,
  },
  payButton: {
    flex: 1,
    height: 45,
    backgroundColor: colors.blueButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pay: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.white,
  },
  delivery: {
    flexDirection: 'row',
  },
  deliveryTitle: {
    fontSize: 14,
    fontFamily: fonts.secondary[500],
    color: colors.blueButton,
    marginLeft: 20,
  },
  homeDelivery: {
    marginLeft: 20,
    marginTop: 4,
  },
  location: {
    flexDirection: 'row',
  },
  go: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginLeft: -10,
    marginRight: 30,
  },
});
