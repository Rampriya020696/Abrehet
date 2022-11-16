/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import ResourceContext from './src/context/ResourceContext';
import {StripeProvider} from '@stripe/stripe-react-native';
import OnBoardingProvider from './src/context/OnBoardingContext';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <StripeProvider publishableKey="pk_test_51M0L2VSFJgtn9Lb9roXIXnZekNjTrHMsY4fpXNp5h4QQDIWdkE4ZWRipXmKFd216tS213M9MGRT0vK07udT1FkKI00t1mHCVh3">
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

// export default withAuthenticator(App, {Signin});
// export default withAuthenticator(App);
export default App;
