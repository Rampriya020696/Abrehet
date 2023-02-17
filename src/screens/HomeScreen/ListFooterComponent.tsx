import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import {getMenuItems} from '../../components/MenuIcon/queries';
import {fonts} from '../../utils';
import {RecommendedBox} from '.';
const ProductListV2 = ({id}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('ppppppp', product);

  React.useEffect(() => {
    const getProductByMenuId = async () => {
      setLoading(true);
      try {
        const res = await API.graphql(
          graphqlOperation(
            `
        query MyQuery {
          listProducts(filter: {categories: {contains: "${id}"}}) {
            items {
              title
              category
              content
              country
              createdAt
              id
              updatedAt
            }
          }
        }
        
        `,
            {},
          ),
        );
        setProduct(
          res.data?.listProducts.items?.map(item => {
            let temp = {
              ...item,
              content: JSON.parse(item.content),
              ...JSON.parse(item.content),
            };
            return temp;
          }),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProductByMenuId();
  }, []);

  return (
    <FlatList
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 10,
      }}
      ListEmptyComponent={() => {
        if (loading) {
          return (
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
              }}>
              <ActivityIndicator size={'small'} color={'blue'} />
            </View>
          );
        }

        return (
          <Text
            style={{
              flex: 1,
              textAlign: 'left',
            }}>
            no items!
          </Text>
        );
      }}
      data={product}
      renderItem={({item}) => {
        return (
          <View style={{width: 95}}>
            <RecommendedBox item={item} />
          </View>
        );
      }}
    />
  );
};
export default function ListFooterComponent() {
  const navigation = useNavigation<any>();
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMenuList = async () => {
      setLoading(true);
      try {
        const res = (await API.graphql(
          graphqlOperation(getMenuItems, {}),
        )) as any;
        setMenuList(res?.data?.listMenus?.items);
      } catch (error: any) {
        console.log(error?.message);
      } finally {
        setLoading(false);
      }
    };
    getMenuList();
  }, []);

  console.log(menuList, 'menulist');

  return (
    <View style={{flex: 1, marginVertical: 25}}>
      {menuList?.map(item => {
        return (
          <View key={item?.id}>
            <Text
              style={{
                fontSize: 22,
                fontFamily: fonts.primary[900],
                fontWeight: '500',
                color: 'black',
                fontStyle: 'normal',
                marginLeft: 10,
                marginVertical: 38,
                marginBottom: 10,
              }}>
              {item.name}
            </Text>
            <ProductListV2 id={item?.id} />
          </View>
        );
      })}
    </View>
  );
}
