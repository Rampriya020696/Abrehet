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
  SafeAreaView,
  Keyboard,
  Button,
  KeyboardEventListener,
} from 'react-native';

import React, {useRef, useState} from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {Picker} from '@react-native-picker/picker';
//import countryList from 'country-list';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SheetManager} from 'react-native-actions-sheet';
import {stripeCountryList} from '../../utils/constant';
import {SHEETS} from '../../sheets/sheets';
import KlarnaPaymentView from 'react-native-klarna-inapp-sdk';
let keyboardDidShowListener;
let keyboardDidHideListener;

const ABC =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiODRiNDE4MjktYjZiNC01MTcwLThkYTMtOGY3OTRmOTU5OTExIiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcCIsImRlc2lnbiI6ImtsYXJuYSIsImxhbmd1YWdlIjoiZW4iLCJwdXJjaGFzZV9jb3VudHJ5IjoiR0IiLCJlbnZpcm9ubWVudCI6InBsYXlncm91bmQiLCJtZXJjaGFudF9uYW1lIjoiWW91ciBidXNpbmVzcyBuYW1lIiwic2Vzc2lvbl90eXBlIjoiUEFZTUVOVFMiLCJjbGllbnRfZXZlbnRfYmFzZV91cmwiOiJodHRwczovL2V1LnBsYXlncm91bmQua2xhcm5hZXZ0LmNvbSIsInNjaGVtZSI6dHJ1ZSwiZXhwZXJpbWVudHMiOlt7Im5hbWUiOiJrcGMtUFNFTC0zMDk5IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtcG9wdXAtcmV0cmlhYmxlIiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtc3RhdGljLXdpZGdldCIsInZhcmlhdGUiOiJpbmRleCIsInBhcmFtZXRlcnMiOnsiZHluYW1pYyI6InRydWUifX0seyJuYW1lIjoia3AtY2xpZW50LXV0b3BpYS1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC1vbmUtcHVyY2hhc2UtZmxvdyIsInZhcmlhdGUiOiJ2YXJpYXRlLTEifSx7Im5hbWUiOiJpbi1hcHAtc2RrLW5ldy1pbnRlcm5hbC1icm93c2VyIiwicGFyYW1ldGVycyI6eyJ2YXJpYXRlX2lkIjoibmV3LWludGVybmFsLWJyb3dzZXItZW5hYmxlIn19LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtc2RrLWZsb3ciLCJ2YXJpYXRlIjoidmFyaWF0ZS0xIn0seyJuYW1lIjoia3AtY2xpZW50LXV0b3BpYS13ZWJ2aWV3LWZsb3ciLCJ2YXJpYXRlIjoidmFyaWF0ZS0xIn0seyJuYW1lIjoiaW4tYXBwLXNkay1jYXJkLXNjYW5uaW5nIiwicGFyYW1ldGVycyI6eyJ2YXJpYXRlX2lkIjoiY2FyZC1zY2FubmluZy1lbmFibGUifX1dLCJyZWdpb24iOiJldSIsIm9yZGVyX2Ftb3VudCI6MjAwMDAsIm9mZmVyaW5nX29wdHMiOjAsIm9vIjoiN3MifQ.LZYS5YN-dSLkgqOIoeDF_B9YR4YriodyWdFtEJRJmu59eTziMtx31V8DnAjLOTufLaztQrerZ8IYXy66sU-owK022LdHV6KbgVWB8wb7o8y-mLH6YSTjtA73z-Phqq4w05O0D5ruE-tJLSuAxlSQ4c3nUrF0_4kBGOyGH3rOs27rBjPHyeWysF1NrNXFCZBOyr7NZSfIgXx22KHjrcS8CMFCMNfURMP3fpZ_wPI4hVSgFLjBg1_-3gcih2LWkaoxkfnrQ1wFVdM8g_dqNfwRWqbqnKjfe4rXZ_tyHe7WgxzIPUaQZWa6o7pfHl8_EYascgYi1wjsbAXSrJeywf5S3A';
const AddressScreen = ({navigation}) => {
  const {cartItemData} = useRoute().params;
  const [klranaPaymentViewLoaded, setKlranaPaymentViewLoaded] = useState(false);
  const KlarnaRef = useRef(null);
  const dispatch = useDispatch();
  console.log(cartItemData, 'ROUTE___>');
  console.log(useRoute().params, 'params___>');
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [toggleCheckBox, setToggleCheckBox] = useState('reciver');
  const [fullname, setFullname] = useState('');
  let ScrollViewRef = React.useRef(null);
  let ModalScrollViewRef = React.useRef(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [country, setCountry] = useState('US');
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
      // let cost = item?.content?.cost?.replaceAll(' ', '')?.slice(1);
      let price = item?.price?.replaceAll(' ', '')?.slice(1);
      price = Number(price) * item.qty;
      let newTotal = total + price;
      return newTotal;
    }, 0);

    const region = await AsyncStorage.getItem('SERVER');
    const payload = {
      region,
      event: {
        name: fullname,
        address: address,
        postal_code: postal_code || '160019',
        city: city,
        state: state,
        country: country,
        product: {
          amount: Math.round(Number(total) * 100),
          des: 'some description',
        },
      },
    };

    console.log({payload});
    const body = JSON.stringify(payload);
    console.log(body, 'JSON.stringify');
    setLoading('connecting to stipe...');
    fetch(CHECKOUT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(res => res.json())
      .then(res => {
        console.log(res, '123');
        const data = JSON.parse(res.data);
        console.log(data);
        // setStripeData(data);
        initializePaymentSheet(data);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert('Alert:', error.message);
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
      country,
      state,
      name: fullname,
      phone: phone,
      senderAddress: isSender ? JSON.stringify(senderObj) : '',
      userID: '123',
      // Products: JSON.stringify(globalThis.cart),
      // Products: JSON.stringify(cartItems ? cartItems : []),
      Products: JSON.stringify(cartItemData || []),
    };

    console.log(order, 'buildOrderObject');

    try {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log('----->', authUser);

      order.userID = authUser?.attributes?.sub;
      console.log('--order--->', order);
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
      console.log('---err-->', error);
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

  const handleModalScroll = () => {
    setTimeout(() => {
      ModalScrollViewRef?.current?.scrollTo({y: 300, animated: true});
    }, 200);
  };

  const keyboardDidShow = () => {
    ScrollViewRef?.current?.scrollTo({y: 110, animated: true});
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

  React.useEffect(() => {
    // KlarnaRef?.current?.initialize('my_session_token', 'my_apps_return_url');
    KlarnaRef?.current?.initialize(ABC, 'abrehet://');
  }, []);

  const onInitialized = () => {
    console.log('A');
    KlarnaRef?.current?.load();
  };

  const onLoaded = () => {
    console.log('B');
    setKlranaPaymentViewLoaded(true);
  };
  const buyButtonPressed = () => {
    console.log('c');
    KlarnaRef?.current?.authorize();
  };

  const onAuthorized = event => {
    event.persist();
    console.log('D');
    console.log(event, 'onAuthorized');
    let params = event.nativeEvent;
    if (params.authorized) {
      console.log(params.authorized, 'params.authorized');
      // submitAuthToken(params.authToken)
    }
  };

  const onError = ({...res}) => console.log('onError', res);
  const onFinalized = ({...res}) => {
    console.log('onFinalized', res);
    Alert.alert('A');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 'padding' : ''}
      >
        <Header
          title="Address"
          icon={ICCart2}
          onPress={() => navigation.goBack()}
        />
        
        <Button
          title="pay"
          onPress={buyButtonPressed}
          disabled={!klranaPaymentViewLoaded}
        />
        <ScrollView style={styles.root} ref={ScrollViewRef}>
          {/* ------ -- - - -- ----------- */}
          <Modal isVisible={showModel}>
            <View
              style={{
                marginTop: 100,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ScrollView
                ref={ModalScrollViewRef}
                style={{
                  flex: 1,
                  width: '100%',
                }}
                contentContainerStyle={
                  Platform.OS === 'ios'
                    ? {
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 350,
                      }
                    : {
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                }>
                <View
                  style={{
                    flex: 1,
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
                      onFocus={handleModalScroll}
                      style={styles.input}
                      placeholder="Sender City"
                      value={sCity}
                      onChangeText={setSCity}
                    />
                  </View>

                  <View style={styles.row1}>
                    <Text style={styles.label}>State </Text>
                    <TextInput
                      onFocus={handleModalScroll}
                      style={styles.input}
                      placeholder="Sender State"
                      value={state}
                      onChangeText={setState}
                    />
                  </View>

                  {/* Pin Code */}
                  <View style={styles.row}>
                    <Text style={styles.label}>Zip code </Text>
                    <TextInput
                      onFocus={handleModalScroll}
                      style={styles.input}
                      placeholder="Sender Zip code"
                      value={sPinCode}
                      onChangeText={setSPinCode}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity onPress={buildSenderObj}>
                      <Text style={styles.Submit}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModel(false)}>
                      <Text style={styles.Submit}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </Modal>
          
          <KlarnaPaymentView
            onFinalized={onFinalized}
            category={'pay_later'}
            ref={KlarnaRef}
            onInitialized={onInitialized}
            onLoaded={onLoaded}
            onAuthorized={onAuthorized}
            onError={onError}
          />

          {/* ------ -- - - -- ----------- */}
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

            <TouchableOpacity
              style={[styles.input, {justifyContent: 'center'}]}
              onPress={() => {
                keyboardDidShow(200);
                SheetManager.show(SHEETS.STRIPE_COUNTRY_SHEET, {
                  payload: {
                    onSelect: val => setCountry(val),
                  },
                });
              }}>
              <Text> {country}</Text>
            </TouchableOpacity>

            {/* <TextInput
              onFocus={() => {
                keyboardDidShow(200);
              }}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            /> */}
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
    </SafeAreaView>
  );
};

export default AddressScreen;
