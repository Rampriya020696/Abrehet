/* eslint-disable prettier/prettier */
import {API, Auth, graphqlOperation} from 'aws-amplify';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {colors} from '../../utils';

const Payments = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [order, setOrder] = useState<any>([]);
  React.useEffect(() => {
    const getMyOrders = async () => {
      const user = await Auth.currentAuthenticatedUser();

      const userSUb = user?.attributes?.sub;
      try {
        setLoading(true);
        const res = (await API.graphql(
          graphqlOperation(
            `
            query MyQuery {
            listOrders(filter: {userID: {eq: "${userSUb}"}}) {
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
      <Header title="Purchases" onPress={() => navigation.goBack()} />

      <FlatList
        data={order}
        contentContainerStyle={{
          padding: 10,
        }}
        ListEmptyComponent={() => {
          if (loading) {
            return <ActivityIndicator />;
          }
          return <Text>No Orders!</Text>;
        }}
        renderItem={({item}) => {
          const Products = JSON.parse(item.Products);
          console.log(Products, 'Products');

          const total = Products.reduce((total, item) => {
            return (total += Number(item.price.replaceAll(' ', '').slice(1)));
          }, 0);
          // console.log(total, 'total');
          return (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                margin: 10,
                elevation: 5,
                borderRadius: 10,
                overflow: 'hidden',
              }}
              onPress={() => {
                navigation.navigate('OrdersScreens', {order: item});
              }}>
              <View style={{backgroundColor: 'rgba(0,0,0,0.1)', padding: 5}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  {item.id}
                </Text>
              </View>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>status: </Text>
                <Text>{item.Status}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  padding: 5,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>total: </Text>
                <Text>{total}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 5,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>net qty:</Text>
                <Text> {Products.length}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  padding: 5,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>date:</Text>
                <Text>{item.createdAt.slice(0, 10)}</Text>
              </View>

              <View style={{flexDirection: 'row', padding: 5}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>phone :</Text>
                <Text>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Payments;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
