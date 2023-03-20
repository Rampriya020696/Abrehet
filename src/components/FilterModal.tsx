import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

const FilterModal = ({products, onSelect, visible, onClose}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <TouchableWithoutFeedback
        onPress={() => {
          onSelect('ALL');
          onClose();
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            style={{marginVertical: '30%', borderRadius: 15}}
            contentContainerStyle={{
              width: '80%',
              padding: 10,
              backgroundColor: 'white',
            }}
            data={[
              ...new Set(
                products?.map(item => {
                  return item?.country || item?.content?.country;
                }),
              ),
            ]}
            renderItem={({item, index}) => {
              if (index === 0) {
                return (
                  <>
                    <TouchableOpacity
                      style={{margin: 5, marginVertical: 10}}
                      onPress={() => {
                        onSelect('ALL');
                        onClose();
                      }}>
                      <Text style={{fontSize: 17}}>{'ALL'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{margin: 5, marginVertical: 10}}
                      onPress={() => {
                        onSelect(item);
                        onClose();
                      }}>
                      <Text style={{fontSize: 17}}>{item}</Text>
                    </TouchableOpacity>
                  </>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={{margin: 5, marginVertical: 10}}
                    onPress={() => {
                      onSelect(item);
                      onClose();
                    }}>
                    <Text style={{fontSize: 17}}>{item}</Text>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default FilterModal;
// content.country
// country
