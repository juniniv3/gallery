import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParams} from '../../navigation/navigation';
import {MAIN_COLOR, SECONDARY_COLOR, ERRROR_COLOR} from '../../design-system';
import {loginThunk} from '../../../state/auth';
import {useAppDispatch, useAppSelector} from '../../../hooks/ReduxHooks';
import {useMemo} from 'react';

type FormData = {
  username: string;
  password: string;
};

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const status = useAppSelector(state => state.auth.status);
  const isAuthenticated = useMemo(() => {
    return status === 'authenticated';
  }, [status]);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    dispatch(loginThunk(data.username, data.password));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>
      <Text style={styles.userText}>Usuario</Text>
      <Controller
        control={control}
        rules={{required: 'El usuario es requerido'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.userInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}
      <Text style={styles.userText}>Contraseña</Text>
      <Controller
        control={control}
        rules={{required: 'La contraseña es requerida'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            secureTextEntry={true}
            style={styles.userInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <Pressable
        style={{marginTop: 60}}
        onPress={handleSubmit(onSubmit)}
        disabled={isAuthenticated}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    color: SECONDARY_COLOR,
  },
  userText: {
    color: SECONDARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userInput: {
    width: '100%',
    height: 40,
    borderColor: SECONDARY_COLOR,
    color: SECONDARY_COLOR,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 8,
  },
  loginButtonText: {
    padding: 12,
    backgroundColor: MAIN_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  errorText: {
    color: ERRROR_COLOR,
    fontSize: 12,
    marginTop: 5,
  },
});
