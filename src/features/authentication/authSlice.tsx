import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  email: string;
  isLoggedIn: boolean;
  isAdmin: boolean;
}

/**
 *
 * @returns userDetail from localStorage if present else initialize
 */
const getInitialLocalData = () => {
  const localData = localStorage.getItem('userDetail') as string;
  return !!localData
    ? JSON.parse(localData)
    : {
        email: '',
        isLoggedIn: false,
        isAdmin: false,
      };
};
/**
 * @reducers
 *
 */
const authSlice = createSlice({
  name: 'authSlice',
  initialState: getInitialLocalData(),
  reducers: {
    register: (
      state: UserDetails,
      action: PayloadAction<{
        email: string;
        password: string;
      }>
    ) => {
      // register call
      const { email, password } = action.payload;
      state.email = email;
      console.log('User Register Call', password);
    },
    /**
     *
     * @param state state of slice : username, isLoggedIn, isAdmin
     * @param action has payload of username and password
     * @desc  API call for authentication, isAdmin  bool assignment, setsLocalStorage(username, isAdmin, isLoggedIn)
     */
    logIn: (
      state: UserDetails,
      action: PayloadAction<{
        email: string;
        password: string;
      }>
    ) => {
      state.isAdmin = false;
      // API Call with username and password
      const { email, password } = action.payload;

      // Dummy Admin assignment
      if (email === 'admin' && password === 'admin') {
        state.isAdmin = true;
      }

      state.email = email;
      state.isLoggedIn = true;

      const localStorageData: UserDetails = {
        email: state.email,
        isLoggedIn: state.isLoggedIn,
        isAdmin: state.isAdmin,
      };
      localStorage.setItem('userDetail', JSON.stringify(localStorageData));
    },
    /**
     *
     * @param state state of slice : username, isLoggedIn, isAdmin
     * @desc removes UserDetail from localStorage, resets state value for auth
     */
    logOut: (state: UserDetails) => {
      localStorage.removeItem('userDetail');
      state.email = '';
      state.isLoggedIn = false;
      state.isAdmin = false;
    },
  },
});

export const { logIn, logOut, register } = authSlice.actions;
export default authSlice.reducer;
