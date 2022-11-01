import axios from "axios";
import React, { useCallback, useState, Fragment, useContext } from "react";
import { AXIOS_CONFIG } from "../models/axios-config";
import { ErrorData, HttpError } from "../models/error-model";
import { UserDoc } from "../models/models";

export interface AuthContextInterface {
  id: string | null;
  isAdmin: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const authContextDefaults: AuthContextInterface = {
  id: null,
  isAdmin: false,
  isAuthenticated: false,
  login: (email: string, password: string) => Promise.resolve(),
  logout: () => Promise.resolve(),
};
export const AuthContext = React.createContext<AuthContextInterface>(authContextDefaults);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [id, setId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const { data: user }: { data: UserDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/users/signin`,
        { email, password },
        AXIOS_CONFIG
      );

      if (user) {
        setIsAuthenticated(true);
        setId(user.id);
        setIsAdmin(user.isAdmin);
      }
    } catch (err: any) {
      throw new HttpError(err.message, err.response?.data as ErrorData, err.response?.status);
    }
  }, []);

  const logout = useCallback(async () => {
    setId(null);
    setIsAdmin(false);
    setIsAuthenticated(false);
    await axios.post(`${process.env.BACKEND_URL}/api/users/signout`);
  }, []);

  const value = {
    id,
    isAuthenticated,
    isAdmin,
    login,
    logout,
  };

  return (
    <Fragment>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </Fragment>
  );
};
