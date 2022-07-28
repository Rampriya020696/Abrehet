/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

//import Amplify from 'aws-amplify';
import {withAuthenticator , AmplifyTheme} from 'aws-amplify-react-native';
import Signin from './src/screens/Signin';


import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router/>
    </SafeAreaView>
  );
};

// const signUpConfig={
//   header:"",
//   hideAllDefaults:true,
//   signUpFields:[
//     {
//       label: 'Full Name',
//       key:'fullName',
//       required:true,
//       displayOrder:1,
//       type:'string',
//     },
//     {
//       label:'Password',
//       key:'password',
//       required:true,
//       displayOrder:2,
//       type:'string',
//     },
//     {
//       label:'Skip',
//       key:'skip',
//       required:true,
//       type:'string',
     
//     }
//   ]
// }


export default withAuthenticator(App,{Signin});

// ,{signUpConfig}
