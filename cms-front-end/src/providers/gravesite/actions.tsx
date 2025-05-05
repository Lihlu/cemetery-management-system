import { createAction } from "redux-actions";
import { IGravesite, IGravesiteStateContext } from "./context";

export enum GravesiteActionEnums {
  getAllGravesitesPending = "GET_ALL_GRAVESITES_PENDING",
  getAllGravesitesSuccess = "GET_ALL_GRAVESITES_SUCCESS",
  getAllGravesitesError = "GET_ALL_GRAVESITES_ERROR",

  getBySectionIdPending = "GET_BY_SECTION_ID_PENDING",
  getBySectionIdSuccess = "GET_BY_SECTION_ID_SUCCESS",
  getBySectionIdError = "GET_BY_SECTION_ID_ERROR",

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

export const getBySectionIdPending = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getAllGravesitesPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const getBySectionIdSuccess = createAction<
  IGravesiteStateContext,
  IGravesite[]
>(
  GravesiteActionEnums.getBySectionIdSuccess,
  (gravesiteList: IGravesite[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    gravesiteList,
  }),
);
export const getBySectionIdError = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.getBySectionIdError,
  () => ({ isPending: false, isSuccess: false, isError: true }),
);

export const resetStateFlagsAction = createAction<IGravesiteStateContext>(
  GravesiteActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
