/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import {getMenuItems} from '../../components/MenuIcon/queries';
import {fonts} from '../../utils';
import {RecommendedBox} from '.';
const ProductListV2 = ({id, setShow}) => {
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
              isRecommended
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

        const dataPro = res.data?.listProducts.items?.map(item => {
          let temp = {
            ...item,
            content: JSON.parse(item.content),
            ...JSON.parse(item.content),
          };
          return temp;
        });
        setProduct(dataPro);
        if (dataPro.length) {
          setShow(true);
        }
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
        if (!item.isRecommended) return null;
        return (
          <View style={{width: 95}}>
            <RecommendedBox item={item} />
          </View>
        );
      }}
    />
  );
};

function groupAllRecommendedByCategory(arr) {
  if (!arr?.length) return null;
  const final = {};
  for (let item of arr) {
    if (item.isRecommended) {
      console.log(item);
      const category = item.category;
      if (final[category]) {
        // category already present -> add/push
        final[category].push(item);
      } else {
        // category is not there -> create
        final[category] = [item];
      }
    }
  }
  return final;
}
export default function ListFooterComponent({allProduct}) {
  const navigation = useNavigation<any>();
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [categoryGroupList, setCategoryGroupList] = React.useState(null);
  useEffect(() => {
    // const getMenuList = async () => {
    //   setLoading(true);
    //   try {
    //     const res = (await API.graphql(
    //       graphqlOperation(getMenuItems, {}),
    //     )) as any;
    //     setMenuList(res?.data?.listMenus?.items);
    //   } catch (error: any) {
    //     console.log(error?.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // getMenuList();

    const data = groupAllRecommendedByCategory(allProduct);
    setCategoryGroupList(data ? Object.entries(data) : null);
  }, [allProduct]);

  console.log(categoryGroupList, 'categoryGroupList');

  return (
    <View style={{flex: 1, marginVertical: 25}}>
      {/* {menuList?.map(item => {
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
      })} */}

      {categoryGroupList?.map(item => {
        const [title, innerItems] = item;
        if (!innerItems.length) return <></>;
        return (
          <View key={title}>
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
              {title}
            </Text>

            <FlatList
              horizontal
              data={innerItems}
              keyExtractor={(item, idx) => `${item?.id}-${idx}`}
              renderItem={({item}) => {
                return (
                  <View style={{width: 100, marginHorizontal: 5}}>
                    <RecommendedBox item={item} />
                  </View>
                );
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
