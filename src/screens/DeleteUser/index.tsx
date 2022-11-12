/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Gap from '../../components/Gap';
import Header from '../../components/Header';
import {colors, fonts} from '../../utils';

const DeleteUser = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="DeleteUser" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={10} />
        <View style={styles.strip} />
        <Gap height={20} />
        <View style={styles.container}>
          {/* <Image source={ICLogoNotification} style={styles.icon} /> */}
          <View style={styles.title}>
            <Text style={styles.treva}>Mesob Stor</Text>
            <Text style={styles.desc}>E-Commerce</Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.strip} />
        <Gap height={20} />
        <Text style={styles.text}>
        started building the Mesob store on October 5th, 2021 for a school project. At that time I didn’t have any plan to publish it. A good friend and family of mine by the name of Peter Tesfamichael advises me that it will be a good business model for our country Eritrea. In addition to the support, I got from my father, my wife, friends, family, and the Eritrean community thankfully by God`s grace I was able to publish this amazing app on March 20th 2022.
        </Text>
        <Gap height={10} />
        
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default DeleteUser;

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
    marginLeft: 20,
    justifyContent: 'center',
  },
  treva: {
    fontSize: 50,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    opacity: 0.9,
  },
  desc: {
    fontSize: 20,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    opacity: 0.9,
    marginTop: 4,
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
    fontSize: 14,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginHorizontal: 20,
    textAlign: 'justify',
    opacity: 0.9,
  },
});
