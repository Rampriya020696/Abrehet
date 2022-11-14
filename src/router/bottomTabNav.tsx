/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import HomeStack from './HomeStack';
import ShopingCartStack from './ShoppingCartStack';
import {Image, View} from 'react-native';
import {Constants} from '@aws-amplify/core';
import SvgUri from 'react-native-svg-uri';
import Profile from '../screens/Profile';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {padding: 15, height: 60},
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 14,
          height: 20,
          fontWeight: 'bold',
          fontFamily: 'Poppins-ExtraBold',
        },
        tabBarInactiveTintColor: '#d9d9d9',
        tabBarActiveTintColor: '#6991c7',
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
      />

      {/* <Tab.Screen
        component={MenuScreen}
        name="Brand"
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? '#6991c7' : '#d9d9d9',
                }}
                source={require('../Assets/ic-brand.png')}
              />
            </View>
          ),
        }}
      /> */}

      <Tab.Screen
        component={ShopingCartStack}
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon2 name="shopping-cart" color={color} size={27} />
          ),
        }}
      />

      <Tab.Screen
        // component={ProfileScreen} //old
        component={ProfileStack}
        name="Account"
        options={{
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
