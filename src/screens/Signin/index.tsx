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
import awsconfig from '../../aws-exports';
import {APP_ICON} from '../../../assets/images';
import {ResourceContext} from '../../context/ResourceContext';

Amplify.configure({Auth: awsconfig});

const Signin = ({navigation}) => {
  const [username, setUsername] = useState('mspl');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);
  const {resource} = React.useContext(ResourceContext) as any;
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await Auth.signIn(username, password);
      console.log(response);
    } catch (e: any) {
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={
        resource?.login
          ? {uri: resource.login}
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

          <View style={{alignSelf: 'center', marginTop: 20, width: '100%'}}>
            {/* <TouchableOpacity
              style={{
                backgroundColor: '#536DFE',
                width: '90%',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 12,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 10, height: 20, alignSelf: 'center'}}
                source={require('../../Assets/icon_facebook.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  padding: 2,
                  paddingLeft: 20,
                  alignSelf: 'center',
                  fontWeight: '600',
                }}>
                Login with Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: '90%',
                padding: 10,
                flexDirection: 'row',
                borderRadius: 12,
                alignSelf: 'center',
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 16, height: 16, alignSelf: 'center'}}
                source={require('../../Assets/Logo-Google.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  padding: 2,
                  paddingLeft: 20,
                  alignSelf: 'center',
                  fontWeight: '600',
                }}>
                Login with Google
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                alignSelf: 'center',
                color: 'white',
                marginTop: 10,
              }}>
              OR
            </Text> */}

            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
                padding: 5,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 25, width: 25, marginLeft: 20}}
                source={require('../../Assets/userNameAbrehet.png')}
              />
              <TextInput
                placeholder="Email"
                onChangeText={value => setUsername(value)}
                style={{
                  fontSize: 14,
                  paddingLeft: 20,
                }}
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
                }}
              />
            </View>

            <View style={{alignSelf: 'center', marginTop: 20}}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{color: 'white', fontSize: 20}}>
                  Not a Member? Register
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => handleSignIn()}>
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
                  {loading ? 'loading...' : 'Sign In'}
                </Text>
              </LinearGradient>
              <View style={{alignSelf: 'center', marginTop: 1}}>
                <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
                  <Text style={{color: 'white', fontSize: 15}}>
                    Reset your password
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            {/* <TouchableOpacity
              // onPress={() => navigation.navigate('BottomTabNav')}
              style={{
                backgroundColor: 'red',
                width: '30%',
                padding: 6,
                alignItems: 'center',
                borderRadius: 30,
                marginBottom: 1,
                marginVertical: 60,
              }}>
              <Text style={{fontSize: 14, color: 'white'}}>Skip</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
  },
  page2: {
    justifyContent: 'center',
    height: '75%',
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
    fontSize: 20,
    fontFamily: fonts.primary[800],
    marginLeft: 1,
    marginRight: 40,
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
