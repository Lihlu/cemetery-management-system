"use client";
import { createContext } from "react";

export interface ICemeterySection {
  name: string;
  type: string;
  numberOfRows: number;
  totalCapacity: number;
  numberOfAvailableSites: number;
}

export interface ICemeterySectionStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  sections?: ICemeterySection[];
}

export interface ICemeterySectionActionContext {
  getAllSections: () => void;
  resetStateFlags: () => void;
}

export const INITIAL_STATE: ICemeterySectionStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const CemeterySectionStateContext =
  createContext<ICemeterySectionStateContext>(INITIAL_STATE);
export const CemeterySectionActionContext =
  createContext<ICemeterySectionActionContext>(undefined);
