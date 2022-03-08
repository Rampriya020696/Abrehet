import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Auth} from 'aws-amplify';
import { UserAgent } from 'amazon-cognito-identity-js';

const ProfileScreen = () => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      console.log('attributes:', user.attributes);
      setInfo(user.attributes);
    });
  }, []);
  if (!info) {
    return (
      <View style={styles.page}>
        {/* Render Product Component */}
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <Text>Email: {info.email}</Text>
      <Text>Phone Number: {info.phone_number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    flex: 1,
  },
});

export default ProfileScreen;
