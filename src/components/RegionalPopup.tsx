/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {updateRegion} from '../store/features/region/regionSlice';

const RegionalPopup = ({visible, onClose}) => {
  const [region, setRegion] = useState('global');

  const dispatch = useDispatch();
  const handleConfirm = async () => {
    dispatch(updateRegion(region));
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
            borderRadius: 40,
          }}>
          <Text style={{
            fontSize: 20, 
            color: 'black',
            marginLeft: 30

            }}>Change Payment Zone</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
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
              <Text style={{fontSize: 15, color: 'black'}}>Global Users</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRegion('eu')}
              style={{
                justifyContent: 'center', 
                alignItems: 'center',
                
                }}>
              <Image
                style={{
                  width: 60,
                  opacity: region === 'eu' ? 1 : 0.3,
                  height: 60,
                }}
                source={require('../../assets/images/eu.png')}
              />
              <Text style={{fontSize: 15, color: 'black'}}>Europe</Text>
              <Text style={{fontSize: 13, color: 'black'}}>Klarna & AfterPay Users</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleConfirm}
            style={{
              width: '80%',
              height: 33,
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
