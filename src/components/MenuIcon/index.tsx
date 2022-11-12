/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getMenuItems} from './queries';
import {colors} from '../../utils';

type MenuType = {
  id: string;
  name: string;
  icon: string;
};

const makeMenuData = data => {
  const res: any = [];
  while (data.length) {
    res.push(data.splice(0, 3));
  }
  return res;
};

const MenuIcon = () => {
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
        console.log(res?.data?.listMenus?.items, 'menuList');
        setMenuList(makeMenuData(res?.data?.listMenus?.items));
      } catch (error: any) {
        console.log(error?.message);
      } finally {
        setLoading(false);
      }
    };
    getMenuList();
  }, []);

  console.log({menuList});

  return (
    <View style={styles.menu}>
      {loading && (
        <ActivityIndicator size={'small'} color={colors.blueButton} />
      )}
      {/* --- */}
      {menuList?.map((group: MenuType[], index) => {
        return (
          <View key={`${index}`} style={{flexDirection: 'row', marginTop: 5}}>
            {group?.map(item => {
              return (
                <View key={item?.id} style={styles.menuColoumn}>
                  <TouchableOpacity
                    style={[styles.menuIcon]}
                    onPress={() =>
                      navigation.navigate('StaticPage', {title: item?.name})
                    }>
                    {item?.icon ? (
                      <Image
                        style={styles.image}
                        source={{
                          uri: item?.icon,
                        }}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={require('../../Assets/BookIcon.png')}
                      />
                    )}
                    <Text style={styles.title}>{item?.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        );
      })}
      {/* --- */}
      {/* <View style={[styles.menuColoumn]}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() =>
            navigation.navigate('StaticPage', {title: 'Groceries'})
          }>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../Assets/FoodIcon.png')}
          />
          <Text style={styles.title}>Groceries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.navigate('StaticPage', {title: 'Fashion'})}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../../Assets/FashionIcon.png')}
          />
          <Text style={styles.title}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() =>
            navigation.navigate('StaticPage', {title: 'Furniture'})
          }>
          <Icon name="table-furniture" color={'brown'} size={27} />

          <Text style={styles.title}>Furniture</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.menuColoumn}>
          <TouchableOpacity
            style={[styles.menuIcon]}
            onPress={() =>
              navigation.navigate('StaticPage', {title: 'Electronics'})
            }>
            <Image
              style={styles.image}
              source={require('../../Assets/ComputerIcon.png')}
            />
            <Text style={styles.title}>Electronics</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity
            style={[styles.menuIcon]}
            onPress={() =>
              navigation.navigate('StaticPage', {title: 'Jewelry and Beauty'})
            }>
            <Image
              style={styles.image}
              source={require('../../Assets/jewellery.png')}
            />
            <Text style={styles.title}>Jewelry and Beauty</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity
            style={[styles.menuIcon]}
            onPress={() =>
              navigation.navigate('StaticPage', {title: 'Real Estate'})
            }>
            <Icon2 name="home" color={'red'} size={25} />
            <Text style={styles.title}>Real Estate</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={styles.menuColoumn}>
          <TouchableOpacity
            style={[styles.menuIcon]}
            onPress={() => navigation.navigate('StaticPage', {title: 'Books'})}>
            <Image
              style={styles.image}
              source={require('../../Assets/BookIcon.png')}
            />
            <Text style={styles.title}>Books</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity
            style={[styles.menuIcon]}
            onPress={() =>
              navigation.navigate('StaticPage', {title: 'Cars And Trucks'})
            }>
            <Image
              style={{height: 20, width: 30}}
              source={require('../../Assets/Icon-My-Orders.png')}
            />
            <Text style={styles.title}>Cars And Trucks</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity
            style={[styles.menuIcon]}
            onPress={() => navigation.navigate('FlashSale')}>
            <Icon3 name="burst-sale" color={'green'} size={22} />

            <Text style={styles.title}>Flash Sale</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu1: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuColoumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 0,
    marginBottom: 10,
  },
  menuColoumn1: {
    // flex: 1,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 30,
  },

  menuIcon: {
    height: 70,
    flexDirection: 'column',
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginTop: 3,
    marginBottom: 1,
  },
  image: {
    width: 60,
    height: 45,
    marginTop: 9,
    marginVertical: 0,
    marginBottom: 0,
  },
});
