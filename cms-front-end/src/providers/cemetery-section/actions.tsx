import { createAction } from "redux-actions";
import { ICemeterySection, ICemeterySectionStateContext } from "./context";

export enum CemeterySectionActionEnums {
  getAllCemeterySectionsPending = "GET_ALL_CEMETERY_SECTIONS_PENDING",
  getAllCemeterySectionsSuccess = "GET_ALL_CEMETERY_SECTIONS_SUCCESS",
  getAllCemeterySectionsError = "GET_ALL_CEMETERY_SECTIONS_ERROR",

  setSelectedSectionAction = "SET_SELECTED_SECTION",
  clearSelectedSectionAction = "CLEAR_SELECTED_SECTION",

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

export const setSelectedSectionAction = createAction<
  ICemeterySectionStateContext,
  ICemeterySection
>(
  CemeterySectionActionEnums.setSelectedSectionAction,
  (section: ICemeterySection) => ({
    selectedSection: section,
  }),
);
export const clearSelectedSectionAction =
  createAction<ICemeterySectionStateContext>(
    CemeterySectionActionEnums.clearSelectedSectionAction,
    () => ({ selectedSection: undefined }),
  );

export const resetStateFlagsAction = createAction<ICemeterySectionStateContext>(
  CemeterySectionActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
