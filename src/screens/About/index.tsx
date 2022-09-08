import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Gap from '../../components/Gap';
import Header from '../../components/Header';
import {colors, fonts} from '../../utils';

const About = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="About Apps" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={10} />
        <View style={styles.strip} />
        <Gap height={20} />
        <View style={styles.container}>
          {/* <Image source={ICLogoNotification} style={styles.icon} /> */}
          <View style={styles.title}>
            <Text style={styles.treva}>Abrehet</Text>
            <Text style={styles.desc}> E-Commerce</Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.strip} />
        <Gap height={20} />
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Gap height={30} />
        <Text style={styles.text}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages.
        </Text>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 20,
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
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    opacity: 0.7,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    opacity: 0.5,
    marginTop: 4,
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    opacity: 0.5,
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
    opacity: 0.5,
  },
});
