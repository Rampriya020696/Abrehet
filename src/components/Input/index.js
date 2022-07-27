import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Gap} from '..';
// import {ICMail, ICPassword} from '../../Assets';
import {colors, fonts} from '../../../utils';

const Input = ({type, placeholder}) => {
  if (type === 'pay') {
    return (
      <View>
        <TextInput placeholder={placeholder} style={styles.inputPay} />
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.form}>
          <ICMail style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <ICPassword style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    borderRadius: 15,
  },
  input: {marginLeft: 20, height: 60, width: '100%'},
  icon: {
    padding: 10,
    marginLeft: 20,
    height: 1,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  inputPay: {
    borderBottomWidth: 0.8,
    borderBottomColor: colors.secondary,
    paddingVertical: 15,
  },
});
