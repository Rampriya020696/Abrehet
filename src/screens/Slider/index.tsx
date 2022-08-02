import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundCarousel from '../../components/BackgroundCarousel';
// import { BackgroundCarousel, Button, Gap } from '../../../../../TrevaShopUI/TrevaShop/src/components';
import { colors, fonts } from '../../utils';


const images = [
  require('../../Assets/Slider1.png'),
  require('../../Assets/Slider2.png'),
  require('../../Assets/Slider3.png'),
  require('../../Assets/Slider4.png'),



  // require('../../Assets/Slider1.png'),
  // require('../../Assets/Slider2.png'),
  // require('../../Assets/Slider3.png'),
  // require('../../Assets/Slider4.png'),
];

// export default class App extends Component {
  const Slider=({navigation})=>{
   // render() {
    return (
      <>
        <BackgroundCarousel images={images} />

        <View style={styles.container}>
          <View style={{ height: 20, width: 20 }}></View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.wrapper}>
            <Text style={styles.name}>Mesob Shop</Text>
            {/* <View style={styles.strip} /> */}
            <View style={{ height: 20, width: 20 }}></View>

            <Text style={styles.text1}>Get best product in Mesob shop</Text>
            <View style={{ height: 20, width: 20 }}></View>
            <View>
              <TouchableOpacity 
              onPress={()=>navigation.navigate('Signup')}
              style={{borderRadius:50,borderColor:'white',borderWidth:1,
              padding:15,alignItems:'center',backgroundColor:'transparent'}}>
                <Text style={{fontSize:17,fontWeight:'700',color:'white'}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              {/* <Button
                button="transparent"
                title="Sign Up"
                onPress={() => this.props.navigation.navigate('Signup')}
              /> */}
              <View style={styles.skip}>
                <View style={styles.strip} />
                <Text style={styles.text2}>OR SKIP</Text>
                <View style={styles.strip} />
              </View>
              <TouchableOpacity 
              onPress={()=>navigation.navigate('Signin')}
              style={{borderRadius:50,borderColor:'white',borderWidth:1,marginBottom:20,
              padding:15,alignItems:'center',backgroundColor:'transparent'}}>
                <Text style={{fontSize:17,fontWeight:'700',color:'white'}}>
                  Sign In
                </Text>
              </TouchableOpacity>
              {/* <Button
                button="transparent"
                title="Sign In"
                onPress={() => this.props.navigation.navigate('Signin')}
              /> */}
            </View>
          </ScrollView>
          {/* <Gap height={30} /> */}
        </View>
      </>
    );
  }

// }
export default Slider;

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
