import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {LoginScreen} from '../screens/Login/LoginScreen';
import {AdminsScreen} from '../screens/Admin/AdminsScreen';
import {SURFACE, TEXT_PRIMARY, BORDER_COLOR} from '../design-system';

export type RootStackParams = {
  Login: undefined;
  Home: undefined;
  Info: undefined;
  Admin: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: SURFACE,
          shadowColor: 'transparent',
          elevation: 0,
          borderBottomWidth: 1,
          borderBottomColor: BORDER_COLOR,
        } as any,
        headerTintColor: TEXT_PRIMARY,
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 17,
          color: TEXT_PRIMARY,
        },
        cardStyle: {backgroundColor: SURFACE},
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Gallery'}}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{title: 'Información'}}
      />
      <Stack.Screen
        name="Admin"
        component={AdminsScreen}
        options={{title: 'Admin'}}
      />
    </Stack.Navigator>
  );
};
