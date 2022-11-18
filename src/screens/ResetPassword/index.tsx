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

const ResetPassword = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<any>();
  const [username, setUsername] = React.useState('');
  const [code, setCode] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleSubmit = async () => {
    console.log({username, code});
    if (!code || !username || !newPassword) {
      Alert.alert('Alert', 'please provide username , newPassword and code');
      return;
    }
    try {
      const res = (await Auth.forgotPasswordSubmit(
        username,
        code,
        newPassword,
      )) as any;
      navigation.navigate('Sigin');
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
        backgroundColor: 'pink',
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
          Reset Your Password
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
            }}
            placeholder="username"
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
            }}
            placeholder="code"
            value={code}
            onChangeText={v => setCode(v)}
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
            }}
            placeholder="New Password"
            value={newPassword}
            onChangeText={v => setNewPassword(v)}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            marginTop: 40,
            height: 45,
            backgroundColor: colors.blueButton,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sigin')}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              marginTop: 20,
              textAlign: 'center',
            }}>
            back, to Signin
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ResetPassword;
