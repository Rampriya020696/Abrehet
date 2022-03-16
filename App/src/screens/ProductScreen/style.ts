import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 1,
    margin: 1,
    backgroundColor: 'white',
    marginVertical: 1,
    lineHeight: 1,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 1,
    lineHeight: 20,
  },

  oldPrice: {
    fontSize: 7,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 10,
    lineHeight: 20,
  },
  description: {
    flexDirection: 'row',
    marginVertical: 9,
    lineHeight: 15,
    fontSize: 15,
    fontWeight: '800',
    color: '#0ea9f0',
    
  },
});

export default styles;
