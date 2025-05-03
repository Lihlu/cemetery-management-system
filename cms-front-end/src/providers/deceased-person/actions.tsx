import { createAction } from "redux-actions";
import { IDeceasedPerson, IDeceasedPersonStateContext } from "./context";

export enum DeceasedPersonActionEnums {
  searchDeceasedPersonPending = "SEARCH_DECEASED_PERSON_PENDING",
  searchDeceasedPersonSuccess = "SEARCH_DECEASED_PERSON_SUCCESS",
  searchDeceasedPersonError = "SEARCH_DECEASED_PERSON_ERROR",

  resetStateFlagsAction = "RESET_STATE_FLAGS",
}

export const searchDeceasedPersonPending =
  createAction<IDeceasedPersonStateContext>(
    DeceasedPersonActionEnums.searchDeceasedPersonPending,
    () => ({ isPending: true, isSuccess: false, isError: false }),
  );
export const searchDeceasedPersonSuccess = createAction<
  IDeceasedPersonStateContext,
  IDeceasedPerson[]
>(
  DeceasedPersonActionEnums.searchDeceasedPersonSuccess,
  (searchResults: IDeceasedPerson[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    searchResults,
  }),
);
export const searchDeceasedPersonError =
  createAction<IDeceasedPersonStateContext>(
    DeceasedPersonActionEnums.searchDeceasedPersonError,
    () => ({ isPending: false, isSuccess: false, isError: true }),
  );
export const resetStateFlagsAction = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
