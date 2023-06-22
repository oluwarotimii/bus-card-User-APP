import React from "react";
import {View, Text} from "react-native";
import  NoCardComponent from "../../components/noCards";
import CardsPage from "../CardsPage";
export default function Cards () {
    const cardsNumber = 0;
    var cardsOptions;
    if ( cardsNumber === 0) {
        cardsOptions = <NoCardComponent />;
    } else {
        cardsOptions = < CardsPage/>
    }
    return(
        <View>
            {cardsOptions}
        </View>
    )
}