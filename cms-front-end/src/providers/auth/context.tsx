"use client";
import { createContext } from "react";

export interface IUser {
  id?: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  password: string;
}

export interface ILoginData {
  userNameOrEmailAddress: string;
  password: string;
}

export interface IAuthStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  currentUser?: IUser;
  accessToken?: string;
  currentRole?: string;
}

export interface IAuthActionContext {
  loginUser: (loginData: ILoginData) => void;
  getCurrentUser: (jwtToken: string) => void;
  signUp: (user: IUser) => void;
  signOut: () => void;
  resetStateFlags: () => void;
  updateRole: (role: string) => void;
}

export const INITIAL_STATE: IAuthStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
  currentUser: null,
};

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext = createContext<IAuthActionContext>(undefined);
