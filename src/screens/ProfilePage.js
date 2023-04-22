import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MainStyles from "../styles/MainStyles";
import Icons from '../components/Icons';
import Colors from "../components/colors";


const { width, height } = Dimensions.get('window');

const Profile = () => {
    return (
        <View style={{
            marginHorizontal: width * 0.02,
        }}>
            <View style={MainStyles.container}>
                <Text style={MainStyles.BigText}> Profile</Text>
                <View style={{
                    // justifyContent: "stretch",
                    flexDirection: "row"
                }}>
                    <View style={MainStyles.Avatar}>
                        
                    </View>
                    <View style={{}}>
                        <Text style={MainStyles.MidText}> Oluwarotimi</Text>
                        <Text style={MainStyles.MidText}>+2347036109595</Text>
                    </View>
                </View>
                {/* <View style={{ borderBottomColor: Colors.White, borderBottomWidth: 4, }} /> */}
                <View style={{
                    marginTop: height * 0.03,
                }}>
                <TouchableOpacity>
                    <View style={MainStyles.OptionTab}>
                        <Text style={MainStyles.SmallText}>Account settings</Text>
                        <Text style={MainStyles.MidText}>Account Info</Text>
                    </View>
                </TouchableOpacity>
                <View style={MainStyles.Tab}>
                    <Text style={MainStyles.MidText}>App settings</Text>
                    {/* <View style={{ borderBottomColor: Colors.Shadow, padding: height * 0.01, borderBottomWidth: 2, }} /> */}
                    <TouchableOpacity>
                        <View style={MainStyles.HistoryTab}>
                            <Text style={MainStyles.MidText}>Language</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <View style={{ borderBottomColor: Colors.Shadow, padding: height * 0.01, borderBottomWidth: 2, }} /> */}
                    <TouchableOpacity>
                        <View style={MainStyles.HistoryTab}>
                            <Text style={MainStyles.MidText}>Privacy Poilcy</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <View style={{ borderBottomColor: Colors.Shadow, padding: height * 0.01, borderBottomWidth: 2, }} /> */}
                    <TouchableOpacity>
                        <View style={MainStyles.HistoryTab}>
                            <Text style={MainStyles.MidText}> Terms and Conditionsn</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={MainStyles.HistoryTab}>
                            <Text style={MainStyles.MidText}> Share </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={MainStyles.HistoryTab}>
                            <Text style={MainStyles.MidText}> Refer a friend </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </View>
                <View>
                    <TouchableOpacity style={MainStyles.SecondBtn}>
                        <Text style={MainStyles.SignInText}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};
export default Profile;