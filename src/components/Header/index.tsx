/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import CartBadge from '../CartBadge';
import {selectCartItems} from '../../store/features/cart/cartSlice';

interface Props {
  title?: string;
  onPress?: () => void;
  icon?: any;
  type?: any;
  conatinerStyles?: object;
}

const Header = ({title, onPress, icon, type, conatinerStyles}: Props) => {
  const cartItems = useSelector(selectCartItems);
  if (type === 'brand-page') {
    return (
      <View style={styles.containerBrand}>
        <Text style={styles.titleBrand}>Category Brand</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white'}}>

    <View style={[styles.container, conatinerStyles]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="arrow-back" size={30} color="#8398f4" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <CartBadge count={cartItems.length} />
    </View></SafeAreaView>
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
