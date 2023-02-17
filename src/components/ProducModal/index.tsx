import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

// const product = {
//   id: 'Eri383',
//   country: 'Uganda Kampala',
//   content: {
//     country: 'Uganda Kampala',
//     image: 'https://appimagesabrehet.s3.amazonaws.com/Mountain+Dew+2L.jpeg',
//     images: 'https://appimagesabrehet.s3.amazonaws.com/Mountain+Dew+2L.jpeg',
//     cost: '$0.89',
//     price: '$2.99',
//     description: 'MOUNTAIN DEW  2LTR',
//     title: 'MOUNTAIN DEW',
//   },
//   category: 'Groceries Uganda',
//   title: 'MOUNTAIN DEW',
//   updatedAt: '2022-05-30T20:14:23.315Z',
//   cost: '$0.89',
//   description: 'MOUNTAIN DEW  2LTR',
//   image: 'https://appimagesabrehet.s3.amazonaws.com/Mountain+Dew+2L.jpeg',
//   images: 'https://appimagesabrehet.s3.amazonaws.com/Mountain+Dew+2L.jpeg',
//   price: '$2.99',
// };

const ProductModal = ({
  title,
  price,
  image,
  country,
  des,
  onClose,
  visible,
}) => {
  const handleClose = () => {
    onClose();
    console.log('handleClose');
  };

  return (
    <Modal transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
            alignItems: 'center',
          }}>
          <ScrollView
            style={{
              width: '80%',
              marginVertical: '30%',
            }}
            contentContainerStyle={{
              flex: 1,
              backgroundColor: '#f9f8f8',
              borderRadius: 10,
              padding: 20,
            }}>
            <Image
              source={{uri: image}}
              style={{
                width: 200,
                alignSelf: 'center',
                height: 200,
                marginBottom: 10,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>
              {title}
            </Text>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
                {price}
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 13, color: '#000'}}>country :</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                {country}
              </Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{fontSize: 13, color: '#000'}}>Description :</Text>
              <Text style={{fontSize: 18, color: '#000'}}>{des}</Text>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProductModal;
