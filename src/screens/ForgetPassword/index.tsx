import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {Alert, SafeAreaView, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

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
        backgroundColor: 'blue',
      }}>
      <TextInput value={username} onChangeText={v => setUsername(v)} />

      <Button text="Rest" onPress={handleReset} />
    </SafeAreaView>
  );
};
export default ForgetPassword;
