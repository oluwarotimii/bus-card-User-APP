import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from './bottomTab';
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LoginPage';
import Onboard from '../screens/Onboarding';
import Colors from '../components/colors';


const Stack = createStackNavigator();

function IntroStack() {
  return (
    <Stack.Navigator  screenOptions={{
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
      {/* <Stack.Screen name="Onboard" component={Onboard} /> */}
      {/* <Stack.Screen name="Signup" component={SignUp} /> */}
      {/* <Stack.Screen name="Login" component={LogIn} /> */}
      <Stack.Screen name="BottomTab" component={BottomTabBar} />
    </Stack.Navigator>
  );
}

export default IntroStack;