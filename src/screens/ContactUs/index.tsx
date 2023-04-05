/* eslint-disable prettier/prettier */
import {Auth} from 'aws-amplify';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {api_send_mail, CUSTOMER_SUPPORT_EMAIL_ID} from '../../api_service';
import {ICChatNull} from '../../Assets';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import {colors, fonts} from '../../utils';

const ContactUs = ({navigation}) => {
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const sendOrderMail = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const payload = {
        email: CUSTOMER_SUPPORT_EMAIL_ID,
        message: `
        customer's email : ${email} , 
        customer's message : "${message}" , 
        `,
        subject: 'Customer Support',
      };
      const res = await api_send_mail(payload);
      setMessage('');
      setEmail('');
      Alert.alert('Alert', res?.message);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
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

  return (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}
    >
    <SafeAreaView  style={{flex:1, backgroundColor: 'white'}}>
    

      <Header title="Contact Us" onPress={navigation.goBack} />
      <View style={styles.page}>
        <View style={{}}>
          <Image source={ICChatNull} style={styles.image} />
          <Text style={styles.title}>We're Happy to Help You!</Text>
          <Text style={styles.text}>
            If you have any questions please reach out to us. {'\n'}
          </Text>

          <View style={{alignItems: 'center', marginTop: 12}}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              placeholder="Enter Your Email Address"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 12}}>
            <Text style={styles.inputLabel}>Message</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="Enter your name,
              phone number and questions you need to ask us and we will respond in a timely manner."
              value={message}
              multiline={true}
              onChangeText={setMessage}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={sendOrderMail} 
          >
            <Text style={styles.textButton}>
              {loading ? 'Sending Email...' : 'Send Mail'}
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
      </View>

    </SafeAreaView>
    </TouchableWithoutFeedback>

  );
};

export default ContactUs;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 0,
    height: 0,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.secondary[700],
    color: colors.text.secondary,
    opacity: 0.7,
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#3A2E6E',
    height: 42,
    width: '100%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textButton: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.white,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginLeft: '12%',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '78%',
    padding: 10,
    marginTop: 8,
  },
});
