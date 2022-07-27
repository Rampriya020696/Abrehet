import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors, fonts } from '../../utils';



const Signin = ({ navigation, type }) => {

    return (
        <ImageBackground source={require('../../Assets/Login.png')} style={styles.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.page2}
            >
                <View>


                    <View style={styles.wraperLogo}>
                        <Image
                            style={{ height: 80, width: 80 }}
                            source={require('../../Assets/Logo.png')} />

                        <Text style={styles.title}>
                            Treva Shop
                        </Text>
                    </View>

                    <View style={{alignSelf:'center',marginTop:20}}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red', width: '70%', padding: 10, flexDirection: 'row',
                                alignItems: 'center',borderRadius:12,alignSelf:'center'
                            }}
                        >
                            <Image
                                style={{ width: 15, height: 25   }}
                                source={require('../../Assets/icon_facebook.png')} />
                            <Text style={{ fontSize: 14, color: 'white', padding: 2,paddingLeft:20 }}>
                                Login with Facebook
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </ImageBackground>
    )

}

export default Signin;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingHorizontal: 30,
    },
    page2: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    wraperLogo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    choose: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[800],
        marginLeft: 20,
        alignSelf: 'center',
        color: 'white',
    },
    or: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        alignSelf: 'center',
        color: 'white',
    },
    signin: {
        fontSize: 14,
        color: 'white',
        fontFamily: fonts.secondary[400],
    },
    chooseLoginFacebook: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: colors.facebook,
        borderRadius: 30,
        width: 330,
        height: 50,
        elevation: 10,
    },
    imageFacebook: {
        width: 15,
        height: 30,
    },
    loginFacebook: {
        fontSize: 16,
        color: 'white',
        marginLeft: 30,
        fontFamily: fonts.secondary[400],
    },
    chooseLoginGoogle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 30,
        width: 330,
        height: 50,
        elevation: 10,
    },
    imageGoogle: {
        width: 25,
        height: 25,
    },
    loginGoogle: {
        fontSize: 16,
        color: colors.text.secondary,
        marginLeft: 20,
        fontFamily: fonts.secondary[400],
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
});