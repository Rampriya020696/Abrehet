import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { fonts } from '../../utils';

const Splash = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Slider');
  //   }, 3000);
  // }, [navigation]);
  return (
    // <View>
      <ImageBackground source={require('../../Assets/AbrehetBackgroundImage.png')} style={styles.container}>
        {/* <Image
     resizeMode='cover'
     blurRadius={2}
     style={{zIndex:-1,height:'100%',}}
     source={require('../../Assets/AbrehetBackgroundImage.png')} /> */}
        <View style={styles.page}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.bold}>Mesob Shop</Text>
        </View>
      </ImageBackground>
    // </View>

  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    flex: 1,
    resizeMode: 'contain',
    // width: '100%',
    opacity: 0.6,

    // opacity:0.2,

  },
  page: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 130,
    justifyContent: 'center',
    // position: 'absolute',
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.secondary[200],
    color: 'black',
    zIndex: 10,
    alignSelf: 'center',

  },
  bold: {
    fontSize: 40,
    fontFamily: fonts.primary[800],
    color: 'black',
    opacity: 1,
    alignSelf: 'center',

  },
});
