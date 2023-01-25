/* eslint-disable prettier/prettier */
import {API, Auth, graphqlOperation} from 'aws-amplify';
import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import Header from '../../components/Header';
import {colors} from '../../utils';

const orderFetchQuerty = (userID: string) => {
  return `query MyQuery {
    listOrders(filter: {userID: {eq: "${userID}"}}) {
      items {
        name
        id
        city
        createdAt
        isSender
        phone
        senderAddress
        updatedAt
        userID
        usersOrdersId
        Products
        Status
        address
      }
    }
  }
  `;
};

const Payments = ({navigation}) => {
  const [myOrders, setMyOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchMyOrders = async () => {
      let auth_user = await Auth.currentAuthenticatedUser();
      const userID = auth_user?.attributes?.sub || undefined;
      if (userID) {
        setLoading(true);
        try {
          const res = (await API.graphql(
            graphqlOperation(orderFetchQuerty(userID), {}),
          )) as any;
          setMyOrders(res?.data?.listOrders?.items);
        } catch (error) {
          console.log(error, 'fetchMyOrders');
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMyOrders();
  }, []);

  console.log(myOrders);

  return (
    <View style={styles.page}>
      <Header title="Purchases" onPress={() => navigation.goBack()} />

      <FlatList
        contentContainerStyle={{flex: 1, padding: 20, paddingBottom: 100}}
        data={myOrders}
        ListEmptyComponent={() => {
          if (loading) {
            return <ActivityIndicator />;
          } else {
            return <Text>No Order's</Text>;
          }
        }}
        renderItem={({item}) => {
          const netQty = JSON.parse(item.Products).length || 0;
          return (
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={() => navigation.navigate('OrdersScreens')}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>OrderId:</Text>
                <Text style={{fontSize: 10}}>{item.id}</Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Status: <Text style={{fontSize: 10}}>{item.Status}</Text>
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>address:</Text>
                <Text style={{fontSize: 10, fontWeight: 'normal'}}>
                  {item.address}
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  City: <Text style={{fontSize: 10}}>{item.city}</Text>
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Is Sender: <Text style={{fontSize: 10}}>{item.isSender}</Text>
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Name: <Text style={{fontSize: 10}}>{item.name}</Text>
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Date:{' '}
                  <Text style={{fontSize: 10}}>
                    {item.createdAt.slice(0, 10)}
                  </Text>
                </Text>
              </View>
              {netQty && (
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>
                    Net Qty: <Text style={{fontSize: 10}}>{netQty}</Text>
                  </Text>
                </View>
              )}
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
