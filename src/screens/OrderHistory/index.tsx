/* eslint-disable react-native/no-inline-styles */
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

import Accordion from 'react-native-collapsible/Accordion';
import CartItem from '../ShoopingCartScreen/CartItem';
import ActionBtn from '../../components/ActionBtn';
const OrderHistory = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [activeSections, setActiveSections] = useState([0]);
  const [order, setOrder] = useState<any>([]);
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
            listOrders(limit: 1000, filter: {userID: {eq: "${userSUb}"}}) {
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
        title="My Orders"
        onPress={() => navigation.goBack()}
        conatinerStyles={{backgroundColor: '#f7f7f7'}}
      />

      {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      )}
      <ScrollView style={{paddingHorizontal: 25}}>
        {order.length ? (
          <Accordion
            underlayColor="white"
            sections={order}
            activeSections={activeSections}
            renderHeader={(section, _, isActive) => {
              const products = JSON.parse(section.Products);
              const total = products?.reduce((total, item) => {
                let cost = item?.content?.cost?.replaceAll(' ', '')?.slice(1);
                cost = Number(cost) * item.qty;
                let newTotal = total + cost;
                // console.log(`total ${total} + ${cost} = ${newTotal}`);
                return newTotal;
              }, 0);
              if (!products.length) return <></>;
              return (
                <View
                  style={{
                    backgroundColor: isActive ? '#d2d2d2' : 'white',
                    elevation: 1,
                    borderRadius: 5,
                    padding: 15,
                    marginVertical: 10,
                  }}>
                  {/* <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '900',
                    }}>
                    {section.id}
                  </Text> */}
                  <Text
                    style={{
                      fontSize: 19,
                      color: 'black',
                      
                    }}>
                    Status: {section.Status}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontWeight: 'bold'
                    }}>
                    {section.createdAt.slice(0, 10)}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingVertical: 9,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: 'black', fontSize: 20}}>Total: </Text>
                      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>${total}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: 'black', fontSize: 16}}>Net Qty: </Text>
                      <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>{products.length}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
            renderContent={section => {
              const products = JSON.parse(section.Products);
              return (
                <View style={{paddingBottom: 20}}>
                  <View style={{alignItems: 'center'}}>
                    <ActionBtn
                      title={'track order!'}
                      containerStyle={{width: '90%', borderRadius: 5}}
                      onPress={() => {
                        navigation.navigate('OrdersScreens', {order: section});
                      }}
                    />
                  </View>
                  {products?.map(item => (
                    <CartItem cartItem={item} disableQtyBtn />
                  ))}
                </View>
              );
            }}
            onChange={s => {
              setActiveSections(s);
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <Image
              source={require('../../Assets/emptybox.png')}
              style={{width: 300, height: 300, opacity: 0.6}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>
              There are not order yet!
            </Text>
            <TouchableOpacity
              style={{
                borderColor: '#222',
                borderRadius: 5,
                borderWidth: 1,
                width: 120,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text style={{fontSize: 16, letterSpacing: 1, color: '#000'}}>
                SHOP NOW
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
