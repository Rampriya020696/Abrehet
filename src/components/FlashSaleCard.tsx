import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors, fonts} from '../utils';
import ProgressBar from 'react-native-progress/Bar';
import {BoxShadow} from 'react-native-shadow';
import AwesomeAlert from 'react-native-awesome-alerts';
import Gap from './Gap';
import {ICLocationImage, ICStar} from '../Assets';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.452,
  height: 432,
  color: '#000',
  border: 2,
  radius: 10,
  opacity: 0.1,
  x: 0.15,
  y: 0.75,
  style: {
    marginTop: 15,
  },
};

const FlashSaleCard = props => {
  const [showAlert, setShowAlert] = React.useState(false);

  const showAlertAlert = () => {
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <View style={styles.container}>
      <BoxShadow setting={shadowOpt}>
        <View style={styles.card}>
          <TouchableOpacity onPress={showAlertAlert}>
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
          <TouchableOpacity onPress={props.onPress}>
            <Gap height={10} width={'100%'} />
            <Text numberOfLines={2} style={styles.title}>
              {props.title}
            </Text>
            <Gap height={10} width={'100%'} />
            <Text style={styles.priceDiscount}>{props.priceDiscount}</Text>
            <View style={styles.strip} />
            <Text style={styles.price}>{props.price}</Text>
            <Gap height={10} width={'100%'} />
            <View style={styles.rating}>
              <Text style={styles.titleRating}>{props.rating}</Text>
              <Image source={ICStar} style={styles.icon} />
              <Image source={ICStar} style={styles.icon} />
              <Image source={ICStar} style={styles.icon} />
              <Image source={ICStar} style={styles.icon} />
              <Image source={ICStar} style={styles.icon} />
              <Text style={styles.titleSale}>{props.totalSale}</Text>
            </View>
            <Gap height={10} width={'100%'} />
            <View style={styles.location}>
              <Image source={ICLocationImage} style={styles.iconLocation} />
              <Text style={styles.locationName}>{props.location}</Text>
            </View>
            <Gap height={10} width={'100%'} />
            <Text style={styles.available}>{props.available}</Text>
            <ProgressBar
              progress={props.bar}
              color={props.colorBar}
              borderWidth={0}
              style={styles.bar}
            />
          </TouchableOpacity>
        </View>
      </BoxShadow>
    </View>
  );
};

export default FlashSaleCard;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  card: {
    backgroundColor: colors.white,
    width: '100%',
    height: 430,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {width: 15, height: 15, marginRight: 2},
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    paddingHorizontal: 10,
  },
  priceDiscount: {
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: fonts.primary[700],
    color: colors.blueButton,
  },
  titleRating: {
    fontSize: 12,
    marginLeft: 10,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  titleSale: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  iconLocation: {
    width: 10,
    height: 14,
  },
  location: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  locationName: {
    fontSize: 12,
    marginLeft: 5,
    color: colors.text.secondary,
    fontFamily: fonts.primary[200],
  },
  available: {
    fontSize: 12,
    paddingHorizontal: 10,
  },
  bar: {
    marginLeft: 10,
    marginTop: 5,
  },
  alertImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 280,
    height: 280,
  },
  strip: {},
});
