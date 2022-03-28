/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Alert} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

//import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';

//import config from './src/aws-exports';

import Amplify, {Auth, Hub} from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
globalThis.category = 'Groceries';
globalThis.itemDetails = {};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  useEffect(() => {
    const countries = [
      'Asmara Eritrea',
      'Uganda Campala',
      'Ethiopia Addis Abeba',
      'Kenya Nairobi',
    ];
    /*const listener = data => {
      if (data.payload.event == 'signIn') {
        Alert.alert('We only provide service to the following locations: '+countries.join(", "));
      }
    };

    Hub.listen('auth', listener);*/
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
