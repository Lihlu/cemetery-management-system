"use client";
import { useContext, useReducer } from "react";
import { DeceasedPersonReducer } from "./reducer";

import {
  DeceasedPersonActionContext,
  DeceasedPersonStateContext,
  INITIAL_STATE,
  ISearchDeceasedPerson,
} from "./context";

import {
  resetStateFlagsAction,
  searchDeceasedPersonError,
  searchDeceasedPersonPending,
  searchDeceasedPersonSuccess,
} from "./actions";
import { getAxiosInstance } from "@/utils/axios-instance";

export const DeceasedPersonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(DeceasedPersonReducer, INITIAL_STATE);
  const instance = getAxiosInstance();
  const searchDeceasedPerson = async (query: ISearchDeceasedPerson) => {
    dispatch(searchDeceasedPersonPending());

    const endpoint: string = `/api/services/app/DeceasedPerson/Search`;

    await instance
      .post(endpoint, query)
      .then((response) => {
        dispatch(searchDeceasedPersonSuccess(response.data.result.items));
      })
      .catch((error) => {
        console.error(error);
        dispatch(searchDeceasedPersonError());
      });
  };
  const resetStateFlags = () => {
    dispatch(resetStateFlagsAction());
  };

  return (
    <DeceasedPersonStateContext.Provider value={state}>
      <DeceasedPersonActionContext.Provider
        value={{
          searchDeceasedPerson,
          resetStateFlags,
        }}
      >
        {children}
      </DeceasedPersonActionContext.Provider>
    </DeceasedPersonStateContext.Provider>
  );
};
export const useDeceasedPersonState = () => {
  const context = useContext(DeceasedPersonStateContext);
  if (context === undefined) {
    throw new Error(
      "useDeceasedPersonState must be used within a DeceasedPersonProvider",
    );
  }
  return context;
};
export const useDeceasedPersonActions = () => {
  const context = useContext(DeceasedPersonActionContext);
  if (context === undefined) {
    throw new Error(
      "useDeceasedPersonActions must be used within a DeceasedPersonProvider",
    );
  }
  return context;
};
