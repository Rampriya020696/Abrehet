/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {
  Alert,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import {colors} from '../../utils';

const ForgetPassword = () => {
  const navigation = useNavigation<any>();

  const [username, setUsername] = React.useState('');

  const handleReset = async () => {
    if (!username) {
      Alert.alert('Alert', 'please provide username');
      return;
    }
    try {
      const res = await Auth.forgotPassword(username);
      navigation.navigate('ResetPassword', {username});
      Alert.alert('Success', res?.message);
      console.log(res);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: 'rgba(255,255,255,1)',
          paddingHorizontal: '10%',
        }}
        source={require('../../Assets/Login.png')}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 28,
            marginVertical: 20,
          }}>
          Forget Your Password
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            padding: 5,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              fontSize: 15,
              paddingLeft: 20,
              height:40
            }}
            placeholder="Email Address"
            placeholderTextColor="gray"
            value={username}
            onChangeText={v => setUsername(v)}
          />
        </View>

        <TouchableOpacity
          onPress={handleReset}
          style={{
            marginTop: 40,
            height: 45,
            backgroundColor: colors.blueButton,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:15
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Forget Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sigin')}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Back To Sign In
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ForgetPassword;
