/* eslint-disable prettier/prettier */
import {API, Auth, graphqlOperation} from 'aws-amplify';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {colors} from '../../utils';
import Accordion from 'react-native-collapsible/Accordion';
import CartItem from '../ShoopingCartScreen/CartItem';
import ActionBtn from '../../components/ActionBtn';
import moment from 'moment';
import products from '../../data/products';
import {addToCart, addToCartWithQty} from '../../store/features/cart/cartSlice';
import {useDispatch} from 'react-redux';
const Payments = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [order, setOrder] = useState<any>([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getMyOrders = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const userSUb = user?.attributes?.sub;

      console.log(userSUb);
      try {
        setLoading(true);
        const res = (await API.graphql(
          graphqlOperation(
            `
            query MyQuery {
              listOrders(limit: 1000,filter: {Status: {eq: "Delivered"}, userID: {eq: "${userSUb}"}}) {
              items {
                userID
                name
                Products
                Status
                address
                city
                createdAt
                id
                isSender
                phone
                senderAddress
                updatedAt
                usersOrdersId
              }
            }
          }          
          `,
            {},
          ),
        )) as any;
        console.log(res, 'res');
        setOrder(res?.data?.listOrders?.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMyOrders();
  }, []);
  console.log(order);

  return (
    <View style={styles.page}>
      <Header
        title="Purchases"
        onPress={() => navigation.goBack()}
        conatinerStyles={{backgroundColor: '#f7f7f7'}}
      />

      <FlatList
        data={order}
        ListEmptyComponent={() => {
          if (loading) {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size={'large'} color={'blue'} />
              </View>
            );
          }

          return (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{textAlign: 'center'}}>No Items!</Text>
            </View>
          );
        }}
        renderItem={({item}) => {
          const products = JSON.parse(item?.Products) || [];
          const date = item?.updatedAt;
          const formatedDate = moment(new Date(date)).format('MMM Do YYYY');

          return products.map((item, index) => (
            <View
              key={index}
              style={{
                padding: 20,
                borderBottomColor: 'rgba(0,0,0,0.04)',
                borderWidth: 0.5,
              }}>
              <TouchableOpacity
                onPress={() => {
                  globalThis.itemDetails = item.id;
                  // console.log('item pressed', globalThis);
                  navigation.navigate('ProductDetails', {rawItem: item});
                }}
                style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Image
                    source={{uri: item?.image}}
                    style={{width: 100, height: 100}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{flex: 1.3}}>
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', color: '#222'}}>
                    DELIVERED
                  </Text>
                  <Text style={{paddingRight: 10}} numberOfLines={1}>
                    {item.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{fontSize: 12, fontWeight: 'bold', color: '#222'}}>
                      {item.price}
                    </Text>
                    <Text>{formatedDate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // dispatch(addToCart({...item}));
                  delete item.qty;
                  dispatch(
                    addToCartWithQty({
                      product: item,
                      qty: 1,
                    }),
                  );
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#344feb',
                    marginTop: 10,
                  }}>
                  Re-Order
                </Text>
              </TouchableOpacity>
            </View>
          ));
        }}
      />
    </View>
  );
};

export default Payments;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
