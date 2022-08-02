import React, { useContext, useEffect } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerData from "../Constants/DrawerData"
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ShopingCartStack from './ShoppingCartStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    // const { auth, setAuth } = useContext(AuthContext)
    return (
        <Drawer.Navigator
            // drawerContent={(props) => <DrawerData {...props} auth={auth} setAuth={setAuth} />}
            screenOptions={{ headerShown: false }}
            // drawerContentOptions={{
            //     activeTintColor: 'black',
            // }}
            >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ drawerLabel: 'open drawer' }}
            />
            <Drawer.Screen
                name="Offers"
                component={MenuScreen}
                options={{ drawerLabel: 'open drawer' }}
            />

            <Drawer.Screen
                name="Cart"
                component={ShopingCartStack}
                options={{ drawerLabel: 'open drawer' }}
            />
        

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
