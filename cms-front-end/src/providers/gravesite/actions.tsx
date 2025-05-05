import { createAction } from "redux-actions";
import { IGravesite, IGravesiteStateContext } from "./context";

export enum GravesiteActionEnums {
  getAllGravesitesPending = "GET_ALL_GRAVESITES_PENDING",
  getAllGravesitesSuccess = "GET_ALL_GRAVESITES_SUCCESS",
  getAllGravesitesError = "GET_ALL_GRAVESITES_ERROR",

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
export const resetStateFlagsAction = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
