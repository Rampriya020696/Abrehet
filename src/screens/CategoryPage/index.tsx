/* eslint-disable prettier/prettier */
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import {API, graphqlOperation} from 'aws-amplify';
import Recomended from '../../components/Recomended';
import {colors} from '../../utils';

const CategoryPage = () => {
  const {title, id} = useRoute<any>().params;
  const navigation = useNavigation<any>();
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    const getProductByMenuId = async () => {
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
        setProduct(res.data.listProducts.items);
      } catch (error) {
        console.log(error);
      }
    };

    getProductByMenuId();
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title={title} onPress={navigation.goBack} />
      <FlatList
        style={{
          flex: 1,
        }}
        data={product}
        numColumns={2}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({item}: any) => {
          return (
            <View key={`${item.id}`} style={styles.page}>
              <View style={styles.recomended}>
                <Recomended
                  image={{uri: item?.image}}
                  title={item?.title}
                  price={item?.price}
                  rating="4.8"
                  totalSale="932 Sale"
                  country={item.country}
                  category={item.category}
                  onPress={() => {
                    globalThis.itemDetails = item.id;
                    navigation.navigate('ProductDetails');
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  recomended: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
