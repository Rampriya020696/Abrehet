/* eslint-disable prettier/prettier */
import React from 'react';
import CountDown from 'react-native-countdown-component';
import {StyleSheet, View} from 'react-native';
import {fonts} from '../../utils';

type Props = {
  color?: string;
  style?: any;
};

const Countdown = ({color}: Props) => {
  const Time = () => {
    if (color === 'white') {
      return (
        <CountDown
          size={10}
          until={864000}
          digitStyle={{
            backgroundColor: 'transparent',
          }}
          digitTxtStyle={{color: '#FFF'}}
          separatorStyle={{color: '#FFF'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          style={styles.number}
        />
      );
    }
    if (color === 'black') {
      return (
        <CountDown
          size={18}
          until={864000}
          digitStyle={{
            backgroundColor: 'transparent',
            marginLeft: -5,
            marginRight: -5,
          }}
          digitTxtStyle={{color: '#000'}}
          separatorStyle={{color: '#000'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          style={styles.number}
        />
      );
    }
    return (
      <CountDown
        size={16}
        until={864000}
        digitStyle={{
          backgroundColor: 'transparent',
        }}
        digitTxtStyle={{color: '#fff'}}
        separatorStyle={{color: '#fff'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        style={styles.number}
      />
    );
  };
  return (
    <View>
      <Time />
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  number: {marginLeft: -10, fontFamily: fonts.secondary[800]},
});
