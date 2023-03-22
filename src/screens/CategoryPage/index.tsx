/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import {API, graphqlOperation} from 'aws-amplify';
import Recomended from '../../components/Recomended';
import {colors} from '../../utils';
import ProductModal from '../../components/ProducModal';

const CategoryPage = () => {
  const {title, id, des} = useRoute<any>().params;
  const navigation = useNavigation<any>();
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const getProductByMenuId = async () => {
      setLoading(true);
      try {
        const res = await API.graphql(
          graphqlOperation(
            `
        query MyQuery {
          listProducts(limit: 10000,filter: {categories: {contains: "${id}"}}) {
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
          res.data.listProducts.items?.map(item => {
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
  }, [navigation]);

  console.log(product, 'productCat');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Header title={title} onPress={navigation.goBack} />
      <FlatList
        style={{
          flex: 1,
          padding: 1,
        }}
        ListHeaderComponent={() => {
          return (
            <View>
              {des && (
                <Text style={{padding: 10}}>
                  <Text
                    style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
                    Descriptionzz:{' '}
                  </Text>
                  {des}
                </Text>
              )}
            </View>
          );
        }}
        //List of empty catagories

        ListEmptyComponent={() => {
          return loading ? (
            <View
              style={{
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator color={colors.primary} size="large" />
            </View>
          ) : (
            <Text style={{textAlign: 'center'}}> no products</Text>
          );
        }}
        data={product}
        numColumns={2}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({item}: any) => {
          return (
            <View key={`${item.id}`} style={styles.page}>
              <View style={styles.recomended}>
                <Recomended
                  raw={item}
                  image={{uri: item?.image}}
                  title={item?.title}
                  price={item?.price || item?.content?.cost}
                  country={item.country}
                  category={item.category}
                  des={item.description || item.content.description}
                  onPress={() => {
                    globalThis.itemDetails = item.id;
                    navigation.navigate('ProductDetails', {rawItem: item});
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
    marginVertical: 10,
    marginBottom: -50,
    marginTop: 30,
  },
  recomended: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: -27,
  },
});
