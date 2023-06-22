/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
   
import React from 'react';
import 'react-native-gesture-handler';
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
import IntroStack from './src/navigation/introStack';
import Onboard from './src/screens/Onboarding';
import Carousel from   './src/components/onboardComponent';
import Cards  from './src/screens/cards/cards';
import NoCardComponent from './src/components/noCards';

const App = () => {
  return (
    <NavigationContainer>
        <Cards />
    </NavigationContainer>
  )
};
export default App;
