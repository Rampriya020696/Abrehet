import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={DummyAvatar2} style={styles.avatar} /> */}
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Hai, barang ini tersedia untuk saat ini
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {width: 40, height: 40, borderRadius: 30 / 2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingLeft: 20,
    backgroundColor: colors.white,
    maxWidth: '90%',
    borderRadius: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 0,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
