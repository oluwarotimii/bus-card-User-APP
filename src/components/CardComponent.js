import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import cardStyles from '../styles/cardstyles';
import Icons from './Icons';
import Colors from './colors';

const { width, height } = Dimensions.get('window');


const Card = () => {
  return (
    <View style={cardStyles.card}>
       <View style={cardStyles.ServiceNameBox}> 
        <Text style={cardStyles.Username}> FROBS</Text>
      </View>
      <View  style= {cardStyles.Bcircle}/>
      <View  style= {cardStyles.Scircle}/>
      <View style={cardStyles.UsernameBox}> 
        <Text style={cardStyles.Username}> Bernoulli Frobenius</Text>
        <Icons 
           name="mastercard"
           size={20}
           color={ Colors.Mustard}/>
      </View>
    </View>
  );
};

export default Card;
