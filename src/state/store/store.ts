import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from '../auth';
import {imageSlice} from '../image';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    image: imageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
