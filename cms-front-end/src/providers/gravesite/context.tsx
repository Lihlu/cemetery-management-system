"use client";
import { createContext } from "react";

export interface IGravesite {
  id: string;
  cemeterySectionId: string;
  siteNumber: string;
  isExtraDeep: boolean;
  graveType: string;
  row: number;
  column: number;
  isReserved: boolean;
  occupant1IdNumber: string;
  occupant2IdNumber: string;
  ownerId: number;
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
  getByOwnerId: (ownerId: number) => void;
  getByCemeterySectionId: (sectionId: string) => void;
  updateGravesite: (gravesite: IGravesite) => void;
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
