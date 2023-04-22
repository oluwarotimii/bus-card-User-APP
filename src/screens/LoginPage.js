import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MainStyles from '../styles/MainStyles';
// import Preset from "../components/preset";
// import {width, height} from '../components/dimension';
import styles from '../styles/styles';
import Colors from '../components/colors';

const LogIn = () => {
    return (
        <View style={MainStyles.container}>
              <View>
                    {/* <Text style={MainStyles.MidText}> Back ICON</Text> */}
                    {/* <Icons name="star" size={30} color="#900" /> */}
                </View>
            <View>
                <View style={MainStyles.ArtPic}></View>
                <Text style={styles.LogInText}> Log in</Text>
                <View styles={styles.TextInputContainer}>
                    <TextInput
                    style={styles.TextInput}
                        placeholder={'Email'} />
                    <TextInput
                        style={styles.TextInput}
                        placeholder={'Password'}
                        secureEntry />
                </View>
                <View style={styles.SignIn}>
                    <TouchableOpacity style={styles.SigninBtn}>
                        <Text style={styles.SignInText}> Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotText}> Forgot Password ?</Text>
                </View>
            </View>

        </View>
    )
};
export default LogIn;