/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {Linking, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import ResourceContext from './src/context/ResourceContext';
import {StripeProvider} from '@stripe/stripe-react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/store';
import OnBoardingProvider from './src/context/OnBoardingContext';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsConfig from './src/aws-exports';
import {
  selectRegion,
  updateRegion,
} from './src/store/features/region/regionSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Amplify.configure(awsConfig);

// const isLocalhost = Boolean(__DEV__);
const isLocalhost = Boolean(true);
const STRIPE_GLOBAL_PK = '';
const STRIPE_EU_PK = '';
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
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
    <StripeProvider
      publishableKey={region === 'eu' ? STRIPE_EU_PK : STRIPE_GLOBAL_PK}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <OnBoardingProvider>
          <ResourceContext>
            <Router />
          </ResourceContext>
        </OnBoardingProvider>
      </SafeAreaView>
    </StripeProvider>
  );
};

// "{\"publishableKey\":\"sk_test_51Ma0UlHlGffSuHzfXqLxMCx4WwZPl2InuHG7TFmdFPczonVev6xnsrQzyJ0QkiCNP04yyUMiJGGnt8XXWiWEmAG700oh8MwmIz\",\"paymentIntent\":\"pi_3MndNtHlGffSuHzf1YATmdoJ_secret_Xe15M5WwxY6EAty0vmDmQC4KD\",\"customer\":\"cus_NYkte1JUhYq7wy\",\"ephemeralKey\":\"ek_test_YWNjdF8xTWEwVWxIbEdmZlN1SHpmLFZzdjh0dXI3MDZLRExMbXdYenpQZjVqWk55cEdWUGY_00SMo7hrDC\",\"region\":\"eu\"}"
