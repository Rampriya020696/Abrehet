import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {Alert, SafeAreaView, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

const EmailConfirmation = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<any>();
  const [username, setUsername] = React.useState('');
  const [code, setCode] = React.useState('');

  const handleConfirmPress = async () => {
    console.log({username, code});
    if (!code || !username) {
      Alert.alert('Alert', 'please provide username and code');
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
        backgroundColor: 'orange',
      }}>
      <TextInput value={username} onChangeText={v => setUsername(v)} />
      <TextInput value={code} onChangeText={v => setCode(v)} />
      <Button text="Confirm" onPress={handleConfirmPress} />
      <Button text="Sigin" onPress={() => navigation.navigate('Sigin')} />
      <Button text="Resend" onPress={handleEmailResend} />
    </SafeAreaView>
  );
};
export default EmailConfirmation;
