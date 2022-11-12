/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

type LabelColorProps = {
  color?: string;
  selected?: boolean;
  onPress?: () => void;
};
const LabelColor = ({color, selected, onPress}: LabelColorProps) => {
  return (
    <View
      style={[
        styles?.wrapper,
        {borderColor: selected === undefined ? colors.white : color},
      ]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles?.colorChoose,

          {
            backgroundColor: color || '',
          },
        ]}
      />
    </View>
  );
};

export default LabelColor;

const styles = StyleSheet.create({
  wrapper: {
    width: 34,
    height: 34,
    padding: 4,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,

    marginRight: 6,
  },
  colorChoose: {
    width: 28,
    height: 28,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
