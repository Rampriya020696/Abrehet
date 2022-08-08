import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import MainStackNavigator from './stackNavigator';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={MainStackNavigator} name="MainStackNavigator" />
        {/* // <Root.Screen component={BottomTabNav} name="HomeTabs" /> */}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
