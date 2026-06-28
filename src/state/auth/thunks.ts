import {singIn} from '../../Firebase/Providers';
import {FirebaseAuth} from '../../Firebase/Config';
import {onAuthStateChanged} from '@firebase/auth';
import {Dispatch} from 'redux';
import {loading, login, logout} from './';

export const loginThunk = (user: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const response = await singIn(user, password);
    if (response.ok) {
      dispatch(login(response));
    } else {
      dispatch(logout(response));
    }
  };
};

export const checkAuthStatus = () => {
  return (dispatch: Dispatch) => {
    onAuthStateChanged(FirebaseAuth, user => {
      if (user) {
        dispatch(
          login({
            ok: true,
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            profilePic: user.photoURL,
            errorMessage: null,
          }),
        );
      } else {
        dispatch(logout({errorMessage: null}));
      }
    });
  };
};
