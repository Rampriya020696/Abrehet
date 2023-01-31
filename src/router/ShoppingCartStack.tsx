/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopingCartScreen from '../screens/ShoopingCartScreen';
import AddressScreen from '../screens/AddressScreen';
import CartItemScreen from '../screens/CartItemScreen';

const Stack = createStackNavigator();

const ShopingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShopingCartScreen}
        name="cart"
        options={{title: 'Shopping Cart', headerShown: false}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address', headerShown: false}}
      />
      <Stack.Screen
        component={CartItemScreen}
        name="CartItemScreen"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ShopingCartStack;
