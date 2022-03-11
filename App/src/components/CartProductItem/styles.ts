import { StyleSheet } from "react-native";


 const style = StyleSheet.create({
    root: {
        margin: 10,
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginVertical: 5,
        padding:10,
     },
     row: {
        flexDirection: 'row', 
     },
    image: {
        width: 150,
        height: 150,
    },
    rightContainer: {
        padding: 7,
        width: '100%',
        flex: 3,
    },
 
 
    title: {
        fontSize: 25,
        fontWeight: 'normal',
        
        
 
    },
    price: {
     fontSize: 27,
     fontWeight: 'bold'
     
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
        
       },
    quantityContainer: {
        marginVertical: 3,
        marginLeft: 5,
        flexDirection: 'row',
    justifyContent: 'space-between',
    },

   });
 
   export default style;
 