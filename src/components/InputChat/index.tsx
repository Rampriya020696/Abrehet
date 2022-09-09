import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a Message"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={{padding: 5, marginHorizontal: 5}}>
        <FontAwesome size={30} name="send" color={colors.facebook} />
      </TouchableOpacity>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    marginRight: 10,
  },
  input: {
    borderRadius: 10,
    borderColor: colors.text.secondary,
    borderWidth: 1,
    flex: 1,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
  },
});
