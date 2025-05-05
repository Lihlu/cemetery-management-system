"use client";
import { createContext } from "react";

export interface IGravesite {
  id: number;
  cemeterySectionId: string;
  isExtraDeep: boolean;
  graveType: string;
  occuppant1IdNumber: string;
  occupant2IdNumber: string;
}

export interface IGravesiteStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  gravesite?: IGravesite;
  gravesiteList?: IGravesite[];
}

export interface IGravesiteActionContext {
  getAllGravesites: () => Promise<void>;
  resetStateFlags: () => void;
}

export const INITIAL_STATE: IGravesiteStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const GravesiteStateContext =
  createContext<IGravesiteStateContext>(INITIAL_STATE);
export const GravesiteActionContext =
  createContext<IGravesiteActionContext>(undefined);
