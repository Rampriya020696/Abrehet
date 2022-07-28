import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNav from './bottomTabNav';
import Signin from '../screens/Signin';
import HomeStack from './HomeStack';

const Root = createStackNavigator();
const Stack = createNativeStackNavigator();

const MainStackNavigator = ({route}) => {
  return (
   <Stack.Navigator>
    <Stack.Screen 
    name="Signin"
    component={Signin}
    options={{headerShown:false}}
    />

    <Stack.Screen 
    name="BottomTabNav"
    component={BottomTabNav}
    options={{headerShown:false}}
    />

    <Stack.Screen
    name="Home"
    component={HomeStack}
    options={{headerShown:false}}
    />

   </Stack.Navigator>
  );
};

export default MainStackNavigator;
