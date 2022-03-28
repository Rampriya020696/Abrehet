import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import styles from './styles';
import Button from '../../components/Button';
import * as types from '../../API';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

const initUrl = 'https://staging.d3t4jm0uu1bb0n.amplifyapp.com/';

const countries = [
  'Asmara Eritrea',
  'Uganda Campala',
  'Ethiopia Addis Abeba',
  'Kenya Nairobi',
];

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0]);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [userID, setuserID] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState('product');
  const [url, seturl] = useState(
    'https://staging.d3t4jm0uu1bb0n.amplifyapp.com/payment-init',
  );
  useEffect(() => {
    initInfo();
  }, []);
  const initInfo = async () => {
    let products = Object.values(globalThis.cart);
    setTotal(
      products
        .reduce(
          (summedPrice, product) =>
            summedPrice +
            parseFloat(product.item.price.match(/[\d\.]/g).join('')) *
              product.quantity,
          0,
        )
        .toFixed(2),
    );

    let auth_user = await Auth.currentAuthenticatedUser();
    console.log('attributes:', auth_user.attributes);
    let getUser = (await API.graphql(
      graphqlOperation(queries.listUsers, {
        filter: {email: {eq: auth_user.attributes.email}},
      }),
    )) as {
      data: types.ListUsersQuery;
    };
    if (getUser.data.listUsers!.items.length === 0) {
      let createUser = (await API.graphql(
        graphqlOperation(mutations.createUsers, {
          input: {
            email: auth_user.attributes.email,
            phone: auth_user.attributes.phone_number,
          },
        }),
      )) as {
        data: types.CreateUsersMutation;
      };
    }
    getUser = (await API.graphql(
      graphqlOperation(queries.listUsers, {
        filter: {email: {eq: auth_user.attributes.email}},
      }),
    )) as {
      data: types.ListUsersQuery;
    };
    let user = getUser.data.listUsers!.items[0];
    console.log(user);
    if (user.phone) {
      setPhone(user.phone);
    }
    if (user.email) {
      setMail(user.email);
    }
    if (user.name) {
      setFullname(user.name);
    }
    if (user.address) {
      setAddress(user.address);
    }
    setuserID(user.id);
  };

  const createPaymentSession = async () => {
    // hardcode input values, make these dynamic with the values from the logged in user
    let input = {
      amount: total,
      name: fullname,
      email: mail,
    };

    await API.graphql(graphqlOperation(mutations.createPayment, {input: input}))
      .then(result => {
        console.log(result);
        const sessionID = JSON.parse(result.data.createPayment.body);
        seturl(initUrl + 'payment?session=' + sessionID.id);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  function handleOrder() {
    setScreen('payment');
  }

  function _onNavigationStateChange(webViewState) {
    console.log(webViewState.url);
    if (
      webViewState.url === initUrl + 'payment-init' ||
      webViewState.url === initUrl + 'payment-init/'
    ) {
      createPaymentSession();
    }

    if (
      webViewState.url === initUrl + 'payment-success' ||
      webViewState.url === initUrl + 'payment-success/'
    ) {
      setScreen('success');
    }

    if (
      webViewState.url === initUrl + 'payment-failure' ||
      webViewState.url === initUrl + 'payment-failure/'
    ) {
      setScreen('failure');
    }
  }

  const startPayment = () => {
    let newurl = url;
    if (newurl === '') {
      newurl = initUrl;
    }

    return (
      <View style={{flex: 1, marginTop: 50}}>
        <View style={{flex: 2}}>
          {loading && (
            <View>
              <ActivityIndicator
                animating={true}
                size="large"
                color="#de62bf"
              />
            </View>
          )}
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              height: 70,
              width: Dimensions.get('window').width,
              zIndex: 200,
            }}
          />
          <WebView
            mixedContentMode="never"
            source={{
              uri: url,
            }}
            onNavigationStateChange={_onNavigationStateChange}
          />
        </View>
      </View>
    );
  };

  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('Please fill in the full name');
      return;
    }
    if (!city) {
      Alert.alert('Please fill in the city');
      return;
    }
    handleOrder();

    console.warn('Success. Checkout');
  };
  switch (screen) {
    case 'payment':
      return startPayment();
    case 'success':
      let obj = {cart: Object.values(globalThis.cart), total: total};
      Auth.currentAuthenticatedUser().then(auth_user => {
        let new_obj = obj;
        new_obj.phone = phone;
        API.graphql(
          graphqlOperation(mutations.createOrder, {
            input: {
              userID: userID,
              phone: auth_user.attributes.phone_number,
              name: fullname,
              address: address,
              city: city,
              Status: 'Ordered',
              Products: JSON.stringify(new_obj),
            },
          }),
        );
      });
      console.log('success in payment');
      return (
        <View>
          <Text style={{fontSize: 25}}>Payments Succeeded</Text>
        </View>
      );
    case 'failure':
      return (
        <View>
          <Text style={{fontSize: 25}}>Payments failed</Text>
        </View>
      );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(c => (
              <Picker.Item value={c} label={c} />
            ))}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last Name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address </Text>
          <TextInput
            style={styles.input}
            placeholder="Full Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City </Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
