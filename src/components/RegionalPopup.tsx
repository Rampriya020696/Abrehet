import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegionalPopup = ({visible, onClose}) => {
  const [region, setRegion] = useState('global');

  const handleConfirm = async () => {
    await AsyncStorage.setItem('SERVER', region);
    onClose();
  };
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '80%',
            height: 250,
            padding: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>Choose server</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={() => setRegion('global')}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  opacity: region === 'global' ? 1 : 0.3,
                }}
                source={require('../../assets/images/global.png')}
              />
              <Text>Global</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRegion('eu')}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  width: 60,
                  opacity: region === 'eu' ? 1 : 0.3,
                  height: 60,
                }}
                source={require('../../assets/images/eu.png')}
              />
              <Text>Europe</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleConfirm}
            style={{
              width: '80%',
              height: 30,
              backgroundColor: colors.facebook,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white'}}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RegionalPopup;
