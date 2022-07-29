import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  userName: string;
  isLoggedIn: boolean;
}

const getInitialLocalData = () => {
  const localData = localStorage.getItem('userDetail') as string;
  return !!localData
    ? JSON.parse(localData)
    : {
        userName: '',
        isLoggedIn: false,
      };
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: getInitialLocalData(),
  reducers: {
    logIn: (state: UserDetails, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state: UserDetails) => {
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
