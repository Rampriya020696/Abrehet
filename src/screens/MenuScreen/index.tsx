/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Auth} from 'aws-amplify';
import ActionBtn from '../../components/ActionBtn';

const MenuScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };
  return (
    <SafeAreaView>
      {/* <Button text="Sign out" onPress={onLogout} /> */}
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: 30,
        }}>
        <ActionBtn title="Sign out" onPress={onLogout} />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
