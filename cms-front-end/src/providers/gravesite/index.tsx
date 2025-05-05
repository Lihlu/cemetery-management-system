"use client";
import { useContext, useReducer } from "react";
import { GravesiteReducer } from "./reducer";
import {
  GravesiteActionContext,
  GravesiteStateContext,
  INITIAL_STATE,
} from "./context";
import {
  resetStateFlagsAction,
  getAllGravesitesError,
  getAllGravesitesPending,
  getAllGravesitesSuccess,
} from "./actions";
import { getAxiosInstance } from "@/utils/axios-instance";

export const GravesiteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(GravesiteReducer, INITIAL_STATE);
  const instance = getAxiosInstance();
  const getAllGravesites = async () => {
    dispatch(getAllGravesitesPending());

    const endpoint: string = `/api/services/app/GraveSite/GetAll`;

    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getAllGravesitesSuccess(response.data.result.items));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getAllGravesitesError());
      });
  };
  const resetStateFlags = () => {
    dispatch(resetStateFlagsAction());
  };
  return (
    <GravesiteStateContext.Provider value={state}>
      <GravesiteActionContext.Provider
        value={{
          getAllGravesites,
          resetStateFlags,
        }}
      >
        {children}
      </GravesiteActionContext.Provider>
    </GravesiteStateContext.Provider>
  );
};

export const useGravesiteState = () => {
  const context = useContext(GravesiteStateContext);
  if (context === undefined) {
    throw new Error(
      "useGravesiteState must be used within a GravesiteProvider",
    );
  }
  return context;
};
export const useGravesiteActions = () => {
  const context = useContext(GravesiteActionContext);
  if (context === undefined) {
    throw new Error(
      "useGravesiteActions must be used within a GravesiteProvider",
    );
  }
  return context;
};
