import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICLogo, ILLogin} from '../../assets';
import {Button, ButtonGradient, Gap, Input} from '../../components';
import {colors, fonts} from '../../utils';

const Signin = ({navigation, type}) => {
  return (
    <ImageBackground source={ILLogin} style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page2}>
        <Gap height={30} />
        <View style={styles.wraperLogo}>
          <ICLogo />
          <Text style={styles.title}>Treva Shop</Text>
        </View>
        <View>
          <Button
            title="Login with Facebook"
            button="social-media"
            icon="facebook"
          />
          <Gap height={10} />
          <Button
            title="Login with Google"
            button="social-media"
            icon="google"
          />
          <Gap height={20} />
          <Text style={styles.or}>OR</Text>
          <Gap height={20} />
          <Input />
          <Gap height={20} />
          <View style={styles.wrapper}>
            <Text style={styles.signin}> Not Have Account ? </Text>
            <TouchableOpacity>
              <Text
                style={styles.signin}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ButtonGradient
          title="Sign In"
          onPress={() => navigation.navigate('MainApp')}
          style={styles.button}
        />
        <Gap height={30} />
      </ScrollView>
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 30,
  },
  page2: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  wraperLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  choose: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[800],
    marginLeft: 20,
    alignSelf: 'center',
    color: 'white',
  },
  or: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    alignSelf: 'center',
    color: 'white',
  },
  signin: {
    fontSize: 14,
    color: 'white',
    fontFamily: fonts.secondary[400],
  },
  chooseLoginFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.facebook,
    borderRadius: 30,
    width: 330,
    height: 50,
    elevation: 10,
  },
  imageFacebook: {
    width: 15,
    height: 30,
  },
  loginFacebook: {
    fontSize: 16,
    color: 'white',
    marginLeft: 30,
    fontFamily: fonts.secondary[400],
  },
  chooseLoginGoogle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 30,
    width: 330,
    height: 50,
    elevation: 10,
  },
  imageGoogle: {
    width: 25,
    height: 25,
  },
  loginGoogle: {
    fontSize: 16,
    color: colors.text.secondary,
    marginLeft: 20,
    fontFamily: fonts.secondary[400],
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
