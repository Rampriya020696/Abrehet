import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
// import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';





const DrawerData = ({ navigation }) => {


   console.log('Drawer NAvigation works')


    // const { authCheck } = useContext(AuthContext)

    const goToRoute = async (value) => {
        if (value.route == 'Logout') {
            await Signout()
        }
        else {
            navigation.navigate(value.route)

        }
    }


    const Signout = async () => {
        Alert.alert(
            '',
            'Are you sure want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Button Pressed'),
                    style: 'cancel',
                },

                { text: 'Logout', onPress: () => removeAuth() },

            ],
        );
    };

    const removeAuth = async () => {
        // await Utility.removeAuthKey('token')
        // await Utility.removeAuthKey('userId')

        // let logOut = LOGO
        // let url = 'user/register?'

        // console.log('GETTOKEN ==', `Bearer ${JSON.parse(SyncStorage.get('token'))}`)

        // var myHeaders = new Headers();
        // myHeaders.append("Cyber-Food-App-Api", "true");
        // myHeaders.append("Authorization", "Bearer" + ' ' + auth.token);

        // console.log('headeeers', myHeaders)

        // const Logout = fetch('https://api.cyberfood.com.fj/api/user/logout', {
        //     method: 'POST',
        //     headers: myHeaders

        // }).then(response => response.json())
        //     .then(async (result) => {
        //         setAuth(null)
        //         // console.log('Success:', result);
        //         // console.log('ppppppp', { result })
        //         console.log('result api', result)
        //         if (result.success) {
        //             console.log('result', result)
        //             Alert.alert(result.message)
                  
        //             // await AsyncStorage.removeItem('userId').then(() => console.log('userId Removed'))
        //             // await AsyncStorage.removeItem('token').then(() => console.log('token Removed'))
        //             // await AsyncStorage.removeItem('userDetail').then(() => console.log('UserDetail Removed'))

            
        //         } else {
        //             Alert.alert(result.message)

        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //         Alert.alert(error)
        //     });
        // navigation.navigate('Login')


    }



    // const dataAuthList = [
    //     { key: 'Profile', route: 'Profile',iconName: 'user' },
    //     { key: 'Home', route: 'HomePage',iconName:'home' },
    //     { key: 'Offers', route: 'OffersScreen',iconName:'gift' },
    //     { key: 'Restaurants', route: 'Restaurant',iconName:'shopping-bag' },
    //     { key: 'Faq', route: 'Faq',iconName:'help-circle' },
    //     { key: 'Contact Us', route: 'ContactUsScreen',iconName:'message-circle' },
    //     { key: 'Privacy Policy', route: 'PrivacyPolicy',iconName:'lock' },
    //     { key: "Logout", route: 'Logout', iconName: 'log-out' }
    // ]
    const dataGuestList = [
       {key:'Home',name:"Home",route:'HomeStack'},
       {key:'Offers',name:'Brand',route:'Brand'},
       {key:'Account',name:'Account',route:'Account'}
    ]

    return (
        <View style={{backgroundColor:'red'}}>
            {/* <View style={{ width:'80%',backgroundColor:'white',height:hp('100%'),right:wp('10%') }}>

            <View style={{ height: '30%', width: Platform.OS == 'android' ? wp('65%') : wp('72%'), backgroundColor: constants.title_Colors, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                <Image source={{ uri: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg' }}
                    style={{ height: 120, width: 120, alignSelf: "center", marginTop: hp('5%'), borderRadius: 100 }}></Image>
                {getUserInfo()}
            </View> */}
            <FlatList
              data={dataGuestList}
                style={{
                    marginTop: '15%',
                    // color: 'black',
                    backgroundColor: 'white',
                    shadowColor: 'black',
                    shadowRadius: 0,
                    shadowOpacity: 0.9,
                    shadowOffset: { width: 3, height: 3 },
                    elevation: 2,
                    zIndex:1000
                }}
                renderItem={({ item }) =>
                    <>
                        <TouchableOpacity onPress={() => goToRoute(item)}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width:'50%',
                                alignSelf: "center",
                                marginTop:'1%',
                                padding: '0.5%',

                            }}>
                                <Text style={{
                                    textAlign: "center",
                                    marginTop:'1%',
                                    color: 'black',
                                    fontSize: 21,

                                }}>
                                    {item.key}
                                </Text>
                                 {/* <Icon2
                                    name={item.iconName}
                                    size={28}
                                    color={'lightgrey'}
                                    style={{
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '1%'
                                    }}
                                /> */}

                
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                marginTop:'1%',
                                width: '100%',
                                height: '0.3%',
                                opacity: 0.2,
                                backgroundColor: 'black',
                            }}></View>
                    </>
                }
            />
            {/* </View> */}
        </View>
    );
}

export default DrawerData;