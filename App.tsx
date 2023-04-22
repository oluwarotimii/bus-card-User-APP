/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/HomePage';
import Profile from './src/screens/ProfilePage';
import LogIn from './src/screens/LoginPage';
import Card from './src/components/CardComponent';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabBar from './src/navigation/bottomTab';
import CardsPage from './src/screens/CardsPage';
import MyStack from './src/navigation/PrimaryStack';


const App = () => {
  return (
    <NavigationContainer>
      
        {/* <Text>HI</Text> */}
        <View>
        <CardsPage />
        </View>
      
    </NavigationContainer>
  )
};
export default App;