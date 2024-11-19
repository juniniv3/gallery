import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {LoginScreen} from '../screens/Login/LoginScreen';
import { MAIN_COLOR } from '../design-system';

export type RootStackParams = {
  Login: undefined;
  Home: undefined;
  Info: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
      headerStyle: {
        backgroundColor: MAIN_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
};
