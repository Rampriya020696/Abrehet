import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';

type NavigationProps = {
  navigate: (str: string) => void;
};
const MenuIcon = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPress = () => {
    navigation.navigate('FlashSale');
  };
  return (
    <View style={styles.menu}>
      <View style={[styles.menuColoumn]}>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../Assets/FoodIcon.png')}
          />
          <Text style={styles.title}>Groceries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../../Assets/FashionIcon.png')}
          />
          <Text style={styles.title}>Garments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          <Icon name="table-furniture" color={'brown'} size={27} />

          <Text style={styles.title}>Furniture</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.menuColoumn}>
          <TouchableOpacity style={[styles.menuIcon]} onPress={onPress}>
            <Image
              style={styles.image}
              source={require('../../Assets/ComputerIcon.png')}
            />
            <Text style={styles.title}>Electronics</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity style={[styles.menuIcon]} onPress={onPress}>
            <Image
              style={styles.image}
              source={require('../../Assets/jewellery.png')}
            />
            <Text style={styles.title}>Jewelry and Beauty</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity style={[styles.menuIcon]} onPress={onPress}>
            <Icon2 name="home" color={'red'} size={25} />
            <Text style={styles.title}>Real Estate</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={styles.menuColoumn}>
          <TouchableOpacity style={[styles.menuIcon]} onPress={onPress}>
            <Image
              style={styles.image}
              source={require('../../Assets/BookIcon.png')}
            />
            <Text style={styles.title}>Books</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity style={[styles.menuIcon]} onPress={onPress}>
            <Image
              style={{height: 20, width: 30}}
              source={require('../../Assets/Icon-My-Orders.png')}
            />
            <Text style={styles.title}>Cars And Trucks</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuColoumn}>
          <TouchableOpacity style={[styles.menuIcon]} onPress={onPress}>
            <Icon3 name="burst-sale" color={'green'} size={22} />

            <Text style={styles.title}>Flash Sale</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 20,
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
    marginTop: 50,
  },

  menuIcon: {
    height: 50,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    marginTop: 4,
  },
  image: {
    width: 25,
    height: 23,
  },
});
