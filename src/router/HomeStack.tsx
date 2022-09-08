/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Signin';
import ProductScreen from '../screens/ProductScreen';
import {SafeAreaView, View, TextInput, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeProductScreen from '../screens/HomeScreen/main';

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: (s: string) => void;
}

const Stack = createStackNavigator();

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#08b3fc'}}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#6A91C7',
          paddingHorizontal: 20,
          paddingVertical: 10,
          height: 60,
        }}>
        {/* <Feather name="search" size={30} /> */}
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            width: '80%',
            alignItems: 'center',
            paddingLeft: 5,
            borderRadius: 12,
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
        <TouchableOpacity>
          <Image
            style={{width: 22, height: 20, marginLeft: 10}}
            source={require('../Assets/ChatICon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{width: 22, height: 20, marginLeft: 10}}
            source={require('../Assets/Notification.png')}
          />
        </TouchableOpacity>
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
        component={HomeProductScreen}
        options={{title: 'HomeProduct'}}
      />
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
export {HeaderComponent};
