import React, { createContext, ReactNode, useState } from 'react';

interface UserDetails {
  userName: string;
  isLoggedIn: boolean;
}

export interface AuthInterface {
  loggedInState: UserDetails;
  setLogggedInState: React.Dispatch<React.SetStateAction<UserDetails>>;
}
export const AuthContext = createContext<AuthInterface | undefined>(undefined);

type Props = {
  children?: ReactNode;
};

const getInitialLocalData = () => {
  const localData = localStorage.getItem('userDetail') as string;
  console.log(localData);

  return !!localData
    ? JSON.parse(localData)
    : {
        userName: '',
        isLoggedIn: false,
      };
  // if (localData !== null) {
  //   console.log(JSON.parse(localData));
  //   return JSON.parse(localData);
  // }
  // return {
  //   userName: '',
  //   isLoggedIn: false,
  // };
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const initialLocalData = getInitialLocalData();
  const [loggedInState, setLogggedInState] = useState(initialLocalData);
  const loginContext = {
    loggedInState,
    setLogggedInState,
  };
  return (
    <AuthContext.Provider value={loginContext}>{children}</AuthContext.Provider>
  );
};
