import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomePage';
import Profile from '../screens/ProfilePage';
import CardsPage from '../screens/CardsPage';
import IntroStack from './introStack';
import BottomTabBar from './bottomTab';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={IntroStack} />
      <Stack.Screen name="Tab" component={BottomTabBar} />
    </Stack.Navigator>
  );
}

export default MyStack;