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
import {
  DummyUser,
  DummyWomen,
  ICAboutApp,
  ICCallCenter,
  ICLanguage,
  ICMessage,
  ICMyOrders,
  ICNotification,
  ICPayment,
  ICSetting,
  ILBGProfile,
} from '../../assets';
import {Gap, Strip} from '../../components';
import {colors, fonts} from '../../utils';

const Profile = ({onPress, navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <ImageBackground source={ILBGProfile} style={styles.image}>
            <Image source={DummyWomen} style={styles.avatar} />
            <Text style={styles.name}>Alisa Hearth</Text>
            <TouchableOpacity>
              <Text style={styles.title}>Edit Profile</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Gap height={140} />
        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('Notification')}>
          <ICNotification style={styles.icon} />
          <Text style={styles.titleList}>Notification</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('Payments')}>
          <ICPayment style={styles.icon} />
          <Text style={styles.titleList}>Payments</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('Chat')}>
          <ICMessage style={styles.icon} />
          <Text style={styles.titleList}>Message</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('MyOrder')}>
          <ICMyOrders style={styles.icon} />
          <Text style={styles.titleList}>My Orders</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('SettingAccount')}>
          <ICSetting style={styles.icon} />
          <Text style={styles.titleList}>Setting Account</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('CallCenter')}>
          <ICCallCenter style={styles.icon} />
          <Text style={styles.titleList}>Call Center</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('Language')}>
          <ICLanguage style={styles.icon} />
          <Text style={styles.titleList}>Language</Text>
        </TouchableOpacity>

        <View style={styles.strip} />

        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate('About')}>
          <ICAboutApp style={styles.icon} />
          <Text style={styles.titleList}>About Apps</Text>
        </TouchableOpacity>

        <View style={styles.strip} />
        <Gap height={20} />
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
