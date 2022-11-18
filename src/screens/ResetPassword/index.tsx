import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {Alert, SafeAreaView, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

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
      const res = await Auth.forgotPasswordSubmit(username, code, newPassword);
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
      <TextInput value={username} onChangeText={v => setUsername(v)} />
      <TextInput value={code} onChangeText={v => setCode(v)} />
      <TextInput value={newPassword} onChangeText={v => setNewPassword(v)} />

      <Button text="Sigin" onPress={() => navigation.navigate('Sigin')} />
      <Button text="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};
export default ResetPassword;
