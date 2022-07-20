import { StyleSheet } from "react-native";


 const style = StyleSheet.create({
    root: {
        flexDirection: 'row', 
        margin: 2,
        borderWidth: 4,
        borderColor: '#ffffff',
        borderRadius: 100,
        backgroundColor: '#ffffff',
     },
    image: {
        width: 80,
        height: 80,
    },
    rightContainer: {
        padding: 20,
        width: '100%',
        flex: 10,
    },
 
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    price: {
     fontSize: 18,
     fontWeight: '900',
    },

    oldPrice: {
        fontSize: 12,
        fontWeight: 'bold'
        
       }
   });
 
   export default style;
 