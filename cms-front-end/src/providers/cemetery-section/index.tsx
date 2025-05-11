"use client";
import { useContext, useReducer } from "react";
import { CemeterySectionReducer } from "./reducer";
import { getAxiosInstance } from "@/utils/axios-instance";
import {
  CemeterySectionActionContext,
  CemeterySectionStateContext,
  ICemeterySection,
  INITIAL_STATE,
} from "./context";
import {
  clearSelectedSectionAction,
  getAllCemeterySectionsError,
  getAllCemeterySectionsPending,
  getAllCemeterySectionsSuccess,
  resetStateFlagsAction,
  setSelectedSectionAction,
} from "./actions";

export const CemeterySectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CemeterySectionReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getAllSections = async () => {
    dispatch(getAllCemeterySectionsPending());
    const endpoint = "/api/services/app/CemeterySection/GetAll";

    await instance
      .get(endpoint)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getAllCemeterySectionsSuccess(response.data.result.items));
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(getAllCemeterySectionsError());
      });
  };

  const setSelectedSection = (section: ICemeterySection) => {
    dispatch(setSelectedSectionAction(section));
  };
  const clearSelectedSection = () => {
    dispatch(clearSelectedSectionAction());
  };

  const resetStateFlags = async () => {
    dispatch(resetStateFlagsAction());
  };

  return (
    <CemeterySectionStateContext.Provider value={state}>
      <CemeterySectionActionContext.Provider
        value={{
          getAllSections,
          setSelectedSection,
          clearSelectedSection,
          resetStateFlags,
        }}
      >
        {children}
      </CemeterySectionActionContext.Provider>
    </CemeterySectionStateContext.Provider>
  );
};

export const useCemeterySectionState = () => {
  const context = useContext(CemeterySectionStateContext);
  if (!context) {
    throw new Error(
      "useCemeterySectionState must be used within a CemeterySectionProvider",
    );
  }
  return context;
};
export const useCemeterySectionActions = () => {
  const context = useContext(CemeterySectionActionContext);
  if (!context) {
    throw new Error(
      "useCemeterySectionActions must be used within a CemeterySectionProvider",
    );
  }
  return context;
};
