/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
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
import {Image, Platform, SafeAreaView, View} from 'react-native';
import {Constants} from '@aws-amplify/core';
import SvgUri from 'react-native-svg-uri';
import Profile from '../screens/Profile';
import ProfileStack from './ProfileStack';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import Signin from '../screens/Signin';
import {authSelector, updateAuth} from '../store/features/auth';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const [user, setUser] = useState(null);

  const auth = useSelector(authSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await Auth.currentAuthenticatedUser({bypassCache: true});
        console.log(res);
        dispatch(updateAuth(res));
        setUser(res);
      } catch (error: any) {
        console.log(error.message, 'checkUser');
        setUser(null);
      }
    };
    checkUser();
  }, [navigation]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {padding: 15, height: Platform.OS === 'ios' ? 90 : 60},
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
      {auth ? (
        <Tab.Screen
          component={ProfileStack}
          name="Account"
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={25} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          component={Signin}
          name="Login"
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={25} />
            ),
            tabBarStyle: {display: 'none'},
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
