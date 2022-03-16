import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

interface ButtomProps {
  text: string;
  onPress: () => void;
  containerStyle?: object;
}

const Button = ({text, onPress, containerStyle}: ButtomProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyle]}>
      <Text style={styles.Text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    margin: 1,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#f5dd42',
  },

  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
