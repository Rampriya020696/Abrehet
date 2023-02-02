/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
const SIZE = 75;
const RecommendedList = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({item}) => {
        const isRecommended = item?.isRecommended || null;
        if (!isRecommended) return null;
        return (
          <TouchableOpacity
            onPress={() => {
              globalThis.itemDetails = item.id;
              navigation.navigate('ProductDetails', {rawItem: item});
            }}
            style={{
              borderRadius: 10,
              borderColor: 'rgba(0,0,0,0.2)',
              borderWidth: 2,
              marginRight: 10,
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: SIZE, height: SIZE}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default RecommendedList;
