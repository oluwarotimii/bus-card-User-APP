import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../components/colors'
// import { width, height } from '../components/dimension';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    TextInput : {
        borderColor: Colors.accent,
        borderWidth: 1,
        marginVertical: height * 0.01,
        width: width * 0.88,
        alignSelf: 'center',
        padding: height * 0.01,
        borderRadius: 10,
    },

    TextInputContainer:{
        marginTop: height * 0.09,
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center'

    },
    SignIn: {
        width: width * 0.9,
        height: height * 0.1,
        // borderColor: 'red',
        // borderWidth: 2,
        alignSelf: 'center',
    },
    
    SigninBtn: {
        marginTop: height * 0.04,
        backgroundColor: Colors.Mustard,
        // borderColor: 'red',
        // borderWidth: 2,
        marginVertical: height * 0.01,
        width: width * 0.7,
        height: height * 0.05,
        alignSelf: 'center',
        borderRadius: 20,
        paddingHorizontal: width * 0.1,
    },
    LogInText: {
        alignSelf: 'center',
        color: Colors.Shadow,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: width * 0.01,
        marginVertical: height * 0.01,
    },
    SignInText: {
        alignSelf: 'center',
        color: Colors.White,
        fontSize: 16,
        // marginHorizontal: width * 0.01,
        marginVertical: height * 0.01,
    },
    AltContainer: {
        marginVertical: height * 0.02,
        // marginHorizontal: width * 0.1,
        // alignContent: 'center',
        // justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 5,
        alignItems: 'center',
        paddingVertical: height * 0.01,
    },
    forgotText: {
        color: Colors.Blue,
        marginVertical: height * 0.001,
        alignSelf: 'center',
    },

    //CARDS SCREEN
    Header: {
        // borderWidth: 2,
    },
    IconBox: {
        backgroundColor: Colors.background,
        width: width * 0.1,
        // borderWidth: 1,
        elevation: 2,
        borderRadius: 8,
        marginLeft: width * 0.01,
        marginTop: height * 0.01,
        padding: 5,
    },
    HeaderBox:{
        borderBottomWidth: 2,
        width: width,
        height: height * 0.05,
        // marginHorizontal: width * 0.12,
    },
    HeaderText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    MainContainer: {
        // borderWidth: 1,
    },
    Text:{
        marginVertical: height * 0.03,
        paddingHorizontal: width * 0.1,
        // borderWidth: 2,
        // alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    // IconCtn:{
    //     // marginTop: height * 0.05,
    //     borderColor: Colors.Shadow,
    // },
    BtnContainer:{
        marginTop: height * 0.01,
        height: height * 0.10,
        width: width * 0.8,
        // borderColor: Colors.Shadow,
        // borderWidth: 2,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
      },
      CardBtn:{
        borderColor: Colors.Shadow,
        // borderWidth: 2,
        marginHorizontal: width * 0.001,
        height: height * 0.07,
        width: width * 0.01,
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.01,
        backgroundColor: Colors.Mustard,
        borderRadius:30,
        justifyContent: 'center',
        flexDirection: 'column',
      },
      BtnBox:{
        flexDirection:'column',
        // flex: 'space-evenly',
      },
      cardLabel: {
        flexDirection: 'column',
        fontSize: 13,
        fontWeight: 'bold',
      },

})
export default styles;