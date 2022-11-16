/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import {OnBoardingContext} from '../../context/OnBoardingContext';
import {fonts} from '../../utils';
import {colors} from '../../utils/colors';

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? colors.blueButton : colors.secondary;
  return <View style={[styles.dotStyle, {backgroundColor}]} />;
};

const Skip = ({...props}) => (
  <TouchableOpacity style={[styles.marginBtn, {marginLeft: 20}]} {...props}>
    <Text style={styles.text1}>Skip</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={[styles.marginBtn, {marginRight: 20}]} {...props}>
    <Text style={styles.text1}>Done</Text>
  </TouchableOpacity>
);

const OnBoarding = ({navigation}) => {
  const {onboardingRes} = React.useContext(OnBoardingContext);
  console.log(onboardingRes, 'onboardingRes');

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      showNext={false}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      bottomBarColor={colors.white}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      bottomBarHeight={50}
      onSkip={() => navigation.navigate('Sigin')}
      onDone={() => navigation.navigate('Sigin')}
      // pages={data}
      pages={[
        {
          backgroundColor: onboardingRes[0]?.backgroundColor || colors.white,
          image: (
            <Image
              style={styles.image}
              source={
                onboardingRes[0]?.image
                  ? {uri: onboardingRes[0]?.image}
                  : require('../../Assets/illustration/Ilustration-Onboarding1.png')
              }
            />
          ),
          title: onboardingRes[0]?.title || 'E-Commerce App',
          subtitle:
            onboardingRes[0]?.subtitle ||
            'E commerce aplication template \n buy this code template in codecanyon',
        },
        {
          backgroundColor: onboardingRes[1]?.backgroundColor || colors.white,
          image: (
            <Image
              style={styles.image}
              source={
                onboardingRes[1]?.image
                  ? {uri: onboardingRes[1]?.image}
                  : require('../../Assets/illustration/Ilustration-Onboarding2.png')
              }
            />
          ),
          title: onboardingRes[1]?.title || 'Choose Item',
          subtitle:
            onboardingRes[1]?.subtitle ||
            'Choose items whereever you are with \n this application to make life \n easier',
        },
        {
          backgroundColor: onboardingRes[2]?.backgroundColor || colors.white,
          image: (
            <Image
              style={styles.image}
              source={
                onboardingRes[2]?.image
                  ? {uri: onboardingRes[2]?.image}
                  : require('../../Assets/illustration/Ilustration-Onboarding3.png')
              }
            />
          ),
          title: onboardingRes[2]?.title || 'Buy Item',
          subtitle:
            onboardingRes[2]?.subtitle ||
            'Shop from thousand brands in the \n world in one application at \n throwaway prices',
        },
      ]}
    />
  );
};

export default OnBoarding;

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  dotStyle: {
    width: 25,
    height: 3,
    marginHorizontal: 3,
  },
  marginBtn: {marginHorizontal: 3},
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    height: '70%',
  },
  text1: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    color: colors.blueButton,
  },
  title: {
    fontSize: 20,
    marginTop: -height * 0.24,
    fontFamily: fonts.secondary[600],
  },
  subtitle: {
    fontSize: 14,
    color: colors.grey,
    marginTop: -height * 0.17,
    fontFamily: fonts.secondary[300],
  },
});
