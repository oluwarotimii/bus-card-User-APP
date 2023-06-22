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
                <Text style={styles.Text}>Cards</Text>
                <Card />
                <View style={styles.BtnContainer}>
                    <View style={styles.BtnBox}>
                        <TouchableOpacity style={styles.CardBtn}>
                            <View styles={styles.IconCtn}>
                                <Icons name="wallet" size={10} color={Colors.White} />
                            </View>
                            {/* <Text style={{color: Colors.White, fontSize: 35, alignSelf: 'center',}}>  </Text> */}
                        </TouchableOpacity>
                        <Text style={styles.cardLabel}> Create Card</Text>
                    </View>

                    <View style={styles.BtnBox}>
                        <TouchableOpacity style={styles.CardBtn}>
                            <View styles={styles.IconCtn}>
                                <Icons name="wallet" size={10} color={Colors.White} />
                            </View>
                            {/* <Text style={{color: Colors.White, fontSize: 35, alignSelf: 'center',}}>  </Text> */}
                        </TouchableOpacity>
                        <Text style={styles.cardLabel}> Deactivate</Text>
                    </View>

                    <View style={styles.BtnBox}>
                        <TouchableOpacity style={styles.CardBtn}>
                            <View styles={styles.IconCtn}>
                                <Icons name="wallet" size={10} color={Colors.White} />
                            </View>
                            {/* <Text style={{color: Colors.White, fontSize: 35, alignSelf: 'center',}}>  </Text> */}
                        </TouchableOpacity>
                        <Text style={styles.cardLabel}> Delete Card</Text>
                    </View>

                </View>
                <View style={{
                    marginTop: height * 0.01,
                    borderWidth: 2,
                }} />
            </View>
        </ScrollView>
    )
};
export default CardsPage;