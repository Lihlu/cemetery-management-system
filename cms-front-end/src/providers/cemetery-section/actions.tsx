import { createAction } from "redux-actions";
import { ICemeterySection, ICemeterySectionStateContext } from "./context";

export enum CemeterySectionActionEnums {
  getAllCemeterySectionsPending = "GET_ALL_CEMETERY_SECTIONS_PENDING",
  getAllCemeterySectionsSuccess = "GET_ALL_CEMETERY_SECTIONS_SUCCESS",
  getAllCemeterySectionsError = "GET_ALL_CEMETERY_SECTIONS_ERROR",

  resetStateFlagsAction = "RESET_STATE_FLAGS",
}

export const getAllCemeterySectionsPending =
  createAction<ICemeterySectionStateContext>(
    CemeterySectionActionEnums.getAllCemeterySectionsPending,
    () => ({ isPending: true, isSuccess: false, isError: false }),
  );
export const getAllCemeterySectionsSuccess = createAction<
  ICemeterySectionStateContext,
  ICemeterySection[]
>(
  CemeterySectionActionEnums.getAllCemeterySectionsSuccess,
  (sections: ICemeterySection[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    sections,
  }),
);
export const getAllCemeterySectionsError =
  createAction<ICemeterySectionStateContext>(
    CemeterySectionActionEnums.getAllCemeterySectionsError,
    () => ({ isPending: false, isSuccess: false, isError: true }),
  );
export const resetStateFlagsAction = createAction<ICemeterySectionStateContext>(
  CemeterySectionActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
