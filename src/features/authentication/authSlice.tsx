import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  username: string;
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
        username: '',
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
    /**
     *
     * @param state state of slice : username, isLoggedIn, isAdmin
     * @param action has payload of username and password
     * @desc  API call for authentication, isAdmin  bool assignment, setsLocalStorage(username, isAdmin, isLoggedIn)
     */
    logIn: (
      state: UserDetails,
      action: PayloadAction<{
        username: string;
        password: string;
      }>
    ) => {
      state.isAdmin = false;
      // API Call with username and password
      const { username, password } = action.payload;

      // Dummy Admin assignment
      if (username === 'admin' && password === 'admin') {
        state.isAdmin = true;
      }

      state.username = action.payload.username;
      state.isLoggedIn = true;

      const localStorageData: UserDetails = {
        username: state.username,
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
      state.username = '';
      state.isLoggedIn = false;
      state.isAdmin = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
