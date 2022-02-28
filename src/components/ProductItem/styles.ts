import { StyleSheet } from "react-native";


 const style = StyleSheet.create({
    root: {
        flexDirection: 'row', 
        margin: 10,
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: '#a1a1a1',
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
        fontSize: 22,
        fontWeight: 'bold'
        
 
    },
    price: {
     fontSize: 22,
     fontWeight: 'bold'
     
    },
    oldPrice: {
        fontSize: 22,
        fontWeight: 'bold'
        
       }
   });
 
   export default style;
 