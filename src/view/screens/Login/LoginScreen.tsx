import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParams} from '../../navigation/navigation';

export const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>
      <Text style={styles.userText}>Usuario</Text>
      <TextInput style={styles.userInput}></TextInput>
      <Text style={styles.userText}>Contraseña</Text>
      <TextInput secureTextEntry={true} style={styles.userInput}></TextInput>
      <Pressable
        style={{marginTop: 50}}
        onPress={() => navigation.navigate('Home')}>
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
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  userText: {
    marginTop: 20,
  },
  userInput: {
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 14,
  },
  loginButtonText: {
    padding: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
  },
});
