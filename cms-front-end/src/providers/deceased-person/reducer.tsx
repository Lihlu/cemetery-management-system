import { handleActions } from "redux-actions";
import { INITIAL_STATE, IDeceasedPersonStateContext } from "./context";
import { DeceasedPersonActionEnums } from "./actions";

export const DeceasedPersonReducer = handleActions<IDeceasedPersonStateContext>(
  {
    // Handling search actions
    [DeceasedPersonActionEnums.searchDeceasedPersonPending]: (
      state,
      action,
    ) => ({
      ...state,
      ...action.payload,
    }),
    [DeceasedPersonActionEnums.searchDeceasedPersonSuccess]: (
      state,
      action,
    ) => ({
      ...state,
      ...action.payload,
    }),
    [DeceasedPersonActionEnums.searchDeceasedPersonError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling getByUserId actions
    [DeceasedPersonActionEnums.getByUserIdPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [DeceasedPersonActionEnums.getByUserIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [DeceasedPersonActionEnums.getByUserIdError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling createDeceasedPerson actions
    [DeceasedPersonActionEnums.createDeceasedPersonPending]: (
      state,
      action,
    ) => ({
      ...state,
      ...action.payload,
    }),
    [DeceasedPersonActionEnums.createDeceasedPersonSuccess]: (
      state,
      action,
    ) => ({
      ...state,
      ...action.payload,
    }),
    [DeceasedPersonActionEnums.createDeceasedPersonError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling resetStateFlags actions
    [DeceasedPersonActionEnums.resetStateFlagsAction]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
