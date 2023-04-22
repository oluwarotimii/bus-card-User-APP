import React from 'react';
import { ScrollView, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import MainStyles from '../styles/MainStyles';
import Card from '../components/CardComponent';
import Icons from '../components/Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../styles/styles';


const { width, height } = Dimensions.get('window');

const CardsPage = () => {
    return (
        <ScrollView>
            <View style={styles.Header}>
                <View style={styles.IconBox}>
                    <TouchableOpacity>
                        <Icons name="arrow-left" size={20} color={Colors.Shadow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.HeaderBox}>
                    <Text style={styles.HeaderText}> CARD</Text>
                </View>

            </View>
            <View style={styles.MainContainer}>
                <Text style={styles.Text}>Manage Yor Card Here</Text>
                <Card />
                <View>
                    <Text> Deactivate Card</Text>
                </View>
                <View style={{
                    marginTop: height * 0.01,
                    borderWidth: 2,
                }} />
                <Card />
                <View style={{
                    marginTop: height * 0.01,
                    borderWidth: 2,
                }} />
               
                <Card />
            </View>
        </ScrollView>
    )
};
export default CardsPage;