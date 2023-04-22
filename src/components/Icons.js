import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { View } from 'react-native';

const Icons = ({ name, size, color }) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default Icons;
