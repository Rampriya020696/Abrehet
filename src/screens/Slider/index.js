import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BackgroundCarousel, Button, Gap } from '../../../../../TrevaShopUI/TrevaShop/src/components';
import { colors, fonts } from '../../../../../TrevaShopUI/TrevaShop/src/utils';

const images = [
  require('../../Assets/Slider1.png'),
  require('../../Assets/Slider2.png'),
  require('../../Assets/Slider3.png'),
  require('../../Assets/Slider4.png'),
];

export default class App extends Component {
  render() {
    return (
      <>
        <BackgroundCarousel images={images} />
        <View style={styles.container}>
          <Gap height={40} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.wrapper}>
            <Text style={styles.name}>Treva Shop</Text>
            {/* <View style={styles.strip} /> */}
            <Gap height={120} />
            <Text style={styles.text1}>Get best product in treva shop</Text>
            <Gap height={50} />
            <View>
              <Button
                button="transparent"
                title="Sign Up"
                onPress={() => this.props.navigation.navigate('Signup')}
              />
              <View style={styles.skip}>
                <View style={styles.strip} />
                <Text style={styles.text2}>OR SKIP</Text>
                <View style={styles.strip} />
              </View>
              <Button
                button="transparent"
                title="Sign In"
                onPress={() => this.props.navigation.navigate('Signin')}
              />
            </View>
          </ScrollView>
          <Gap height={30} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: 30,
  },
  wrapper: { flex: 1, justifyContent: 'space-between' },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  skip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  strip: {
    width: 60,
    borderColor: colors.white,
    borderWidth: 0.2,
    marginLeft: 15,
    marginRight: 15,
  },
  name: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: fonts.primary[800],
    color: 'white',
  },
  text1: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.secondary[200],
    color: 'white',
  },
  text2: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.secondary[200],
    color: 'white',
    marginVertical: 10,
  },
});
