import {View, Alert, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// minus plus

//  delete
const INACTIVE_BTN_SIZE = 30;

let WATING_TIME = 5000;
const CartActionShortcut = () => {
  const [isExpaned, setIsExpaned] = React.useState(false);
  const [count, setCount] = React.useState(0);
  let timer = React.useRef(null).current;
  const handleAddPress = () => {
    setCount(count + 1);
    setIsExpaned(true);
    // setOrUpdate();
  };
  const handleRemovePress = () => {
    if (count <= 1) {
      setCount(0);
      setIsExpaned(false);
    } else {
      setCount(count - 1);
    }
  };

  const test = () => {
    Alert.alert('ALERT', 'alert');
    //   setIsExpaned(false);
  };
  const setOrUpdate = () => {
    // if (timer) clearTimeout(timer);
    // timer =
    // setTimeout(test, 5000);
  };

  //   React.useEffect(() => {
  //     if (count > 0) setOrUpdate();
  //   }, [count]);
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        zIndex: 10,
        maxWidth: 150,
        alignItems: 'center',
        borderRadius: INACTIVE_BTN_SIZE,
        justifyContent: isExpaned ? 'space-between' : 'flex-end',
        backgroundColor: isExpaned ? '#4ab130' : 'transparent',
      }}>
      {isExpaned && (
        <TouchableOpacity
          onPress={handleRemovePress}
          style={{
            width: INACTIVE_BTN_SIZE,
            height: INACTIVE_BTN_SIZE,
            backgroundColor: '#439f2c',
            borderRadius: INACTIVE_BTN_SIZE,
            transform: [{scale: 1.01}],
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {count > 1 ? (
            <Entypo name="minus" color="#FFF" size={24} />
          ) : (
            <MaterialIcons name="delete" color="#FFF" size={18} />
          )}
        </TouchableOpacity>
      )}
      {isExpaned && (
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          {count}
        </Text>
      )}

      <TouchableOpacity
        onPress={handleAddPress}
        style={{
          width: INACTIVE_BTN_SIZE,
          height: INACTIVE_BTN_SIZE,
          backgroundColor: '#439f2c',
          transform: [{scale: 1.01}],
          borderRadius: INACTIVE_BTN_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo name="plus" color="#FFF" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CartActionShortcut;
