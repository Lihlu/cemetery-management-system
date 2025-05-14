"use client";
import { createContext } from "react";

export interface IDeceasedPerson {
  id?: number;
  firstName: string;
  lastName: string;
  idNumber: string;
  dateOfBirth: string;
  dateOfDeath: string;
  dateOfFuneral: string;
  graveNumber: string;
  section: string;
  isBuried: boolean;
  registeredBy: number;
}
export interface ISearchDeceasedPerson {
  firstName?: string;
  lastName?: string;
  idNumber?: string;
  graveNumber?: string;
  section?: string;
  isBuried?: boolean;
  dateOfDeathStart?: string;
  dateOfDeathEnd?: string;
}
export interface IDeceasedPersonStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  deceasedPerson?: IDeceasedPerson;
  searchResults?: IDeceasedPerson[];
  registeredDeceasedPersons?: IDeceasedPerson[];
}
export interface IDeceasedPersonActionContext {
  searchDeceasedPerson: (query: ISearchDeceasedPerson) => Promise<void>;
  getByUserId: (userId: number) => Promise<void>;
  resetStateFlags: () => void;
}

export const INITIAL_STATE: IDeceasedPersonStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const DeceasedPersonStateContext =
  createContext<IDeceasedPersonStateContext>(INITIAL_STATE);
export const DeceasedPersonActionContext =
  createContext<IDeceasedPersonActionContext>(undefined);
