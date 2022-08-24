import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import LabelSize from './LabelSize';
import LabelColor from './LabelColor';
// import LabelColor from './LabelColor';
// import LabelSize from './LabelSize';

type LabelProps = {
  label?: string;
  type?: string;
  color?: string;
  text?: string;
  selected?: boolean;
  onPress?: () => void;
};

const Label = ({label, type, color, text, selected, onPress}: LabelProps) => {
  if (type === 'size') {
    return (
      <LabelSize
        // type={type}
        text={text || ''}
        onPress={onPress}
        selected={selected}
      />
    );
  }
  if (type === 'color') {
    return <LabelColor color={color} onPress={onPress} selected={selected} />;
  }
  return (
    <TouchableOpacity style={styles.category} onPress={onPress}>
      <Text style={styles.choose}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Label;

const styles = StyleSheet.create({
  category: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    width: 100,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    padding: 10,
    marginRight: 10,
  },
  choose: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
  },
});
