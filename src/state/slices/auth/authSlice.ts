import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  status: 'checking' | 'unauthenticated' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  profilePic: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  profilePic: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.status = 'authenticated';
    },
    logout: state => {
      state.status = 'unauthenticated';
    },
    loading : state => {
      state.status = 'unauthenticated';
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
