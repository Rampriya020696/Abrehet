import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNav from './bottomTabNav';
import Signin from '../screens/Signin';
import HomeStack from './HomeStack';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShopingCartStack from './ShoppingCartStack';
import MenuScreen from '../screens/MenuScreen';
import AddressScreen from '../screens/AddressScreen';
import Signup from '../screens/Signup';
import HomeProductScreen from '../screens/HomeScreen/main';
import Splash from '../screens/Splash';
import Slider from '../screens/Slider';
import DrawerNavigator from './DrawerNavigator';
const Root = createStackNavigator();
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomeProductScreen"
        component={HomeProductScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Account"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cart"
        component={ShopingCartStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Brand"
        component={MenuScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      /> */}


    </Stack.Navigator>
  );
};

export default MainStackNavigator;
