import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HomeProductScreen from '../screens/HomeScreen/main';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from './HomeStack';
import ShopingCartStack from './ShoppingCartStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Contact Us"
                component={ProfileScreen}
                options={{ drawerLabel: 'open drawer' }}

            />

            <Drawer.Screen name="Discount"
                component={HomeScreen}
                options={{ drawerLabel: 'open drawer' }}

            />
            <Drawer.Screen name="Order"
                component={ShopingCartStack}
                options={{ drawerLabel: 'open drawer' }}

            />
            <Drawer.Screen name="Offers"
                component={HomeScreen}
                options={{ drawerLabel: 'open drawer' }}

            />


        </Drawer.Navigator>
    );
}

export default DrawerNavigator;