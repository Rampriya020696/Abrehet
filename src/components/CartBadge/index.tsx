import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import IconBadge from 'react-native-icon-badge';
import {useNavigation} from '@react-navigation/native';
type CartBadge = {
  count: number;
};

const CartBadge = ({count}: CartBadge) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('cart')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <IconBadge
        MainElement={
          <View
            style={{
              width: 35,
              height: 35,
              margin: 6,
            }}>
            <Feather name={'shopping-cart'} size={35} color={'gray'} />
          </View>
        }
        BadgeElement={
          <Text style={{color: '#FFFFFF', fontSize: 10}}>{count}</Text>
        }
        IconBadgeStyle={{width: 23, height: 23, backgroundColor: '#FF00EE'}}
        Hidden={count == 0}
      />
    </TouchableOpacity>
  );
};
export default CartBadge;
