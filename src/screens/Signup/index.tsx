/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../utils';
import Amplify, {Auth} from 'aws-amplify';
// import awsconfig from '../../aws-exports';
import {APP_ICON} from '../../../assets/images';
import {ResourceContext} from '../../context/ResourceContext';

// Amplify.configure({Auth: awsconfig});

const Signup = ({navigation}): JSX.Element => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const {resource} = React.useContext(ResourceContext) as any;
  const handleSignUp = async () => {
    try {
      const response = await Auth.signUp(email, password, email);
      console.log(response);
      console.log('SignUp Done');
      Alert.alert('Alert', 'please check your email!');
      navigation.navigate('EmailConfirmation', {email});
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <ImageBackground
      source={
        resource?.signup
          ? {uri: resource?.signup}
          : require('../../Assets/Login.png')
      }
      style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page2}>
        <View style={{marginTop: 30}}>
          <View style={styles.wraperLogo}>
            <Image
              style={{height: 80, width: 80}}
              source={APP_ICON}
              resizeMode="contain"
            />

            <Text style={styles.title}>Mesob Store</Text>
          </View>

          <View style={{alignSelf: 'center', marginTop: 30, width: '100%'}}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 3,
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 25, width: 25, marginLeft: 20}}
                source={require('../../Assets/userNameAbrehet.png')}
              />
              <TextInput
                placeholder="Email"
                onChangeText={value => setEmail(value)}
                style={{
                  fontSize: 14,
                  paddingLeft: 20,
                  height:45
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 3,
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 15, width: 25, marginLeft: 20}}
                source={require('../../Assets/Icon-Password.png')}
              />
              <TextInput
                placeholder="Password"
                onChangeText={value => setPassword(value)}
                style={{
                  fontSize: 14,
                  paddingLeft: 20,
                  height:45
                }}
              />
            </View>

            {/*  <View
              style={{
                backgroundColor: 'white',
                borderRadius: 19,
                padding: 5,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
               <Image
                style={{height: 15, width: 25, marginLeft: 20}}
                source={require('../../Assets/Icon-Mail.png')}
              />
             <TextInput
               placeholder="Email"
             onChangeText={value => setEmail(value)}
              style={{
               fontSize: 14,
                paddingLeft: 20,
              }}
              /> 
            </View>  */}

            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 3,
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 20, width: 20, marginLeft: 20}}
                source={require('../../Assets/phoneNumber.png')}
              />
              <TextInput
                placeholder="Phone Number with country code"
                keyboardType="numeric"
                onChangeText={value => setPhoneNumber(value)}
                onChangeText={value => {
                  let newValue = '+1' + value;
                  setPhoneNumber(newValue);
                }}
                style={{
                  fontSize: 14,
                  paddingLeft: 20,
                  height:45
                }}
              />
            </View>

            <View style={{alignSelf: 'center', marginTop: 20}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                  Already have an account ? Sign In
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', marginTop: 30}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EmailConfirmation')}>
                <Text style={{color: 'white', fontSize: 17, fontWeight: '300'}}>
                  Confirm Email
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => handleSignUp()}
            style={{ marginHorizontal: 10}}
            >
              <LinearGradient
                start={{x: 0.0, y: 0}}
                end={{x: 0.5, y: 3.5}}
                locations={[0, 0.5, 1.6]}
                colors={['#131A41', '#3A2E6E', '#6D47A9']}
                style={{
                  height: 50,
                  width: '100%',
                  paddingHorizontal: 40,
                  borderRadius: 50,
                  justifyContent: 'center',
                  marginTop: 30,
                  marginBottom: 10,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 17, color: 'white', fontWeight: '600'}}>
                  Register
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* <TouchableOpacity
                            onPress={() => navigation.navigate('BottomTabNav')}
                            style={{
                                backgroundColor: 'red', width: '30%', padding: 5, alignItems: 'center',
                                borderRadius: 20, marginBottom: 20
                            }}>
                            <Text style={{ fontSize: 14, color: 'white' }}>
                                Skip
                            </Text>
                        </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 30,
  },
  page2: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  wraperLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  choose: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.primary[900],
    marginLeft: 1,
    marginRight: 38,
    alignSelf: 'center',
    color: 'white',
  },
  or: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    alignSelf: 'center',
    color: 'white',
  },
  signin: {
    fontSize: 14,
    color: 'white',
    fontFamily: fonts.secondary[400],
  },
  chooseLoginFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.facebook,
    borderRadius: 30,
    width: 330,
    height: 50,
    elevation: 10,
  },
  imageFacebook: {
    width: 15,
    height: 30,
  },
  loginFacebook: {
    fontSize: 16,
    color: 'white',
    marginLeft: 30,
    fontFamily: fonts.secondary[400],
  },
  chooseLoginGoogle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 30,
    width: 330,
    height: 50,
    elevation: 10,
  },
  imageGoogle: {
    width: 25,
    height: 25,
  },
  loginGoogle: {
    fontSize: 16,
    color: colors.text.secondary,
    marginLeft: 20,
    fontFamily: fonts.secondary[400],
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
