/* eslint-disable prettier/prettier */
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import {colors} from '../../utils';

const EmailConfirmation = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<any>();
  const [username, setUsername] = React.useState('');
  const [code, setCode] = React.useState('');

  const handleConfirmPress = async () => {
    console.log({username, code});
    if (!code || !username) {
      Alert.alert('Alert', 'Please provide email and code');
      return;
    }
    try {
      const res = await Auth.confirmSignUp(username, code);
      navigation.navigate('Sigin');
      Alert.alert('Success', res?.message);
      console.log(res);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
      console.log(error);
    }
  };

  const handleEmailResend = async () => {
    try {
      const res = await Auth.resendSignUp(username);
      Alert.alert('Success', res?.message);
      console.log(res);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (params?.username) {
      setUsername(params?.username);
    }
  }, [navigation]);
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
            fontWeight: '600',
            fontSize: 28,
            marginVertical: 20,
            textAlign: 'center',
          }}>
          Confirm Your Email
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
            placeholder="Email"
            placeholderTextColor="gray"
            value={username}
            onChangeText={v => setUsername(v)}
          />
        </View>
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
            placeholder="code"
            placeholderTextColor="gray"
            value={code}
            onChangeText={v => setCode(v)}
          />
        </View>

        <TouchableOpacity
          onPress={handleConfirmPress}
          style={{
            marginTop: 40,
            height: 45,
            backgroundColor: colors.blueButton,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:15
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity

          onPress={handleEmailResend}
          style={{
            marginTop: 40,
            height: 45,
            backgroundColor: colors.blueButton,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:15
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sigin')}>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              marginTop: 20,
              textAlign: 'center',
            }}>
            back to Sign In
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default EmailConfirmation;
