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
//const countries = countryList.getData();

const AddressScreen = ({navigation}) => {
  //const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [city, setCity] = useState('');

  {
    /* Alerts */
  }
  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('Please fill in the full name');
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

    console.warn('Success. Checkout');
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
        <View style={styles.row}>
          <Text style={styles.label}>Other Details </Text>
          <TextInput
            style={styles.input}
            placeholder="Other Details"
            value={otherDetails}
            onChangeText={setOtherDetails}
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
