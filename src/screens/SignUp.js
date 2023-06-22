import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainStyles from '../styles/MainStyles';
import Carousel from '../components/onboardComponent';


const SignUp = () => {
    return (
        <View style={MainStyles.container}>
            <View>
                <Text> Sign-In page</Text>
                <View style={MainStyles.ArtPic}></View>
                <View style={MainStyles.SignIn}>
                    <TouchableOpacity style={MainStyles.SigninBtn}>
                        {/* <Text style={MainStyles.SignInText}> Sign In</Text> */}
                        <Carousel />
                    </TouchableOpacity>
                </View>
                <View style={MainStyles.AltContainer}>
                    <Text style={MainStyles.optText}> Do not have an account ?</Text>
                    <TouchableOpacity>
                        <Text style={MainStyles.RegText}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
};
export default SignUp;