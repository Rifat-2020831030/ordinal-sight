import { configureStore } from '@reduxjs/toolkit';
import applicantsReducer from './applicantsSlice';

export const store = configureStore({
  reducer: {
    applicants: applicantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
