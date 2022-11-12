/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

const Strip = () => {
  return <View style={styles.strip} />;
};

export default Strip;

const styles = StyleSheet.create({
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },
});
