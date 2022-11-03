import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import MainStackNavigator from './stackNavigator';
import Signin from '../screens/Signin';
import {Auth, Hub} from 'aws-amplify';
import Splash from '../screens/Splash';
import OnBoarding from '../screens/OnBoarding';
import Signup from '../screens/Signup';

const Root = createStackNavigator();
const Router = () => {
  const [user, setUser] = React.useState<any>(undefined);
  const checkUser = async () => {
    try {
      const res = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(res);
      setUser(res);
    } catch (error: any) {
      console.log(error.message, 'checkUser');
      setUser(false);
    }
  };
  React.useEffect(() => {
    checkUser();
  }, []);
  React.useEffect(() => {
    const listen = data => {
      console.log(data);
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listen);
    return () => Hub.remove('auth', listen);
  }, []);

  if (user === undefined) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Root.Screen component={BottomTabNav} name="HomeTabs" />
          </>
        ) : (
          <>
            <Root.Screen component={OnBoarding} name="OnBorading" />
            <Root.Screen component={Signin} name="Sigin" />
            <Root.Screen component={Signup} name="Signup" />
          </>
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
