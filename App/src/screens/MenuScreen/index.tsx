import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from '../../components/Button';
import {onChange} from 'react-native-reanimated';
import * as types from '../../API';
import {
  API,
  Auth,
  graphqlOperation,
  sectionFooterSecondaryContent,
} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {List} from 'react-native-paper';

const mapOrders = res2 => {
  return res2.data.listOrders.items.map(val => {
    console.log(val);
    let obj = {};
    obj.Status = val.Status;
    obj.date = val.createdAt.split('T')[0];
    let deconstruct = JSON.parse(val.Products);
    obj.total = deconstruct.total;
    obj.cart = [];
    deconstruct.cart.forEach(val => {
      obj.cart.push(
        'title: ' +
          val.item.title +
          ' | quantity: ' +
          val.quantity +
          ' | price: ' +
          val.item.id +
          '\n',
      );
    });
    return obj;
  });
};

const MenuScreen = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      //console.log("fetch_orders");
      let auth_user = await Auth.currentAuthenticatedUser();
      let result = await API.graphql({
        query: queries.listOrders,
        variables: {filter: {phone: {eq: auth_user.attributes.phone_number}}},
      });
      setOrders(mapOrders(result));
    };

    fetchOrders();
  },[]);
  return (
    <SafeAreaView>
      {orders.map(val => (
        <List.Section>
          <List.Accordion
            title={val.Status + " | Total: "+val.total}
            left={props => <Text>{val.date}</Text>}>
              {val.cart.map(o => <List.Item title={o} />)}
          </List.Accordion>
        </List.Section>
      ))}
    </SafeAreaView>
  );
};

export default MenuScreen;
