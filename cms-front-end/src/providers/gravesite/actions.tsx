import { createAction } from "redux-actions";
import { IGravesite, IGravesiteStateContext } from "./context";

export enum GravesiteActionEnums {
  getAllGravesitesPending = "GET_ALL_GRAVESITES_PENDING",
  getAllGravesitesSuccess = "GET_ALL_GRAVESITES_SUCCESS",
  getAllGravesitesError = "GET_ALL_GRAVESITES_ERROR",

  getByOwnerIdPending = "GET_BY_OWNER_ID_PENDING",
  getByOwnerIdSuccess = "GET_BY_OWNER_ID_SUCCESS",
  getByOwnerIdError = "GET_BY_OWNER_ID_ERROR",

  resetStateFlagsAction = "RESET_STATE_FLAGS",
}
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

export const resetStateFlagsAction = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
