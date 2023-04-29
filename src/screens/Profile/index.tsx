/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Gap from '../../components/Gap';

import {colors, fonts} from '../../utils';
import {API, Auth, graphqlOperation} from 'aws-amplify';

import * as types from '../../API';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import _ from 'lodash';
import RegionalPopup from '../../components/RegionalPopup';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateAuth} from '../../store/features/auth';

const Profile = () => {
  const [info, setInfo] = useState<any>(null);
  const [text, onChangeText] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [id, setID] = useState('');
  const [regionPopupShow, setRegionPopupShow] = useState(false);

  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  // useEffect(() => {
  //   const checkUser = async () => {
  //     try {
  //       const res = await Auth.currentAuthenticatedUser({bypassCache: true});
  //       console.log(res);
  //       setUser(res);
  //     } catch (error: any) {
  //       console.log(error.message, 'checkUser');
  //       setUser(null);
  //       navigation.navigate('Sigin');
  //     }
  //   };
  //   checkUser();
  // }, []);

  useEffect(() => {
    const userInfo = async () => {
      try {
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
      } catch (error) {
        console.log(error);
        navigation.navigate('Sigin');
      }
    };
    userInfo();
  }, []);
  if (!info) {
    return (
      <View
        style={{
          padding: 10,
          flex: 1,
        }}>
        <Text>Loading</Text>
      </View>
    );
  }

  function handleSignOut() {
    Auth.signOut();
  }
  const dispatch = useDispatch();
  const onLogOutPress = () => {
    Auth.signOut().then(() => {
      dispatch(updateAuth(null));
    });
  };
  async function deleteUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const result = await user.deleteUser();
      navigation.navigate('Sigin');
      onLogOutPress();
      console.log(result);
      Alert.alert('Account deleted Successfully!');
    } catch (error) {
      console.log('Error deleting user', error);
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <RegionalPopup
          visible={regionPopupShow}
          onClose={() => setRegionPopupShow(false)}
        />
        <View style={styles.container}>
          <View>
            <ImageBackground
              source={require('../../Assets/Background-Profile.png')}
              style={styles.image}>
              {/* <Image
              style={styles.avatar}
              source={require('../../Assets/womanface.jpg')}
            /> */}

              {/* <TouchableOpacity>
              <Text style={styles.title}>Edit Profile</Text>
            </TouchableOpacity> */}
            </ImageBackground>
            <Text style={styles.name}>{info?.email}</Text>
          </View>
          <Gap height={28} />

          <View>
            <View style={styles.strip} />

            <TouchableOpacity
              style={styles.list}
              onPress={() => navigation.navigate('PaymentScreen')}>
              <Image
                style={{width: 25, height: 27}}
                source={require('../../Assets/Icon-Payments.png')}
              />
              <Text style={styles.titleList}>Purchases</Text>
            </TouchableOpacity>

            <View style={styles.strip} />

            <TouchableOpacity
              style={styles.list}
              onPress={() => navigation.navigate('OrderHistoryScreen')}>
              <Image
                style={{height: 18, width: 25}}
                source={require('../../Assets/Icon-My-Orders.png')}
              />
              <Text style={styles.titleList}>My Orders</Text>
            </TouchableOpacity>

            <View style={styles.strip} />

            <TouchableOpacity
              style={styles.list}
              onPress={() => navigation.navigate('AccountSettingScreen')}>
              <Image
                style={{height: 24, width: 25}}
                source={require('../../Assets/Icon-Setting-Account.png')}
              />
              <Text style={styles.titleList}>Setting Account</Text>
            </TouchableOpacity>

            <View style={styles.strip} />

            <TouchableOpacity
              style={styles.list}
              onPress={() => navigation.navigate('ContactUsScreen')}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../Assets/Icon-Call-Center.png')}
              />

              <Text style={styles.titleList}>Contact us</Text>
            </TouchableOpacity>

            <View style={styles.strip} />

            <TouchableOpacity
              style={styles.list}
              onPress={() => navigation.navigate('AboutUsScreen')}>
              <Image
                style={{width: 20, height: 30, padding: 10, marginRight: 5}}
                source={require('../../Assets/Icon-About-Apps.png')}
              />
              <Text style={styles.titleList}>About Mesob Store</Text>
            </TouchableOpacity>
            <View style={styles.strip} />

            <View style={styles.strip} />

            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                Alert.alert(
                  'Delete Account?',
                  'Are you sure want to delete your account!',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => {
                        return;
                      },
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => deleteUser()},
                  ],
                );
              }}>
              <Image
                style={{width: 20, height: 30, padding: 10, marginRight: 5}}
                source={require('../../Assets/Icon-About-Apps.png')}
              />
              <Text style={styles.titleList}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                setRegionPopupShow(true);
              }}>
              <Image
                style={{width: 20, height: 30, padding: 10, marginRight: 5}}
                source={require('../../Assets/Icon-About-Apps.png')}
              />
              <Text style={styles.titleList}>Change Payment Zone</Text>
            </TouchableOpacity>

            <View style={styles.strip} />
            <Gap height={50} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  image: {
    width: '10%',
    height: 10,
  },
  strip: {
    height: 1,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    marginLeft: 100,
    marginRight: 50,
    opacity: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 110 / 2,
    borderColor: colors.white,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 170,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[900],
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.borderstrip,
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    flexDirection: 'row',
    marginLeft: 25,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 24,
  },
  titleList: {
    fontSize: 20,
    color: 'black',
    marginLeft: 16,
  },
});
