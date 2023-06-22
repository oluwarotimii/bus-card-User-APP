import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MainStyles from '../styles/MainStyles';
import Colors from '../components/colors';
import Carousel from '../components/onboardComponent';

const { width, height } = Dimensions.get('window');

const Onboard = () => {
    return(
        <View>
            <Text> HIIIIIIIIIIII</Text>
            <Carousel />
        </View>
    )
};
export default Onboard;