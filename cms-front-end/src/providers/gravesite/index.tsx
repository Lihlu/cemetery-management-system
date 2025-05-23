"use client";
import { useContext, useReducer } from "react";
import { GravesiteReducer } from "./reducer";
import {
  GravesiteActionContext,
  GravesiteStateContext,
  IGravesite,
  INITIAL_STATE,
} from "./context";
import {
  resetStateFlagsAction,
  getAllGravesitesError,
  getAllGravesitesPending,
  getAllGravesitesSuccess,
  getByOwnerIdPending,
  getByOwnerIdSuccess,
  getByOwnerIdError,
  getByCemeterySectionIdError,
  getByCemeterySectionIdSuccess,
  getByCemeterySectionIdPending,
  updateGravesitePending,
  updateGravesiteSuccess,
  updateGravesiteError,
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
      .get(endpoint, {
        params: { skipCount: 0, maxResultCount: 1000, sorting: "siteNumber" },
      })
      .then((response) => {
        dispatch(getAllGravesitesSuccess(response?.data?.result?.items));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getAllGravesitesError());
      });
  };

  const getByOwnerId = async (ownerId: number) => {
    dispatch(getByOwnerIdPending());

    const endpoint: string = `/api/services/app/GraveSite/GetByOwnerId?ownerId=${ownerId}`;

    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getByOwnerIdSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getByOwnerIdError);
      });
  };

  const getByCemeterySectionId = async (sectionId: string) => {
    dispatch(getByCemeterySectionIdPending());

    const endpoint: string = `/api/services/app/GraveSite/GetBySectionId?sectionId=${sectionId}`;

    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getByCemeterySectionIdSuccess(response?.data?.result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getByCemeterySectionIdError);
      });
  };

  const updateGravesite = async (gravesite: IGravesite) => {
    dispatch(updateGravesitePending());

    const endpoint: string = `/api/services/app/GraveSite/Update`;

    await instance
      .put(endpoint, gravesite)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateGravesiteSuccess());
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateGravesiteError());
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
          getByOwnerId,
          getByCemeterySectionId,
          updateGravesite,
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
      "useGravesiteState must be used within a GravesiteProvider"
    );
  }
  return context;
};
export const useGravesiteActions = () => {
  const context = useContext(GravesiteActionContext);
  if (context === undefined) {
    throw new Error(
      "useGravesiteActions must be used within a GravesiteProvider"
    );
  }
  return context;
};
