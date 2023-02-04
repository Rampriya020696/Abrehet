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
import {ICStar} from '../../Assets';

import {colors, fonts} from '../../utils';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.45,
  height: 331,
  color: '#000',

  border: 2,
  radius: 10,
  opacity: 0.1,
  x: 0.2,
  y: 0.3,
  style: {
    marginTop: 15,
    marginRight: 6,
  },
};

type ProductProps = {
  image: {uri: string};
  onPress: () => void;
  price: string;
  country: string;
  title: string;
  category: string;
};

const Recomended = React.memo((props: ProductProps) => {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => hideAlert(), 3000);
  };
  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
      <BoxShadow style={styles.container2} setting={shadowOpt}>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => handleShowAlert()}>
            <AwesomeAlert
              customView={
                <Image source={props.image} style={styles.alertImage} />
              }
              show={showAlert}
              showProgress={false}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
            />
            <Image source={props.image} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperDetail}
            onPress={props.onPress}>
            <Text numberOfLines={1} style={styles.title}>
              {props.title}
            </Text>
            <Text style={styles.price}>{props.price}</Text>
            <Text style={[styles.price, {fontSize: 10}]}>{props.country}</Text>
            {/* <View style={styles.wrapperRating}>
              <View style={styles.wrapperRating2}>
                <Text style={styles.titleRating}>{props.rating}</Text>
                <Image source={ICStar} style={styles.icon} />
              </View>
              <Text style={styles.titleSale}>{props.totalSale}</Text>
            </View> */}
          </TouchableOpacity>
        </View>
      </BoxShadow>
    </View>
  );
});

export default Recomended;
const styles = StyleSheet.create({
  container: {paddingVertical: 5},
  container2: {
    flex: 1,
    width: '100%',
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
