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

    // Handling get by owner id actions
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

    // Handling get by cemetery section id actions
    [GravesiteActionEnums.getByCemeterySectionIdPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.getByCemeterySectionIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.getByCemeterySectionIdError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling update gravesite actions
    [GravesiteActionEnums.updateGravesitePending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.updateGravesiteSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [GravesiteActionEnums.updateGravesiteError]: (state, action) => ({
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
