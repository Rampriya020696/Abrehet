/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../utils';
import {APP_ICON} from '../../../assets/images';
import {ResourceContext} from '../../context/ResourceContext';
import {useNavigation} from '@react-navigation/native';
import {Amplify, Auth, Hub} from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import RegionalPopup from '../../components/RegionalPopup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateRegion} from '../../store/features/region/regionSlice';
import {useDispatch} from 'react-redux';
let keyboardDidShowListener;
let keyboardDidHideListener;

const {width, height} = Dimensions.get('window');
const Signin = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('mspl');
  const [heightTop, setHeightTop] = useState(30);
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);
  const {resource} = React.useContext(ResourceContext) as any;
  let ScrollViewRef = React.useRef();
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  const [regionPopupShow, setRegionPopupShow] = useState(false);
  const dispatch = useDispatch();
  const keyboardDidShow = (number = 110) => {
    ScrollViewRef?.current?.scrollTo({y: number, animated: true});
  };

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

  const handleGooglePress = () => {
    Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google});
    setGoogleLoading(true);
  };

  const handleFbPress = () => {
    Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook});
    setFbLoading(true);
  };

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({payload: {event, data}}) => {
      console.log(event, data, 'payload');
      switch (event) {
        case 'signIn':
          setUser(data);
          setGoogleLoading(false);
          setFbLoading(false);
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'customOAuthState':
          setCustomState(data);
          setGoogleLoading(false);
          setFbLoading(false);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log('Not signed in'));

    return unsubscribe;
  }, []);

  const keyboardDidHide = () => {};
  React.useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  React.useEffect(() => {
    const init = async () => {
      const region = await AsyncStorage.getItem('SERVER');
      console.log({region});
      if (!region) {
        setRegionPopupShow(true);
      } else {
        dispatch(updateRegion(region));
      }
    };
    init();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Image
        style={{width, height, position: 'absolute'}}
        source={
          resource?.login
            ? {uri: resource.login}
            : require('../../Assets/Login.png')
        }
      />

      <ScrollView
        ref={ScrollViewRef}
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 100,
        }}>
        <RegionalPopup
          visible={regionPopupShow}
          onClose={() => setRegionPopupShow(false)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 100, width: 80}}
            source={APP_ICON}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 20,
              fontFamily: fonts.primary[800],
              marginLeft: 1,
              marginRight: 40,
              alignSelf: 'center',
              color: 'white',
            }}>
            Mesob Store
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: 20, width: '100%'}}>
          <TouchableOpacity
            onPress={handleFbPress}
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
              {fbLoading ? (
                <ActivityIndicator color={'white'} />
              ) : (
                'Login with Facebook'
              )}
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
            }}
            onPress={handleGooglePress}>
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
              {googleLoading ? <ActivityIndicator /> : 'Login with Google'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            alignSelf: 'center',
            color: 'white',
            marginTop: 10,
          }}>
          OR
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 3,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 25, width: 25, marginLeft: 20}}
            source={require('../../Assets/userNameAbrehet.png')}
          />
          <TextInput
            onFocus={() => keyboardDidShow(120)}
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
            borderRadius: 20,
            padding: 3,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 15, width: 25, marginLeft: 20}}
            source={require('../../Assets/Icon-Password.png')}
          />
          <TextInput
            onFocus={() => keyboardDidShow(120)}
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

        <TouchableOpacity onPress={handleSignIn}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={{color: 'white', fontSize: 15}}>
                Reset your password
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signin;
