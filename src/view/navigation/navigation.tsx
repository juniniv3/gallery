import {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {LoginScreen} from '../screens/Login/LoginScreen';
import {AdminsScreen} from '../screens/Admin/AdminsScreen';
import {SURFACE, TEXT_PRIMARY, BORDER_COLOR, BACKGROUND} from '../design-system';
import {useAppDispatch, useAppSelector} from '../../hooks/ReduxHooks';
import {checkAuthStatus} from '../../state/auth/thunks';

export type AuthStackParams = {
  Login: undefined;
};

export type AppStackParams = {
  Home: undefined;
  Info: undefined;
  Admin: undefined;
};

export type RootStackParams = AuthStackParams & AppStackParams;

const AuthStack = createStackNavigator<AuthStackParams>();
const AppStack = createStackNavigator<AppStackParams>();

const sharedScreenOptions: StackNavigationOptions = {
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
};

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={sharedScreenOptions}>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const AppNavigator = () => (
  <AppStack.Navigator screenOptions={sharedScreenOptions}>
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'Gallery'}}
    />
    <AppStack.Screen
      name="Info"
      component={InfoScreen}
      options={{title: 'Información'}}
    />
    <AppStack.Screen
      name="Admin"
      component={AdminsScreen}
      options={{title: 'Admin'}}
    />
  </AppStack.Navigator>
);

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.auth.status);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  if (status === 'checking') {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: BACKGROUND,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return status === 'authenticated' ? <AppNavigator /> : <AuthNavigator />;
};
