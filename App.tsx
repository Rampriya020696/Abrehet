/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Linking, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import ResourceContext from './src/context/ResourceContext';
import {StripeProvider} from '@stripe/stripe-react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import OnBoardingProvider from './src/context/OnBoardingContext';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsConfig from './src/aws-exports';
// Amplify.configure(awsConfig);

// const isLocalhost = Boolean(__DEV__);
const isLocalhost = Boolean(true);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, productionRedirectSignIn] =
  awsConfig.oauth.redirectSignIn.split(',');
const [localRedirectSignOut, productionRedirectSignOut] =
  awsConfig.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};

Amplify.configure(updatedAwsConfig);

const STRIPE_PK =
  'pk_test_51MU2jiKfFoFhc3tbllcV1mFImqKYh5An6DHJDGCUs7x4f6OZvvGAPF4Sf4Z1Tjsuvfqk94nV8fyaTsTxE5EbAG3P00gUH88kPB';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <StripeProvider publishableKey={STRIPE_PK}>
      <SafeAreaView style={backgroundStyle}>
        <Provider store={store}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <OnBoardingProvider>
            <ResourceContext>
              <Router />
            </ResourceContext>
          </OnBoardingProvider>
        </Provider>
      </SafeAreaView>
    </StripeProvider>
  );
};

export default App;
