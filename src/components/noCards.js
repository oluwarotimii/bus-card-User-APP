import React from 'react';
import {View, Text, Image, TouchableOpacity,Dimensions, StyleSheet} from "react-native";
import Icons from "./Icons";
import Colors from "./colors";

const { width, height } = Dimensions.get('window');
const NoCardComponent = () => {
    return (
        <View styles={cardStyles.boxContainer}>
            <Text styles={cardStyles.noCardsTxt}> No Cards issued </Text> 
            <View styles={cardStyles.issueContainer}>
                <TouchableOpacity styles={cardStyles.issueBtn}> 
                    <Text style={cardStyles.issueTxt}> Issue a card</Text>
                    <View  style={cardStyles.iconContainer}>
                    <Icons 
                     name="mastercard"
                    size={20}
                    color={ Colors.Mustard}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    boxContainer: {
        // borderColor: 'red',
        // borderWidth: 3, 
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginVertical: height * 0.2,
        // marginHorizontal: width * 0.2,
        // height: height * 0.5,
        // width: width * 0.6,
    },
    noCardsTxt: {
        // borderWidth: 3, 
        // borderColor: 'red',
        // color: Colors.Shadow,
        // fontSize: 40,
    },
    issueContainer: {
        // borderColor: Colors.Shadow,
        // backgroundColor: Colors.primary,
    },
    issueBtn:{
        // borderColor: 'red',
        // borderWidth: 3, 
        // borderRadius: 10,
        // width:  width * 0.2,
        // elevation: 25,
    },
    issueTxt: {
        borderColor: 'red',
        color:  Colors.Shadow,
    },
    iconContainer: {
        // borderWidth: 3, 
        // borderColor: Colors.Blue,
        // // marginVertical: height * 0.01,
        // justifyContent: 'flex-end',
    },
});
export default  NoCardComponent;
