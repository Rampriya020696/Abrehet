import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShopingCartStack from './ShoppingCartStack';
import {NavigatorIOS, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#08b3fc',
        tabBarActiveTintColor: '#d68d47',
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          headerStyle: {
            backgroundColor: '#08b3fc',
          },
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
        listeners={{
          tabPress: e => {
            // Prevent default action
            navigation.navigate('HomeScreen');
      
            //Any custom code here
          },
        }}
      />
      <Tab.Screen
        component={ShopingCartStack}
        name="ShoppingCart"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={MenuScreen}
        name="More"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
