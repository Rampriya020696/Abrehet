/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';
import Payments from '../screens/Payment';
import ContactUs from '../screens/ContactUs';
import About from '../screens/About';
import DeleteUser from '../screens/DeleteUser';
import MyOrder from '../screens/MyOrder';
import SettingAccount from '../screens/SettingAccount';
import ChangePassword from '../screens/ChangePassword';
import ChangeAddress from '../screens/ChangeAddress';
import ChatScreen from '../screens/ChatScreen';
import OrderHistory from '../screens/OrderHistory';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="AboutUsScreen" component={About} />
      <Stack.Screen name="DeleteUserScreen" component={DeleteUser} />
      <Stack.Screen name="OrdersScreens" component={MyOrder} />
      <Stack.Screen name="AccountSettingScreen" component={SettingAccount} />
      <Stack.Screen name="ContactUsScreen" component={ContactUs} />
      <Stack.Screen name="PaymentScreen" component={Payments} />
      <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistory} />
      <Stack.Screen component={ChatScreen} name="ChatScreen" />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
