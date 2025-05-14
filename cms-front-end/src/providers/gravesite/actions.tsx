import { createAction } from "redux-actions";
import { IGravesite, IGravesiteStateContext } from "./context";

export enum GravesiteActionEnums {
  getAllGravesitesPending = "GET_ALL_GRAVESITES_PENDING",
  getAllGravesitesSuccess = "GET_ALL_GRAVESITES_SUCCESS",
  getAllGravesitesError = "GET_ALL_GRAVESITES_ERROR",

  getByOwnerIdPending = "GET_BY_OWNER_ID_PENDING",
  getByOwnerIdSuccess = "GET_BY_OWNER_ID_SUCCESS",
  getByOwnerIdError = "GET_BY_OWNER_ID_ERROR",

  getByCemeterySectionIdPending = "GET_BY_CEMETERY_SECTION_ID_PENDING",
  getByCemeterySectionIdSuccess = "GET_BY_CEMETERY_SECTION_ID_SUCCESS",
  getByCemeterySectionIdError = "GET_BY_CEMETERY_SECTION_ID_ERROR",

  updateGravesitePending = "UPDATE_GRAVESITE_PENDING",
  updateGravesiteSuccess = "UPDATE_GRAVESITE_SUCCESS",
  updateGravesiteError = "UPDATE_GRAVESITE_ERROR",

  resetStateFlagsAction = "RESET_STATE_FLAGS",
}

// Get All Gravesites Actions
export const getAllGravesitesPending = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getAllGravesitesPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const getAllGravesitesSuccess = createAction<
  IGravesiteStateContext,
  IGravesite[]
>(
  GravesiteActionEnums.getAllGravesitesSuccess,
  (gravesiteList: IGravesite[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    gravesiteList,
  }),
);
export const getAllGravesitesError = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getAllGravesitesError,
  () => ({ isPending: false, isSuccess: false, isError: true }),
);

// Get By Owner Actions
export const getByOwnerIdPending = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getByOwnerIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const getByOwnerIdSuccess = createAction<
  IGravesiteStateContext,
  IGravesite[]
>(GravesiteActionEnums.getByOwnerIdSuccess, (gravesiteList: IGravesite[]) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  gravesiteList,
}));
export const getByOwnerIdError = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getByOwnerIdError,
  () => ({ isPending: false, isSuccess: false, isError: true }),
);

// Get By Cemetery Section Actions
export const getByCemeterySectionIdPending =
  createAction<IGravesiteStateContext>(
    GravesiteActionEnums.getByCemeterySectionIdPending,
    () => ({ isPending: true, isSuccess: false, isError: false }),
  );
export const getByCemeterySectionIdSuccess = createAction<
  IGravesiteStateContext,
  IGravesite[]
>(
  GravesiteActionEnums.getByCemeterySectionIdSuccess,
  (gravesiteList: IGravesite[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    gravesiteList,
  }),
);
export const getByCemeterySectionIdError = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getByCemeterySectionIdError,
  () => ({ isPending: false, isSuccess: false, isError: true }),
);

// Update Gravesite Actions
export const updateGravesitePending = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.updateGravesitePending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const updateGravesiteSuccess = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.updateGravesiteSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  }),
);
export const updateGravesiteError = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.updateGravesiteError,
  () => ({ isPending: false, isSuccess: false, isError: true }),
);

export const resetStateFlagsAction = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
