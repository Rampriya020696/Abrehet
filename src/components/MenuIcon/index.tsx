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
        setMenuList(makeMenuData(res?.data?.listMenus?.items));
      } catch (error: any) {
        console.log(error?.message);
      } finally {
        setLoading(false);
      }
    };
    getMenuList();
  }, []);

  return (
    <View style={[styles.menu]}>
      {loading && (
        <ActivityIndicator size={'small'} color={colors.blueButton} />
      )}
      {/* --- */}
      {menuList?.map((group: MenuType[], index) => {
        return (
          <View key={`${index}`} style={{flexDirection: 'row'}}>
            {group?.map(item => {
              return (
                <View key={item?.id} style={[styles.menuColoumn]}>
                  <TouchableOpacity
                    style={[styles.menuIcon]}
                    onPress={() =>
                      navigation.navigate('CategoryPage', {
                        title: item?.name,
                        id: item?.id,
                        des: item?.des,
                      })
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
    // marginBottom: 10,
  },
  menuColoumn1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 30,
  },

  menuIcon: {
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: '600',
    color: 'black',
    marginTop: 4,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15000,
    resizeMode: 'contain',
  },
});
