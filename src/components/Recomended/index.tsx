/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {BoxShadow} from 'react-native-shadow';
import {useDispatch} from 'react-redux';
import {ICStar} from '../../Assets';
import {addToCart, removeToCart} from '../../store/features/cart/cartSlice';

import {colors, fonts} from '../../utils';
import CartActionShortcut from '../CartActionShortcut';
import ProductModal from '../ProducModal';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.45,
  height: 331,
  // width: 100,
  // height: 100,
  // color: '#000',

  border: 0,
  radius: 10,
  opacity: 0,
  // x: 0.2,
  // y: 0.3,
  // style: {
  //   marginTop: 15,
  //   marginRight: 6,
  // },
};

type ProductProps = {
  image: {uri: string};
  onPress: () => void;
  price: string;
  country: string;
  title: string;
  category: string;
  des: string;
  raw?: object;
};

const Recomended = React.memo((props: ProductProps) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();

  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => hideAlert(), 3000);
  };
  const hideAlert = () => {
    setShowAlert(false);
  };

  const handleAdd = () => {
    dispatch(addToCart(props.raw));
  };
  const handleRemove = () => {
    dispatch(removeToCart(props.raw));
  };
  return (
    <View style={styles.container}>
      {/* <BoxShadow style={styles.container2} setting={shadowOpt}> */}
      <View style={styles.container2}>
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
            productId={props?.raw?.id}
          />
        </View>
        <ProductModal
          title={props.title}
          price={props.price}
          image={props.image.uri}
          country={props.country}
          des={props.des}
          onClose={() => setVisible(false)}
          visible={visible}
        />

        <View style={styles.container2}>
          <View style={[styles.card]}>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Image
                source={props.image}
                style={{width: '100%', height: 150}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrapperDetail}
              onPress={props.onPress}>
              <Text
                numberOfLines={1}
                style={[
                  styles.title,
                  {
                    fontSize: 17,
                    color: '#000',
                  },
                ]}>
                {props.title}
              </Text>
              <Text
                style={
                  (styles.price,
                  {fontSize: 18, color: 'black', fontWeight: 'bold'})
                }>
                {props.price}
              </Text>
              <Text style={[styles.price, {fontSize: 16}]}>
                {props.country}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
});

export default Recomended;
const styles = StyleSheet.create({
  container: {paddingVertical: 5},
  container2: {
    // flex: 1,
    // width: '100%',
    width: width * 0.45,
    height: 331,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: '100%',
    height: 330,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapperDetail: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  price: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: fonts.primary[600],
    color: colors.black,
  },
  wrapperRating: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperRating2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
    marginTop: -4,
  },
  titleRating: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginRight: 10,
  },
  titleSale: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  alert: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  alertImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 420,
    marginHorizontal: -25,
    marginVertical: -30,
  },
});
