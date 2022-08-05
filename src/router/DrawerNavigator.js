// // import React, { useContext, useEffect } from 'react';

// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // // import DrawerData from "../Constants/DrawerData"
// // import HomeScreen from '../screens/HomeScreen';
// // import MenuScreen from '../screens/MenuScreen';
// // import ShopingCartStack from './ShoppingCartStack';
// // import DrawerData from './DrawerData';
// // import BottomTabNav from './bottomTabNav';

// // const Drawer = createDrawerNavigator();

// // // const DrawerNavigator = () => {
// // //     // const { auth, setAuth } = useContext(AuthContext)
// // //     return (
// // //         <Drawer.Navigator
// // //             drawerContent={DrawerData}
// // //             screenOptions={{ headerShown: false }}
// // //             drawerContentOptions={{
// // //                 activeTintColor: 'black',
// // //             }}
// // //         >

// // //             <Drawer.Screen
// // //                 name="BottomTabNav"
// // //                 component={BottomTabNav}
// // //                 options={{ drawerLabel: 'open drawer' }}
// // //             />

// // //             <Drawer.Screen
// // //                 name="Home"
// // //                 component={HomeScreen}
// // //                 options={{ drawerLabel: 'open drawer' }}
// // //             />

// // //             <Drawer.Screen
// // //                 name="Offers"
// // //                 component={MenuScreen}
// // //                 options={{ drawerLabel: 'open drawer' }}
// // //             />

// // //             <Drawer.Screen
// // //                 name="Cart"
// // //                 component={ShopingCartStack}
// // //                 options={{ drawerLabel: 'open drawer' }}
// // //             />


// // //         </Drawer.Navigator>
// // //     );
// // // };

// // // export default DrawerNavigator;


// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator=() => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// export default DrawerNavigator;




import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } 
         from '@react-navigation/drawer';
import { NavigationContainer } 
         from '@react-navigation/native';

         function HomeScreen() {
            return (
              <View style={{ flex: 1, alignItems: 'center', 
                             justifyContent: 'center' }}>
                  <Text>Home page</Text>
              </View>
            );
          }
            
          function NotificationsScreen() {
            return (
              <View style={{ flex: 1, alignItems: 'center', 
                             justifyContent: 'center' }}>
                <Text>Notifications Page</Text>
              </View>
            );
          }
            
          function AboutScreen() {
            return (
              <View style={{ flex: 1, alignItems: 'center', 
                             justifyContent: 'center' }}>
                <Text>About Page</Text>
              </View>
            );
          }
          const Drawer = createDrawerNavigator();
            
          export default function DrawerNavigator() {
            return (
              <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={HomeScreen} />
                  <Drawer.Screen name="Notifications" 
                                 component={NotificationsScreen} />
                  <Drawer.Screen name="About" component={AboutScreen} />
                </Drawer.Navigator>
              </NavigationContainer>
            );
          }

