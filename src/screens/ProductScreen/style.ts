import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 2,
    margin: 10,
    backgroundColor: 'white',
    marginVertical: 1,
    lineHeight: 1,

  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 1,
    lineHeight: 19,
    
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
    marginVertical: 6,
    lineHeight: 20,
    fontSize: 10,
    fontWeight: '600'
    
  },
 
});

export default styles;
