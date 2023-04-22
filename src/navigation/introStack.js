import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from './TabBar';
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LoginPage';


const Stack = createStackNavigator();

function IntroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Login" component={LogIn} />
      {/* <Stack.Screen name="BottomTab" component={BottomTabBar} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default IntroStack;