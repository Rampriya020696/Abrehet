/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ICGo} from '../../Assets';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import Strip from '../../components/Strip';
import {Auth} from 'aws-amplify';
import {colors, fonts} from '../../utils';

const SettingAccount = ({navigation}) => {
  const onLogOutPress = () => Auth.signOut();
  return (
    <View style={styles.page}>
      <Header title="Setting Account" onPress={navigation.goBack} />
      <ScrollView>
        <Gap height={10} />
        <View style={styles.gap} />
        <Gap height={20} />
        <Text style={styles.title}>Account</Text>
        <Gap height={30} />
        <Strip />
        <TouchableOpacity
          style={styles.account}
          onPress={() => navigation.navigate('ChangeAddress')}>
          <Text style={styles.name}>Change Address</Text>
          <Image source={ICGo} style={styles.go} />
        </TouchableOpacity>
        <Strip />
        <TouchableOpacity
          style={styles.account}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.name}>Change Password</Text>
          <Image source={ICGo} style={styles.go} />
        </TouchableOpacity>
        <Strip />

        <Gap height={20} />
        <View style={styles.gap} />
        <Gap height={20} />
        <TouchableOpacity onPress={onLogOutPress}>
          <Text style={styles.title1}>Logout</Text>
        </TouchableOpacity>
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default SettingAccount;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gap: {
    borderColor: colors.borderGap,
    borderWidth: 7,
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginHorizontal: 20,
  },
  title1: {
    fontSize: 17,
    fontFamily: fonts.secondary[600],
    color: 'red',
    marginHorizontal: 20,
    marginVertical: 250
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    marginHorizontal: 20,
  },
  go: {
    width: 10,
    height: 15,
  },
  name: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
});
