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
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

// import Amplify from 'aws-amplify';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import Signin from './src/screens/Signin';

import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import MainStackNavigator from './src/router/stackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import ResourceContext from './src/context/ResourceContext';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ResourceContext>
        <Router />
      </ResourceContext>
    </SafeAreaView>
  );
};

// export default withAuthenticator(App, {Signin});
// export default withAuthenticator(App);
export default App;
