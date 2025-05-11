import { handleActions } from "redux-actions";
import { INITIAL_STATE, ICemeterySectionStateContext } from "./context";
import { CemeterySectionActionEnums } from "./actions";

export const CemeterySectionReducer =
  handleActions<ICemeterySectionStateContext>(
    {
      // Handling get all cemetery sections actions
      [CemeterySectionActionEnums.getAllCemeterySectionsPending]: (
        state,
        action,
      ) => ({
        ...state,
        ...action.payload,
      }),
      [CemeterySectionActionEnums.getAllCemeterySectionsSuccess]: (
        state,
        action,
      ) => ({
        ...state,
        ...action.payload,
      }),
      [CemeterySectionActionEnums.getAllCemeterySectionsError]: (
        state,
        action,
      ) => ({
        ...state,
        ...action.payload,
      }),

      // Handling selected section actions
      [CemeterySectionActionEnums.setSelectedSectionAction]: (
        state,
        action,
      ) => ({
        ...state,
        ...action.payload,
      }),
      [CemeterySectionActionEnums.clearSelectedSectionAction]: (
        state,
        action,
      ) => ({
        ...state,
        ...action.payload,
      }),

      [CemeterySectionActionEnums.resetStateFlagsAction]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
    },
    INITIAL_STATE,
  );
