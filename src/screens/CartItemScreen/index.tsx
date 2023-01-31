import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, Text} from 'react-native';
import ActionBtn from '../../components/ActionBtn';
import Header from '../../components/Header';
import CartItem from '../ShoopingCartScreen/CartItem';

const CartItemScreen = () => {
  const {cartItemData} = useRoute().params;
  const navigation = useNavigation();
  console.log(cartItemData, 'cartItemData');

  return (
    <View style={{flex: 1}}>
      <Header title="Cart Items" onPress={navigation.goBack} />
      <FlatList
        data={cartItemData}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center', padding: 10}}>empty!</Text>
        )}
        renderItem={({item}) => {
          return <CartItem cartItem={item} />;
        }}
        ListFooterComponent={() => (
          <View style={{padding: 20}}>
            <Text>Total:</Text>
            <Text>
              {cartItemData?.reduce((total, item) => {
                console.log(item, 'op');
                let cost = item?.content?.cost?.replaceAll(' ', '')?.slice(1);
                cost = Number(cost) * item.qty;
                let newTotal = total + cost;
                return newTotal;
              }, 0)}
            </Text>
            <ActionBtn
              title="Proceed to checkout"
              onPress={() => {
                navigation.navigate('Address', {cartItemData: cartItemData});
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CartItemScreen;
