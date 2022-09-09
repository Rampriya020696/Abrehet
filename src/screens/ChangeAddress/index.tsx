import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Button,
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
import {fonts} from '../../utils';
import Header from '../../components/Header';

const ChangePassword = ({navigation}) => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [text, onChangeText] = useState('');
  const [id, setID] = useState('');

  const UpdateAddressPress = async () => {
    setLoading(true);
    try {
      const res = await API.graphql(
        graphqlOperation(mutations.updateUsers, {
          input: {
            id: id,
            address: text,
          },
        }),
      );
      console.log(res);
      Alert.alert('Success', 'Address Chnaged Successfuly!');
    } catch (error: any) {
      console.log(error.message);
      Alert.alert('Failed', error?.message);
    } finally {
      setLoading(false);
    }
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
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.page}>
      <Header title="Change Address" onPress={navigation.goBack} />
      <View
        style={{
          flex: 1,
          padding: 25,
        }}>
        <Text>Address:</Text>
        <TextInput
          placeholder="Enter Your Address..."
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <ActionBtn
          title={loading ? 'loading...' : 'Update Address'}
          onPress={UpdateAddressPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 70,
    fontFamily: fonts.primary[900],
  },
});

export default ChangePassword;
