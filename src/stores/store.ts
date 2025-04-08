import { configureStore } from '@reduxjs/toolkit';
import { envVarsReducer } from './';

export const store = configureStore({
  reducer: {
    envVars: envVarsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
