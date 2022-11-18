/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';

import Signin from '../screens/Signin';
import {Auth, Hub, API, graphqlOperation} from 'aws-amplify';
import Splash from '../screens/Splash';
import OnBoarding from '../screens/OnBoarding';
import Signup from '../screens/Signup';
import {ResourceContext} from '../context/ResourceContext';
import {OnBoardingContext} from '../context/OnBoardingContext';
import EmailConfirmation from '../screens/EmailConfirmation';
import ForgetPassword from '../screens/ForgetPassword';
import ResetPassword from '../screens/ResetPassword';

const resourceQuerie = `
query MyQuery {
  listResources {
    nextToken
    items {
      login
      signup
      id
    }
  }
}
`;
const onBoardingGetQuerie = `
query MyQuery {
  listOnBoardings {
    items {
      id
      image
      subtitle
      title
      backgroundColor
    }
  }
}

`;

const Root = createStackNavigator();
const Router = () => {
  const [user, setUser] = React.useState<any>(undefined);
  const {setResource} = React.useContext(ResourceContext) as any;
  const {setOnboardingRes} = React.useContext(OnBoardingContext) as any;
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
    const getOnBoardingResource = async () => {
      try {
        const res = (await API.graphql(
          graphqlOperation(onBoardingGetQuerie, {}),
        )) as any;
        const data = res?.data?.listOnBoardings?.items;
        if (data) {
          setOnboardingRes(data.sort((a, b) => Number(a.id) - Number(b.id)));
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    const getResource = async () => {
      try {
        const res = (await API.graphql(
          graphqlOperation(resourceQuerie, {}),
        )) as any;
        const data = res?.data?.listResources?.items[0];
        if (data) {
          setResource(data);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    checkUser();
    getOnBoardingResource();
    getResource();
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
            <Root.Screen component={ForgetPassword} name="ForgetPassword" />
            <Root.Screen component={ResetPassword} name="ResetPassword" />
            <Root.Screen
              component={EmailConfirmation}
              name="EmailConfirmation"
            />
            <Root.Screen component={Signup} name="Signup" />
          </>
        )}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
