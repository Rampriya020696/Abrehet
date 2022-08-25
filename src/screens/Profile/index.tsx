import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Gap from '../../components/Gap';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors, fonts} from '../../utils';

const Profile = ({onPress, navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <ImageBackground
            source={require('../../Assets/Background-Profile.png')}
            style={styles.image}>
            {/* <Image source={DummyWomen} style={styles.avatar}/> */}

            <Image
              style={styles.avatar}
              source={require('../../Assets/womanface.jpg')}
            />

            <Text style={styles.name}>Alisa Hearth</Text>
            <TouchableOpacity>
              <Text style={styles.title}>Edit Profile</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Gap height={140} />

        <View>
          <View style={styles.strip} />

          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('Payments')}>
            {/* <ICPayment style={styles.icon} /> */}
            <Image
              style={{width: 25, height: 27}}
              source={require('../../Assets/Icon-Payments.png')}
            />
            <Text style={styles.titleList}>Payments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('OfferDeals')}>
            <MaterialIcons size={25} name="local-offer" color="#5c6cc1c9" />
            <Text style={styles.titleList}>Offers Deals</Text>
          </TouchableOpacity>

          <View style={styles.strip} />

          <View style={styles.strip} />

          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('MyOrder')}>
            {/* <ICMyOrders style={styles.icon} /> */}
            <Image
              style={{height: 18, width: 25}}
              source={require('../../Assets/Icon-My-Orders.png')}
            />
            <Text style={styles.titleList}>My Orders</Text>
          </TouchableOpacity>

          <View style={styles.strip} />

          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('SettingAccount')}>
            {/* <ICSetting style={styles.icon} /> */}
            <Image
              style={{height: 24, width: 25}}
              source={require('../../Assets/Icon-Setting-Account.png')}
            />
            <Text style={styles.titleList}>Setting Account</Text>
          </TouchableOpacity>

          <View style={styles.strip} />

          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('ContactUs')}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../Assets/Icon-Call-Center.png')}
            />
            {/* <ICCallCenter style={styles.icon} /> */}
            <Text style={styles.titleList}>Contact us</Text>
          </TouchableOpacity>

          <View style={styles.strip} />

          <View style={styles.strip} />

          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('About')}>
            {/* <ICAboutApp style={styles.icon} /> */}
            <Image
              style={{width: 20, height: 30, padding: 10, marginRight: 5}}
              source={require('../../Assets/Icon-About-Apps.png')}
            />
            <Text style={styles.titleList}>About App</Text>
          </TouchableOpacity>

          <View style={styles.strip} />
          <Gap height={20} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 200,
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    marginLeft: 100,
    marginRight: 50,
    opacity: 0.5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 110 / 2,
    borderColor: colors.white,
    borderWidth: 3,
    alignSelf: 'center',
    marginTop: 140,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.borderstrip,
    textAlign: 'center',
    marginBottom: 40,
  },
  list: {
    flexDirection: 'row',
    marginLeft: 50,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  titleList: {
    fontSize: 15,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginLeft: 32,
  },
});
