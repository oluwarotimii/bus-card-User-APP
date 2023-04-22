import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import MainStyles from "../styles/MainStyles";
import Icons from '../components/Icons';
import Colors from "../components/colors";


const Home = () => {
    return (
        <ScrollView style={MainStyles.container}>
            <View>
                <View style={MainStyles.HomeContainer}>
                    {/* <Text style={[MainStyles.BigText]}>HOME</Text> */}
                    <View style={MainStyles.ID}>
                        <View style={MainStyles.Avatar}>
                            {/* <Text>IMG</Text> */}
                        </View>
                        <Text style={MainStyles.IdText}> Oluwarotimi</Text>
                        <View style={MainStyles.IconContainer}>
                            {/* <Text style={MainStyles.IdText}>ICON</Text> */}
                            <Icons name="bell" size={25} color={Colors.White} />
                        </View>
                    </View>
                    {/* BALANCE AND BUTTONS LOCATED HERE */}
                    <View style={MainStyles.Balance}>
                        <Text style={MainStyles.BalanceText}> Balance </Text>
                        <View style={{ borderBottomColor: Colors.White, borderBottomWidth: 2, }} />
                        <Text style={MainStyles.amountText} > {'₦'} 0 </Text>
                        {/* RECHARGE AND TRANSEFER BUTTONS */}
                        <View style={MainStyles.BtnContainer}>
                            <View style={MainStyles.Buttons}>
                                {/* Recharge Button */}
                                <TouchableOpacity>
                                <Icons name="wallet" size={20} color={Colors.White} />
                                    <Text style={MainStyles.RBtnText}>RECHARGE</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={MainStyles.Buttons}>
                                {/* Transfers Buttons */}
                                <TouchableOpacity>
                                <Icons name="arrow-swap" size={20} color={Colors.White} />
                                    <Text style={MainStyles.TBtnText}>Transfer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={MainStyles.History}>
                    <Text style={MainStyles.BigText}> Last Transactions</Text>
                    {/* <View style={{ borderBottomColor: Colors.Shadow, borderBottomWidth: 2, }} /> */}
                    <Text style={MainStyles.SmallText}> 04/06/2023 </Text>
                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.CreditText}> {'+ ₦'} 200</Text>
                    </View>
                    {/* sort the history by date and write the date above the trancations */}
                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.DebitText}> {'- ₦'} 200</Text>
                    </View>

                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.CreditText}> {'+ ₦'} 200</Text>
                    </View>
                    {/* sort the history by date and write the date above the trancations */}
                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.DebitText}> {'- ₦'} 200</Text>
                    </View>

                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.CreditText}> {'+ ₦'} 200</Text>
                    </View>
                    {/* sort the history by date and write the date above the trancations */}
                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.DebitText}> {'- ₦'} 200</Text>
                    </View>

                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.CreditText}> {'+ ₦'} 200</Text>
                    </View>
                    {/* sort the history by date and write the date above the trancations */}
                    <View style={MainStyles.HistoryTab}>
                        <View style={MainStyles.TransactionHistory}>
                            <Text style={MainStyles.MidText}>TRANSACTION</Text>
                            <Text style={MainStyles.SmallText}>xxxxx</Text>
                        </View>
                        <Text style={MainStyles.DebitText}> {'- ₦'} 200</Text>
                    </View>
                </View>
            </View>
            {/* <View style={MainStyles.BottomTab}>
                <Text>TAB</Text>
            </View> */}
        </ScrollView>
    )
};
export default Home;