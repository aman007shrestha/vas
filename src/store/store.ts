import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/authSlice';
import patientInformationReducer from '../features/patientInformation/patientInformationSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

/**
 * @desc Global Redux Store, Contains reducers of slices
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patientInformationRegistration: patientInformationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
