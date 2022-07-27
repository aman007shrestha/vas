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

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loggedInState, setLogggedInState] = useState({
    userName: '',
    isLoggedIn: false,
  });
  const loginContext = {
    loggedInState,
    setLogggedInState,
  };
  return (
    <AuthContext.Provider value={loginContext}>{children}</AuthContext.Provider>
  );
};
