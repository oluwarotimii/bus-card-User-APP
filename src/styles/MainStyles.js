import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../components/colors';

const { width, height } = Dimensions.get('window');

const MainStyles = StyleSheet.create({
    container: {
        paddingVertical: height * 0.05,
        // marginHorizontal: width * 0.02,
        // flex: 1,
        height,
        width,
        // borderColor: 'red',
        // borderWidth: 5,
        // justifyContent: 'center',
    },
    ArtPic: {
        borderColor: 'red',
        borderWidth: 2,
        marginVertical: height * 0.05,
        backgroundColor: Colors.Blue,
        width: width * 0.7,
        height: height * 0.45,
        // flex: 1,
        alignSelf: 'center',
    },
    SignIn: {
        width: width * 0.9,
        height: height * 0.1,
        // borderColor: 'red',
        // borderWidth: 2,
        alignSelf: 'center',
    },
    SigninBtn: {
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

    SignInText: {
        alignSelf: 'center',
        color: Colors.White,
        fontSize: 16,
        marginHorizontal: width * 0.01,
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
    RegText: {
        color: Colors.Blue,
        marginVertical: height * 0.001,
    },

    //HOMEPAGE STYLES
    HomeContainer: {
        height : height * 0.41,
        width,
        backgroundColor: Colors.Shadow,
        // marginBottom: height * 0.0000001,
        elevation: 1,
        borderBottomColor: Colors.Shadow,
        // borderWidth: 2,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    ID: {
        width,
        height: height * 0.1,
        // borderColor: 'red',
        // borderWidth: 2,
        // justifyContent: 'space-between',
        // alignItems: 'stretch',
        flexDirection: 'row',
    },
    Avatar: {
        marginLeft: width * 0.01,
        marginRight: width * 0.06,
        marginTop: height * 0.02,
        borderRadius: 50,
        backgroundColor: Colors.White,
        width: width * 0.1,
        height: height * 0.05,
    },
    IdText: {
        color: Colors.White,
        fontSize: 15,
        marginVertical: height * 0.03,
        marginLeft: width * 0.03,
        
    },
    IconContainer: {
        marginTop: height * 0.02,
        marginLeft: width * 0.5,
        // width: width * 0.1,
        // height: height * 0.1,
        // marginLeft: height * 0.01,
        // marginTop: height * 0.02,
        // borderRadius: 50,
        // backgroundColor: Colors.White,
        width: width * 0.1,
        height: height * 0.05,
    },
    Balance: {
        paddingVertical: height * 0.01,
        marginVertical: height * 0.005,
        height: height * 0.2,
        width,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    BalanceText: {
        paddingVertical: height * 0.001,
        color: Colors.White,
        fontSize: 17,
        marginVertical: height * 0.01,
        marginLeft: width * 0.01, 
    },
    amountText: {
        paddingVertical: height * 0.01,
        color: Colors.White,
        fontSize: 25,
        marginVertical: height * 0.01,
        marginLeft: width * 0.01, 
    },
    BtnContainer: {
        justifyContent: 'space-between',
        width,
        marginTop: height * 0.01,
        paddingHorizontal: width * 0.03,
        // borderWidth: 2,
        // borderColor: "red",
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
    Buttons: {
        elevation: 5,
        backgroundColor: Colors.Mustard,
        borderRadius: 10,
        // borderColor: "red",
        height: height * 0.05,
        // borderWidth: 1,
        // alignContents: 'center',
        width: width * 0.38,
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.02,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // marginHorizontal: width * 0.2,
    },
    RBtnText: {
        // borderWidth: 2,
        fontWeight: 'bold',
        color: Colors.Shadow,
        marginTop: -height * 0.025,
        marginBottom: height * 0.0001,
        marginHorizontal:  width * 0.01,
        marginLeft:  width * 0.13,
        alignSelf: 'center',
    },
    TBtnText: {
        // color: Colors.Shadow,
        // marginLeft:  width * 0.17,
            // borderWidth: 2,
        fontWeight: 'bold',
        color: Colors.Shadow,
        marginTop: -height * 0.025,
        marginBottom: height * 0.0001,
        marginHorizontal:  width * 0.01,
        marginLeft:  width * 0.17,
        alignSelf: 'center',
    },
    History: {
        // borderTopColor: Colors.Shadow,
        paddingHorizontal: width * 0.04,
        height: height / 0.41,
        // borderTopWidth: 2,
        // borderLeftWdith: 2,
        // borderRightWidth: 2,
        marginTop: height * 0.01,
        backgouondColor: Colors.White,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    HistoryTab: {
        marginTop: height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: width * 0.03,
        borderRadius: 10,
        borderColor: Colors.accent,
        // elevation: 1,
    },
    // TransactionHistory: {
    //     borderWidth: 1
    // },
    SmallText: {
        fontSize: 12,
    },
    CreditText: {
        color: Colors.Green,
        fontSize: 17,
    },
    DebitText: {
        color: Colors.Red,
        fontSize: 17,
    },
    //BOTTOM TAB
    BottomTab: {
        width: width * 0.1,
        height: height * 0.1,
        // borderWidth: 2,
        // borderColor: Colors.Shadow,
    },

    //CARD PAGE
    Header: {
        width: width,
        height: height * 0.1,
    },
    TextInput: {
        width: width * 0.6,
        height: height * 0.05,
    },


    //Profile
    BigText: {
        font: 22,
        fontWeight: 'bold',
    },
    MidText: {
        font: 12,
        fontWeight: 'bold',
        padding: width * 0.01,
    },
    Tab: {
        width: width * 0.7,
        height: height * 0.4,
    },
    SecondBtn: {
        backgroundColor: Colors.Shadow,
        // borderColor: 'red',
        // borderWidth: 2,
        marginVertical: height * 0.25,
        width: width * 0.7,
        height: height * 0.05,
        alignSelf: 'center',
        borderRadius: 20,
        paddingHorizontal: width * 0.1,
    },
    OptionTab: {
        width: width * 0.5,
        marginTop: height * 0.01,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        borderWidth: 1,
        padding: width * 0.01,
        borderRadius: 10,
        borderColor: Colors.accent,
        // elevation: 1,
    },
});

export default MainStyles;




