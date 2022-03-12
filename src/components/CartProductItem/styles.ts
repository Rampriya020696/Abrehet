import { StyleSheet } from "react-native";


 const style = StyleSheet.create({
    root: {
        margin: 1,
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 40,
        backgroundColor: '#fff',
        marginVertical: 6,
        padding:14,
     },
     row: {
        flexDirection: 'row', 
     },
    image: {
        width: 80,
        height: 80,
    },
    rightContainer: {
        padding: 20,
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
    },

   });
 
   export default style;
 