import {signInWithEmailAndPassword} from 'firebase/auth';
import {FirebaseAuth} from './Config';

export const singIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    console.log(result.user);
  } catch (error) {
    console.log(error);
  }
};
