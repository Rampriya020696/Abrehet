/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Recomended from '../../components/Recomended';
import {colors} from '../../utils';

const RenderPorductItem = ({item}) => {
  const navigation = useNavigation<any>();

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
            navigation.navigate('ProductDetails', {rawItem: item});
          }}
        />
      </View>
    </View>
  );
};
export default RenderPorductItem;
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
