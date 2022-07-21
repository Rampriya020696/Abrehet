import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {
  ICBook,
  ICCamera,
  ICComputer,
  ICEquitment,
  ICFashion,
  ICFood,
  ICGamming,
  ICHandphone,
  ICHealth,
  ICOtotmotif,
  ICSport,
  ICTiket,
} from '../IconImages/index';

const MenuIcon = ({onPress}) => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuColoumn}>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          {/* <ICCamera style={styles.image} /> */}
          <Text style={styles.title}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          {/* <ICFood style={styles.image} /> */}
          <Text style={styles.title}>Food</Text>
        </TouchableOpacity>
       
       
      </View>
      <View style={styles.menuColoumn}>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          {/* <ICFashion style={styles.image} /> */}
          <Text style={styles.title}>Fashion</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          {/* <ICComputer style={styles.image} /> */}
          <Text style={styles.title}>Computer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
          {/* <ICEquitment style={styles.image} /> */}
          <Text style={styles.title}>Equipment</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  menu: {
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
    marginBottom: 20,
  },
  menuIcon: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    marginTop: 4,
  },
});
