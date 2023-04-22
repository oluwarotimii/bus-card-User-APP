import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomePage';
import Profile from '../screens/ProfilePage';
import CardsPage from '../screens/CardsPage';
import Icons from '../components/Icons';
import Colors from '../components/colors';
// import BottomTabBar from '@react-navigation/bottom-tabs';
// import BottomTabView from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const BottomTabBar = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        initialRouteName: "Home",
        tabBarPosition: 'bottom',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: Colors.White,
          height: 75,
          position: 'relative',
          marginTop: 0,
          bottom: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ? Colors.Mustard : Colors.Shadow }}>Home</Text>),
          tabBarIcon: ({ focused }) => (
            <View>
              <Icons
                name="home"
                size={22}
                color={focused ? Colors.Mustard : Colors.Shadow} />
            </View>

          ),
        }} />

      <Tab.Screen name="Cards" component={CardsPage}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ?  Colors.Mustard : Colors.Shadow }}>
              Cards
            </Text>),
          tabBarIcon: ({ focused }) => (

            <View>
              <Icons
                name="credit-card"
                size={22}
                color={focused ?  Colors.Mustard : Colors.Shadow}
                // style={{}} 
                />
              {/* <Text style={styles.tabText}> Wallet </Text> */}
            </View>

          ),
        }}
      />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color: focused ?  Colors.Mustard : Colors.Shadow }}>
              Profile
            </Text>),
          tabBarIcon: ({ focused }) => (

            <View>
              <Icons
                name="person"
                size={focused ?  22 : 30}
                color={focused ?  Colors.Mustard : Colors.Shadow}
                // style={{}} 
                />
              {/* <Text style={styles.tabText}> Wallet </Text> */}
            </View>

          ),
        }}
      />
    </Tab.Navigator>
  )
};
export default BottomTabBar;
