import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import Profile from '../screens/Profile';
import FlashSale from '../screens/FlashSale';
import ProductDetail from '../screens/ProductDetail';
import MyOrder from '../screens/MyOrder';
import About from '../screens/About';
import ContactUs from '../screens/ContactUs';
import SettingAccount from '../screens/SettingAccount';
import OfferDeals from '../screens/OfferDeals';
import Payments from '../screens/Payment';

const Root = createStackNavigator();
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HomeProductScreen"
        component={HomeProductScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Account"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Cart"
        component={ShopingCartStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Brand"
        component={MenuScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Address"
        component={AddressScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="FlashSale"
        component={FlashSale}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingAccount"
        component={SettingAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OfferDeals"
        component={OfferDeals}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
