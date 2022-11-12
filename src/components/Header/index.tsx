/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  title?: string;
  onPress?: () => void;
  icon?: any;
  type?: any;
}

const Header = ({title, onPress, icon, type}: Props) => {
  if (type === 'brand-page') {
    return (
      <View style={styles.containerBrand}>
        <Text style={styles.titleBrand}>Category Brand</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="arrow-back" size={30} color="#8398f4" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  containerBrand: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  titleBrand: {
    fontSize: 20,
    color: colors.text.secondary,
    fontFamily: fonts.secondary[600],
  },
  iconBrand: {
    width: 20,
    height: 20,
  },
});
