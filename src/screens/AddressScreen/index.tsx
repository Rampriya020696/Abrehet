/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {Picker} from '@react-native-picker/picker';
//import countryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';
import Header from '../../components/Header';
import {ICCart2} from '../../Assets';
import ActionBtn from '../../components/ActionBtn';
import {useStripe} from '@stripe/stripe-react-native';
import {api_send_mail, CHECKOUT_API_URL} from '../../api_service';
import {getUsers} from '../../graphql/queries';
//const countries = countryList.getData();
import CheckBox from '@react-native-community/checkbox';
import {createOrder} from '../../graphql/mutations';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {
  selectCartItems,
  selectCartTotal,
  handleOrdersComplete,
} from '../../store/features/cart/cartSlice';
import ButtonGradient from '../../components/ButtonGradient';
import {useRoute} from '@react-navigation/native';
import {current} from '@reduxjs/toolkit';

let keyboardDidShowListener;
let keyboardDidHideListener;
const AddressScreen = ({navigation}) => {
  const {cartItemData} = useRoute().params;

  const dispatch = useDispatch();
  console.log(cartItemData, 'ROUTE___>');
  console.log(useRoute().params, 'params___>');
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [toggleCheckBox, setToggleCheckBox] = useState('reciver');
  const [fullname, setFullname] = useState('');
  let ScrollViewRef = React.useRef('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [showModel, setShowModel] = useState(false);

  // sender Inputs
  const [sEmail, setSEmail] = useState('');
  const [sPhone, setSPhone] = useState('');
  const [sAddress, setSAddress] = useState('');
  const [sName, setSName] = useState('');
  const [sPinCode, setSPinCode] = useState('');
  const [sState, setSState] = useState('');
  const [sCity, setSCity] = useState('');
  const [senderObj, setSenderObj] = useState({});
  // sender Inputs

  const buildSenderObj = () => {
    const obj = {
      email: sEmail,
      phone: sPhone,
      address: sAddress,
      name: sName,
      pincode: sPinCode,
      state: sState,
      city: sCity,
    };
    console.log(obj);
    setSenderObj(obj);
    setShowModel(false);
  };

  const [loading, setLoading] = useState('');

  const getStripeIntent = async () => {
    const total = cartItemData.reduce((total, item) => {
      let cost = item?.content?.cost?.replaceAll(' ', '')?.slice(1);

      cost = Number(cost) * item.qty;
      let newTotal = total + cost;

      return newTotal;
    }, 0);
    const payload = {
      name: fullname,
      address: address,
      postal_code: postal_code || '160019',
      city: city,
      state: state,
      country: country,
      product: {
        amount: total,
        des: JSON.stringify(cartItemData),
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
        sendOrderMail();
        Alert.alert('Success', 'Your order is confirmed!');
      }

      console.log(res, 'kkk');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading('');
    }
  };

  const buildOrderObject = async () => {
    const isSender = Boolean(toggleCheckBox === 'sender');
    const order = {
      Status: 'Orderd',
      address: address,
      city: city,
      isSender,
      name: fullname,
      phone: phone,
      senderAddress: isSender ? JSON.stringify(senderObj) : '',
      userID: '123',
      // Products: JSON.stringify(globalThis.cart),
      // Products: JSON.stringify(cartItems ? cartItems : []),
      Products: JSON.stringify(cartItemData || []),
    };

    try {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log('----->', authUser);

      order.userID = authUser?.attributes?.sub;
      console.log(order);
      const res = await API.graphql(
        graphqlOperation(createOrder, {input: order}),
      );
      Alert.alert('Success', 'Order Created Successfully!');
      dispatch(
        handleOrdersComplete({
          orderData: cartItemData,
        }),
      );
      console.log('----->', res);
    } catch (error) {
      console.log('----->', error);
    }
  };

  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('Please fill in the full name');
      return;
    }

    if (!address) {
      Alert.alert('Please fill in the address');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in the Phone number');
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
    {
      /* if (!postal_code) {
      Alert.alert('Please fill in the postal code');
      return;
    } */
    }
    if (!country) {
      Alert.alert('Please fill in the country');
      return;
    }

    // console.warn('Success. Checkout');
    buildOrderObject();
    getStripeIntent();
  };

  const sendOrderMail = async () => {
    if (!email) return;
    try {
      const payload = {
        email: email,
        message: `${email} , Your order is placed successfully!`,
        subject: 'Order Placed Successfully!',
      };
      const res = await api_send_mail(payload);
      Alert.alert('Alert', res?.message);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
    }
  };

  React.useEffect(() => {
    const getAuthUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user?.attributes?.email) {
        setEmail(user.attributes.email);
      }
    };
    getAuthUser();
  }, []);

  const keyboardDidShow = (number = 110) => {
    console.log(ScrollViewRef, 'REF', number);
    ScrollViewRef?.current?.scrollTo({y: number, animated: true});
  };
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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 'padding' : ''}>
      <Header
        title="Address"
        icon={ICCart2}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.root} ref={ScrollViewRef}>
        <Modal isVisible={showModel}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                width: '100%',

                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  marginVertical: 9,
                }}>
                Sender Detail's
              </Text>

              {/* Name */}
              <View style={styles.row}>
                <Text style={styles.label}>Name </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sender Name"
                  value={sName}
                  onChangeText={setSName}
                />
              </View>

              {/* Email 
              <View style={styles.row}>
                <Text style={styles.label}>Email </Text>
                <TextInput
                  style={styles.input}
                  placeholder="email"
                  value={sEmail}
                  onChangeText={setSEmail}
                />
              </View> */}
              {/* Address */}
              <View style={styles.row}>
                <Text style={styles.label}>Full Address </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sender address"
                  value={sAddress}
                  onChangeText={setSAddress}
                />
              </View>
              {/* Name */}
              <View style={styles.row}>
                <Text style={styles.label}>Phone </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sender phone number"
                  value={sPhone}
                  onChangeText={setSPhone}
                />
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>City </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sender City"
                  value={sCity}
                  onChangeText={setSCity}
                />
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>State </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sender State"
                  value={sCity}
                  onChangeText={setSCity}
                />
              </View>

              {/* Pin Code */}
              <View style={styles.row}>
                <Text style={styles.label}>Zip code </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sender Zip code"
                  value={sPinCode}
                  onChangeText={setSPinCode}
                />
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={buildSenderObj}>
                  <Text style={styles.Submit}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowModel(false)}>
                  <Text style={styles.Submit}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.row}></View>

        <View style={styles.row}>
          <Text style={styles.label}>Receiver Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Sender Address
        {toggleCheckBox === 'sender' && (
          <View style={styles.row}>
            <Text style={styles.label}>Sender Address </Text>
            <TextInput
              style={styles.input}
              placeholder="Sender Address"
              value={senderAddress}
              onChangeText={setSenderAddress}
            />
          </View>
        )} */}
        {/* Reciver Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Street Address </Text>
          <TextInput
            style={styles.input}
            placeholder="If address is not available put street name or zone."
            value={address}
            onChangeText={setAddress}
          />
        </View>
        {/* Email 
        <View style={styles.row}>
          <Text style={styles.label}>Email </Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
        </View> */}
        {/* Phone */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Reciever`s phone number required"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>
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
          <Text style={styles.label}>State/Province/Zoba</Text>
          <TextInput
            onFocus={() => {
              keyboardDidShow(200);
            }}
            style={styles.input}
            placeholder="State/Province/Zoba"
            value={state}
            onChangeText={setState}
          />
        </View>
        {/* postal code 
        <View style={styles.row}>
          <Text style={styles.label}>Postal code </Text>
          <TextInput
            style={styles.input}
            placeholder="Postal Code"
            value={postal_code}
            onChangeText={setPostal_code}
          />
        </View> */}
        {/* country */}
        <View style={styles.row}>
          <Text style={styles.label}>Country </Text>
          <TextInput
            onFocus={() => {
              keyboardDidShow(200);
            }}
            style={styles.input}
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          />
        </View>

        {/* Checkbox */}
        <View style={styles.row}>
          <Text style={styles.label}>
            Check the box below to enter sender`s info.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox === 'sender'}
              onValueChange={newValue => {
                setShowModel(true);
                setToggleCheckBox('sender');
              }}
            />
            <Text>Sender </Text>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox === 'reciver'}
              onValueChange={newValue => setToggleCheckBox('reciver')}
            />
            <Text>reciver </Text>
          </View> */}
        </View>
        <ActionBtn
          title={loading || 'Checkout'}
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
