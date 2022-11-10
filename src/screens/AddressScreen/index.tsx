import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
//import countryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';
import Header from '../../components/Header';
import {ICCart2} from '../../Assets';
import ActionBtn from '../../components/ActionBtn';
import {useStripe} from '@stripe/stripe-react-native';
//const countries = countryList.getData();
const CHECKOUT_API_URL =
  'https://25u2tyctv3.execute-api.us-east-1.amazonaws.com/staging';
const AddressScreen = ({navigation}) => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  //const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [country, setCountry] = useState('');
  const [stripeData, setStripeData] = useState(null);

  const [loading, setLoading] = useState('');

  const getStripeIntent = async () => {
    const payload = {
      name: fullname,
      address: address,
      postal_code: postal_code,
      city: city,
      state: state,
      country: country,
      product: {
        amount: '1000',
        des: otherDetails,
      },
    };

    console.log({payload});
    setLoading('connecting to stipe...');
    fetch(CHECKOUT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(res => {
        const data = JSON.parse(res.data);
        console.log(data);
        setStripeData(data);
        initializePaymentSheet(data);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert('Alert', error.message);
      })
      .finally(() => {
        setLoading('');
      });
  };

  const initializePaymentSheet = async data => {
    setLoading('initialize payment...');
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
      openPaymentSheet(data.paymentIntent);
      if (!error) {
      } else {
        Alert.alert('alert', error?.message || 'something went wrong!');
      }
    } catch (error: any) {
      console.log(error?.message, 'initPaymentsheet');
    } finally {
      setLoading('');
    }
  };

  const openPaymentSheet = async paymentIntent => {
    setLoading('almost done!');
    try {
      //@ts-ignore
      const res = await presentPaymentSheet({clientSecret: paymentIntent});

      if (res?.error) {
        Alert.alert(`Error code: ${res?.error.code}`, res?.error.message);
      } else {
        Alert.alert('Success', 'Your order is confirmed!');
      }

      console.log(res, 'kkk');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading('');
    }
  };

  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('Please fill in the full name');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in the Phone number');
      return;
    }
    if (!address) {
      Alert.alert('Please fill in the address');
      return;
    }
    if (!city) {
      Alert.alert('Please fill in the city');
      return;
    }
    if (!state) {
      Alert.alert('Please fill in the state');
      return;
    }
    if (!postal_code) {
      Alert.alert('Please fill in the postal code');
      return;
    }
    if (!country) {
      Alert.alert('Please fill in the country');
      return;
    }

    console.warn('Success. Checkout');
    getStripeIntent();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <Header
        title="Address"
        icon={ICCart2}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.root}>
        <View style={styles.row}></View>

        {/*  <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(c => (
              <Picker.Item value={c.code} label={c.name} />
            ))}
          </Picker>
        Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last Name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Phone */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>
        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address </Text>
          <TextInput
            style={styles.input}
            placeholder="Full Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        {/* Address */}
        {/* <View style={styles.row}>
          <Text style={styles.label}>Other Details </Text>
          <TextInput
            style={styles.input}
            placeholder="Other Details"
            value={otherDetails}
            onChangeText={setOtherDetails}
          />
        </View> */}
        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City </Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        {/* State */}
        <View style={styles.row}>
          <Text style={styles.label}>State </Text>
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
        </View>
        {/* postal code */}
        <View style={styles.row}>
          <Text style={styles.label}>Postal code </Text>
          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            value={postal_code}
            onChangeText={setPostal_code}
          />
        </View>
        {/* country */}
        <View style={styles.row}>
          <Text style={styles.label}>Country </Text>
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          />
        </View>
        {/* <Button text="Checkout" onPress={onCheckout} /> */}
        <ActionBtn
          title="Checkout"
          onPress={onCheckout}
          containerStyle={{
            borderRadius: 5,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
