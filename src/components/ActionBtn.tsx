/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils';

type ActionBtnProps = {
  onPress?: () => void;
  title: string;
  containerStyle?: Object;
};

const ActionBtn = ({onPress, title, containerStyle}: ActionBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.facebook,

        marginVertical: 10,
        height: 30,
        justifyContent: 'center',
        ...containerStyle,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontFamily: fonts.primary[600],
          fontSize: 15,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionBtn;
