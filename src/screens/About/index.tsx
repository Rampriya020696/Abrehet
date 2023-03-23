/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ImageBackground, Linking} from 'react-native';

import Gap from '../../components/Gap';
import Header from '../../components/Header';
import {colors, fonts} from '../../utils';

const About = ({navigation}) => {
  return (
  
         
    <View style={styles.page}>
      <Header title="About App" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={10} />
        <View style={styles.strip} />
        <Gap height={20} />
        <View style={styles.container}>
          {/* <Image source={ICLogoNotification} style={styles.icon} /> */}
          <View style={styles.title}>
            <Text style={styles.treva}>Mesob Store</Text>
            <Text style={styles.desc}>E-Commerce</Text>
          </View>
        </View>
        <Gap height={4} />
        <View style={styles.strip} />
        <Gap height={0} />
        <Text style={styles.text}>
        I started building the Mesob store on October 5th, 2021 for a school project. At that time I didn’t have any plan to publish it. A good friend and family of mine by the name of Peter Tesfamichael advises me that it will be a good business model for our country Eritrea. In addition to the support, I got from my father, my wife, friends, family, and the Eritrean community thankfully by God`s grace I was able to publish this amazing app on March 20th 2022.
        </Text>
        <Gap height={16} />
        <Text style={styles.text}>
        The brand vision is to create a two-way shopping experience not only for Eritrea but for the whole of Africa and beyond. I will take time to encourage all young adults to take their dream one step further to accomplish their goals. 
        </Text>
        <Gap height={1} />
        <Gap height={1} />
        <Gap height={10} />
        <Text style={styles.text}>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://s3.amazonaws.com/abrehet.update.data.ui/Privacy+Policy.txt')}>
        Mesob Privacy Policy
      </Text>
      </Text>
        <Gap height={1} />
        <Gap height={10} />

        <Text style={styles.text}>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://s3.amazonaws.com/abrehet.update.data.ui/Policies/Google+Play+Services.txt')}>
        Google Play Services Log Data Policy
      </Text>
      </Text>
        <Gap height={1} />
        <Gap height={10} />

        <Text style={styles.text}>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://s3.amazonaws.com/abrehet.update.data.ui/Policies/Information+Collection+and+Use.txt')}>
        Information Collection and Use Policy
      </Text>
      </Text>
        <Gap height={1} />
        <Gap height={10} />

        <Text style={styles.text}>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://s3.amazonaws.com/abrehet.update.data.ui/Policies/Children%60s+Privacy.txt')}>
        Children`s Privacy Policy
      </Text>
      </Text>
        <Gap height={1} />
        <Gap height={10} />

        <Text style={styles.text}>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://s3.amazonaws.com/abrehet.update.data.ui/Policies/Links+to+Other+Sites.txt')}>
        Links to Other Sites Policy
      </Text>
      </Text>
        <Gap height={1} />
        <Gap height={10} />

      </ScrollView>
    </View>
    
    
  );
  
};



export default About;

const styles = StyleSheet.create({
  page: {
    flex: 6,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    backgroundColor: colors.white,
  },
  icon: {
    height: 50,
    width: 50,
  },
  title: {
    marginLeft: 10,
    justifyContent: 'center',
    fontFamily: 'italic',
    fontWeight: 'bold',
   
  },
  treva: {
    fontSize: 25,
    fontFamily: fonts.secondary[600],
    color: 'black',
    opacity: 0.9,
  },
  desc: {
    fontSize: 15,
    fontFamily: fonts.secondary[900],
    color: 'blue',
    opacity: 0.9,
    marginTop: 1,
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    opacity: 0.3,
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.secondary[100],
    color: 'black',
    marginHorizontal: 20,
    textAlign: 'justify',
    opacity: 0.9,
  },
});
