/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Router from './src/router';
import ResourceContext from './src/context/ResourceContext';
import {StripeProvider} from '@stripe/stripe-react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/store';
import OnBoardingProvider from './src/context/OnBoardingContext';
import Amplify from 'aws-amplify';
import awsConfig from './src/aws-exports';
import {
  STRIPE_EU_LIVE_PK,
  STRIPE_EU_TEST_PK,
  STRIPE_GLOBAL_LIVE_PK,
  STRIPE_GLOBAL_TEST_PK,
} from '@env';
import {
  selectRegion,
  updateRegion,
} from './src/store/features/region/regionSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/sheets/sheets';

// Amplify.configure(awsConfig);
// const isLocalhost = Boolean(__DEV__);

const isLocalhost = Boolean(true);

const STRIPE_DEV_MODE = false;

const STRIPE_GLOBAL_PK = STRIPE_DEV_MODE
  ? STRIPE_GLOBAL_TEST_PK
  : STRIPE_GLOBAL_LIVE_PK;
const STRIPE_EU_PK = STRIPE_DEV_MODE ? STRIPE_EU_TEST_PK : STRIPE_EU_LIVE_PK;

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
const App = () => {
  return (
    <Provider store={store}>
      <Appx />
    </Provider>
  );
};

export default App;

const Appx = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: 'transparent',
    flex: 1,
  };

  const region = useSelector(selectRegion);
  console.log('xxxxxx', region);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const init = async () => {
      const re = await AsyncStorage.getItem('SERVER');
      if (re) {
        dispatch(updateRegion(re));
      }
    };
    init();
  }, []);

  return (
    <SheetProvider>
      <StripeProvider
        publishableKey={region === 'eu' ? STRIPE_EU_PK : STRIPE_GLOBAL_PK}>
        {/* <SafeAreaView style={backgroundStyle}> */}
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <OnBoardingProvider>
          <ResourceContext>
            <Router />
          </ResourceContext>
        </OnBoardingProvider>
        {/* </SafeAreaView> */}
      </StripeProvider>
    </SheetProvider>
  );
};
