"use client";
import { createContext } from "react";

export interface ICemeterySection {
  id: string;
  name: string;
  type: string;
  numberOfRows: number;
  totalCapacity: number;
  numberOfAvailableSites: number;
  sitesPerRow: number;
}

export interface ICemeterySectionStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  sections?: ICemeterySection[];
  selectedSection?: ICemeterySection;
}

export interface ICemeterySectionActionContext {
  getAllSections: () => void;
  resetStateFlags: () => void;
  setSelectedSection: (section: ICemeterySection) => void;
  clearSelectedSection: () => void;
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
