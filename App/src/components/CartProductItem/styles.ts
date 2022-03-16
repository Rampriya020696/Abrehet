import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  root: {
    margin: 1,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 40,
    backgroundColor: '#fff',
    marginVertical: 4,
    padding: 1,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 140,
    height: 110,
  },
  rightContainer: {
    padding: 10,
    width: '100%',
    flex: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'normal',
    marginVertical: 1,
    marginLeft: 1,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    marginVertical: 2,
    marginLeft: 5,
  },
});

export default style;
