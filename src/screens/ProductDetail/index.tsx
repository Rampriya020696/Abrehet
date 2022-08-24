import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DummyMan6,
  ICCart2,
  ICCartWarna,
  ICChatWarna,
  ICStar,
  ICStarBorder,
  ICStarWhite,
  ILRecomended2,
  ILRecomended7,
} from '../../Assets';
import Label from '../../components/atoms/Label';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import Recomended from '../../components/Recomended';
import Strip from '../../components/Strip';
import {colors, fonts} from '../../utils';

const images = [
  require('../../Assets/Recomended-Image1.png'),
  require('../../Assets/Recomended-Image2.png'),
  require('../../Assets/Recomended-Image3.png'),
];

const ProductDetail = props => {
  const [active, setActive] = React.useState(0);

  //   change(nativeEvent) {
  //     console.log('nativeEvent:', nativeEvent);
  //     const slide = Math.ceil(
  //       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  //     );
  //     if (slide !== this.state.active) {
  //       this.setState({
  //         active: slide,
  //       });
  //     }
  //   }

  // const {active, selected} = this.state;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Product Detail"
        icon={ICCart2}
        //   onPress={() => this.props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.wrap}>
          <ScrollView
            //   onScroll={({nativeEvent}) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="contain"
                style={styles.wrap}
                source={e}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={active === index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>

        {/* Name of Item */}
        <View style={styles.section1}>
          <Text style={styles.name}>Firrona Skirt!</Text>
          <Text style={styles.name}>$ 10</Text>
          <View style={styles.strip} />
          <View style={styles.sale}>
            <View style={styles.rating}>
              <Text style={styles.nilai}>4.1</Text>
              <Image source={ICStarWhite} style={styles.starRating} />
            </View>
            <Text>932 Sale</Text>
          </View>
        </View>
        <View style={styles.stripGap} />
        <View style={styles.gap} />
        <View style={styles.stripGap} />
        <Gap height={20} />

        {/* Choose Size */}
        <Text style={styles.title}>Size</Text>
        <View style={styles.row}>
          <Label type="size" text="S" />
          <Label type="size" text="M" selected />
          <Label type="size" text="L" />
          <Label type="size" text="XL" />
        </View>
        <Gap height={10} />

        <View style={styles.strip} />
        <Gap height={10} />

        {/* Choose Color */}
        <Text style={styles.title}>Color</Text>
        <View style={styles.row}>
          <Label type="color" color={colors.black} />
          <Label type="color" color={colors.blueButton} />
          <Label type="color" color={colors.price} selected />
          <Label type="color" color={colors.facebook} />
        </View>
        <Gap height={10} />

        <View style={styles.stripGap} />
        <View style={styles.gap} />
        <View style={styles.stripGap} />
        <Gap height={20} />

        {/* Description */}
        <Text style={styles.title}>Description</Text>
        <Text style={styles.desc}>
          Lorem ipsum is simply dummy text ot the printing and typesetting
          industry. Lorem ipsum has been the industry’s standart dummy text ever
          since the 1500s, when an unknown printer took a gallery of type and
          scrambled it to make a type specimen.....
        </Text>
        <TouchableOpacity>
          <Text style={styles.more}>View More</Text>
        </TouchableOpacity>

        <Gap height={20} />
        <View style={styles.stripGap} />
        <View style={styles.gap} />
        <View style={styles.stripGap} />
        <Gap height={20} />

        {/* Review User */}
        <View style={styles.review}>
          <Text style={styles.title}>Review</Text>
          <TouchableOpacity style={styles.wrapperButtonSeeAll}>
            <Text style={styles.viewAll}>View All</Text>
            {/* <ICArrowLeft width={20} height={20} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.star}>
          <Image source={ICStar} style={styles.starReview} />
          <Image source={ICStar} style={styles.starReview} />
          <Image source={ICStar} style={styles.starReview} />
          <Image source={ICStar} style={styles.starReview} />
          <Image source={ICStarBorder} style={styles.starReview} />
          <Text style={styles.titleReview}>8 Reviews</Text>
        </View>
        <Gap height={10} />
        <Strip />

        <Gap height={20} />
        <View style={styles.stripGap} />
        <View style={styles.gap} />

        {/* Top Rated */}
        <View style={styles.topRatedProduct}>
          <View style={styles.topRated}>
            <Text style={styles.title}>Top Rated Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.ratedProduct}>
            <Gap width={20} />
            <Recomended
              image={ILRecomended7}
              title="Arpenaz 4"
              price="$ 200"
              rating="4.2"
              totalSale="812 Sale"
            />
            <Recomended
              image={ILRecomended2}
              title="Arpenaz 4"
              price="$ 200"
              rating="4.2"
              totalSale="812 Sale"
            />
            <Recomended
              image={DummyMan6}
              title="Tariyaki Watusi"
              price="$ 200"
              rating="4.2"
              totalSale="812 Sale"
            />
            <Gap width={20} />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <TouchableOpacity style={styles.borderIcon}>
          <Image source={ICCartWarna} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.borderIcon}
          // onPress={() => this.props.navigation.navigate('Chat')}
        >
          <Image source={ICChatWarna} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.payButton}
          // onPress={() => this.props.navigation.navigate('Delivery')}
        >
          <Text style={styles.pay}>Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default ProductDetail;
