/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';
import Payments from '../screens/Payment';
import ContactUs from '../screens/ContactUs';
import About from '../screens/About';
import MyOrder from '../screens/MyOrder';
import SettingAccount from '../screens/SettingAccount';
import ChangePassword from '../screens/ChangePassword';
import ChangeAddress from '../screens/ChangeAddress';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="AboutUsScreen" component={About} />
      <Stack.Screen name="OrdersScreens" component={MyOrder} />
      <Stack.Screen name="AccountSettingScreen" component={SettingAccount} />
      <Stack.Screen name="ContactUsScreen" component={ContactUs} />
      <Stack.Screen name="PaymentScreen" component={Payments} />
      <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen component={ChatScreen} name="ChatScreen" />
    </Stack.Navigator>
  );
};

export default ProfileStack;
