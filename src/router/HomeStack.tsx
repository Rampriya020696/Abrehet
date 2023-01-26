/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Signin';
import ProductScreen from '../screens/ProductScreen';
import {SafeAreaView, View, TextInput, Image} from 'react-native';
import ShoppingCartScreen from '../screens/ShoopingCartScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeProductScreen from '../screens/HomeScreen/main';
import ChatScreen from '../screens/ChatScreen';
import {useNavigation} from '@react-navigation/native';
import ContactUs from '../screens/ContactUs';
import CategoryPage from '../screens/CategoryPage';
import CartBadge from '../components/CartBadge';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../store/features/cart/cartSlice';
import AddressScreen from '../screens/AddressScreen';

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: (s: string) => void;
}

const Stack = createStackNavigator();

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  const navigation = useNavigation<any>();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems.length, 'ABC');
  return (
    <SafeAreaView style={{backgroundColor: '#08b3fc'}}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#6A91C7',
          paddingHorizontal: 20,
          paddingVertical: 10,
          height: 60,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            width: '80%',
            alignItems: 'center',
            paddingLeft: 5,
            borderRadius: 12,
            flex: 1,
          }}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../Assets/SearchIcon.png')}
          />
          <TextInput
            style={{
              height: 40,
              marginLeft: 10,
              padding: 7,
              color: '#0a0300',
              fontSize: 17,
            }}
            placeholder="Search..."
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => navigation.navigate('ContactUsScreen')}>
          <Image
            style={{width: 22, height: 20}}
            source={require('../Assets/ChatICon.png')}
          />
        </TouchableOpacity>

        <CartBadge count={cartItems.length || 0} />
      </View>
    </SafeAreaView>
  );
};
const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen">
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        name="HomeProductScreen"
        getComponent={HomeProductScreen}
        options={{title: 'HomeProduct'}}
      />
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
      <Stack.Screen component={ShoppingCartScreen} name="cart" />
      <Stack.Screen component={CategoryPage} name="CategoryPage" />
      <Stack.Screen component={ChatScreen} name="ChatScreen" />
      <Stack.Screen component={ContactUs} name="ContactUsScreen" />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
export {HeaderComponent};
