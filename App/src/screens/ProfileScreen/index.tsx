import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  Text,
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
  const [name, onChangeName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [id, setID] = useState('');
  useEffect(() => {
    const userInfo = async () => {
      let auth_user = await Auth.currentAuthenticatedUser();
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
      console.log('yello');
      let getOrders = await API.graphql(
        graphqlOperation(queries.listOrders, {
          filter: {userID: {eq: user.id}},
        }),
      );
      if (getOrders) {
        setOrders(getOrders.data.listOrders.items);
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
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
      />
      <Text>
        Orders:{' '}
        {orders.map(item => JSON.parse(item.Products).total).join(", ")}
      </Text>
      <Button
        title="Update Settings"
        onPress={() => {
          console.log('press ' + text);
          API.graphql(
            graphqlOperation(mutations.updateUsers, {
              input: {
                id: id,
                address: text,
                name: name,
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
});

export default ProfileScreen;
