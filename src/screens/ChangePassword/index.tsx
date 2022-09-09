import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  Text,
  Alert,
  SafeAreaView,
} from 'react-native';
import {Auth} from 'aws-amplify';
import * as types from '../../API';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import _ from 'lodash';
import ActionBtn from '../../components/ActionBtn';
import Header from '../../components/Header';

const ProfileScreen = ({navigation}) => {
  const [info, setInfo] = useState(null);
  const [text, onChangeText] = useState('');
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [id, setID] = useState('');

  const updatePasswordPress = () => {
    if (!oldPassword || !newPassword) {
      Alert.alert('Alert', 'please provide old and new password!');
      return;
    }
    setLoading(true);
    Auth.currentAuthenticatedUser()
      .then(user => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then(data => {
        console.log(data);
        Alert.alert('Success', 'Password Updated Successfuly!');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Failed', err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const userInfo = async () => {
      try {
        let auth_user = await Auth.currentAuthenticatedUser();
        console.log({auth_user}, 'auth_user');
        console.log('attributes:', auth_user.attributes);
        setInfo(auth_user.attributes);
        let getUser = (await API.graphql(
          graphqlOperation(queries.listUsers, {
            filter: {email: {eq: auth_user.attributes.email}},
          }),
        )) as {
          data: types.ListUsersQuery;
        };
        if (getUser.data.listUsers!.items.length === 0) {
          let createUser = (await API.graphql(
            graphqlOperation(mutations.createUsers, {
              input: {
                email: auth_user.attributes.email,
                phone: auth_user.attributes.phone_number,
              },
            }),
          )) as {
            data: types.CreateUsersMutation;
          };
        }
        getUser = (await API.graphql(
          graphqlOperation(queries.listUsers, {
            filter: {email: {eq: auth_user.attributes.email}},
          }),
        )) as {
          data: types.ListUsersQuery;
        };
        let user = getUser.data.listUsers!.items[0];
        console.log(user);
        setID(user!.id);
        if (user!.address) {
          onChangeText(user!.address);
        }
      } catch (error) {
        console.log(error);
      }
    };
    userInfo();
  }, []);
  if (!info) {
    return (
      <View style={styles.page}>
        {/* Render Product Component */}
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Change Password" onPress={navigation.goBack} />
      <View style={styles.page}>
        <TextInput
          style={styles.input}
          onChangeText={setOldPassword}
          value={oldPassword}
          placeholder="Old Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNewPassword}
          value={newPassword}
          placeholder="New Password"
        />

        <ActionBtn
          title={loading ? 'loading...' : 'Update Password'}
          onPress={updatePasswordPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 70,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
