import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParams} from '../../navigation/navigation';
import {
  MAIN_COLOR,
  BACKGROUND,
  SURFACE,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  BORDER_COLOR,
  ERROR_COLOR,
} from '../../design-system';
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
  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(loginThunk(data.username, data.password));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoLetter}>G</Text>
        </View>
        <Text style={styles.appName}>Gallery</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Usuario</Text>
        <Controller
          control={control}
          rules={{required: 'El usuario es requerido'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[styles.input, errors.username && styles.inputError]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              placeholderTextColor={TEXT_SECONDARY}
              placeholder="Tu usuario"
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username.message}</Text>
        )}

        <Text style={[styles.label, {marginTop: 20}]}>Contraseña</Text>
        <Controller
          control={control}
          rules={{required: 'La contraseña es requerida'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              secureTextEntry
              style={[styles.input, errors.password && styles.inputError]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={TEXT_SECONDARY}
              placeholder="Tu contraseña"
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        <Pressable
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
            isAuthenticated && styles.buttonDisabled,
          ]}
          onPress={handleSubmit(onSubmit)}
          disabled={isAuthenticated}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: MAIN_COLOR,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  logoLetter: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: TEXT_PRIMARY,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    marginTop: 4,
  },
  card: {
    backgroundColor: SURFACE,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: TEXT_PRIMARY,
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: BORDER_COLOR,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: TEXT_PRIMARY,
    backgroundColor: BACKGROUND,
  },
  inputError: {
    borderColor: ERROR_COLOR,
  },
  errorText: {
    color: ERROR_COLOR,
    fontSize: 12,
    marginTop: 6,
  },
  button: {
    marginTop: 28,
    height: 52,
    backgroundColor: MAIN_COLOR,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: MAIN_COLOR,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{scale: 0.98}],
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
});
