/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {UserAgent} from 'amazon-cognito-identity-js';
import * as types from '../../API';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import _ from 'lodash';

const ProfileScreen = () => {
  const [info, setInfo] = useState(null);
  const [text, onChangeText] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [id, setID] = useState('');
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
    <View style={styles.page}>
      {/* Render Product Component */}
      <Text>Email: {info.email}</Text>
      <Text>Phone Number: {info.phone_number}</Text>
      <Text>Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        title="Update Adress"
        onPress={() => {
          console.log('press ' + text);
          API.graphql(
            graphqlOperation(mutations.updateUsers, {
              input: {
                id: id,
                address: text,
              },
            }),
          );
        }}
      />
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
      <Button
        title="Update Password"
        onPress={() => {
          console.log('press ' + oldPassword + ' ' + newPassword);
          Auth.currentAuthenticatedUser()
            .then(user => {
              return Auth.changePassword(user, oldPassword, newPassword);
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
        }}
      />
      <Text style={styles.text} Order History />
      <Button
        title="Order History"
        onPress={() => {
          console.log('press ' + text);
          API.graphql(
            graphqlOperation(mutations.updateUsers, {
              input: {
                id: id,
                address: text,
              },
            }),
          );
        }}
      />
    </View>
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
