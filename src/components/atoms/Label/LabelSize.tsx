/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

type LabelSizeProps = {
  text: string;
  selected?: boolean;
  onPress?: () => void;
};

const LabelSize = ({text, selected, onPress}: LabelSizeProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.sizeBorder,
        {borderColor: selected === undefined ? colors.black : colors.pay},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.sizeChoose,
          {color: selected === undefined ? colors.black : colors.pay},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LabelSize;

const styles = StyleSheet.create({
  sizeBorder: {
    width: 35,
    height: 35,
    marginRight: 6,
    borderRadius: 50 / 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeChoose: {
    fontSize: 14,
  },
});
