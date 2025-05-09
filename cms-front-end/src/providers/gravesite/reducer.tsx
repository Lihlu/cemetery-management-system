import { handleActions } from "redux-actions";
import { INITIAL_STATE, IGravesiteStateContext } from "./context";
import { GravesiteActionEnums } from "./actions";

export const GravesiteReducer = handleActions<IGravesiteStateContext>(
  {
    // Handling get all actions
    [GravesiteActionEnums.getAllGravesitesPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.getAllGravesitesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.getAllGravesitesError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    [GravesiteActionEnums.getByOwnerIdPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.getByOwnerIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.getByOwnerIdError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.resetStateFlagsAction]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
