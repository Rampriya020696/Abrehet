import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

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
import {
  CardField,
  InitPaymentSheetResult,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import {SetupParams} from '@stripe/stripe-react-native/lib/typescript/src/types/PaymentSheet';
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
        <ResourceContext>
          <Router />
          {/* <StripeTest /> */}
        </ResourceContext>
      </SafeAreaView>
    </StripeProvider>
  );
};

// export default withAuthenticator(App, {Signin});
// export default withAuthenticator(App);
export default App;

const test = {
  publishableKey:
    'sk_test_51M0L2VSFJgtn9Lb9Yi2MWeE0t4IHAnC9QbsBRWmBAnGvYw9DTiJWbHtoQEivXt8Jk0kznog2MnZUIK4SIxsIO3wo00QuHVLzl2',
  paymentIntent: 'pi_3M26mNSFJgtn9Lb90MZcfzLZ_secret_8oFuFAH2lCMgveFwrrxg6PZ9Y',
  customer: 'cus_Mle4GkdN6axCTV',
  ephemeralKey:
    'ek_test_YWNjdF8xTTBMMlZTRkpndG45TGI5LDh3cnZZREtuOWp3ME54dnU5VG83bTlySnhCdk1na2k_004A1wHDdG',
};

const StripeTest: React.FC = () => {
  const {confirmPayment, initPaymentSheet, presentPaymentSheet} = useStripe();
  const [key, setKey] = useState(test.paymentIntent);

  const initializePaymentSheet = async () => {
    const data = {
      paymentIntent: test.paymentIntent,
      ephemeralKey: test.ephemeralKey,
      customer: test.customer,
    };

    try {
      //@ts-ignore
      const {paymentOption, error} = await initPaymentSheet({
        customerId: data.customer,
        customerEphemeralKeySecret: data.ephemeralKey,
        paymentIntentClientSecret: data.paymentIntent,
        allowsDelayedPaymentMethods: true,
        customFlow: false,
        merchantDisplayName: 'Example',
        setupIntentClientSecret: data.paymentIntent,
      });
      console.log(paymentOption, error, 'ppp');
    } catch (error: any) {
      console.log(error?.message, 'initPaymentsheet');
    }
  };

  const openPaymentSheet = async () => {
    try {
      //@ts-ignore
      const res = await presentPaymentSheet({clientSecret: test.paymentIntent});

      if (res?.error) {
        Alert.alert(`Error code: ${res?.error.code}`, res?.error.message);
      } else {
        Alert.alert('Success', 'Your order is confirmed!');
      }

      console.log(res, 'kkk');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initializePaymentSheet();
  }, []);
  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        style={{
          height: 50,
          width: '100%',
        }}
      />
      {/* <Button onPress={handlePayment} title="Pay" /> */}
      <Button onPress={openPaymentSheet} title="sheet" />
    </View>
  );
};
