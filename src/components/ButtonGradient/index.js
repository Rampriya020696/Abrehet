import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ButtonGradient = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient
        start={{x: 0.0, y: 0}}
        end={{x: 0.5, y: 3.5}}
        locations={[0, 0.5, 1.6]}
        colors={['#131A41', '#3A2E6E', '#6D47A9']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonGradient;

const styles = StyleSheet.create({
  button: {
    elevation: 5,
  },
  linearGradient: {
    height: 50,
    width: '100%',
    paddingHorizontal: 40,
    borderRadius: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.white,
  },
});
