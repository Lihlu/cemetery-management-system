import { createAction } from "redux-actions";
import { IDeceasedPerson, IDeceasedPersonStateContext } from "./context";

export enum DeceasedPersonActionEnums {
  searchDeceasedPersonPending = "SEARCH_DECEASED_PERSON_PENDING",
  searchDeceasedPersonSuccess = "SEARCH_DECEASED_PERSON_SUCCESS",
  searchDeceasedPersonError = "SEARCH_DECEASED_PERSON_ERROR",

  getByUserIdPending = "GET_BY_USER_ID_PENDING",
  getByUserIdSuccess = "GET_BY_USER_ID_SUCCESS",
  getByUserIdError = "GET_BY_USER_ID_ERROR",

  createDeceasedPersonPending = "CREATE_DECEASED_PERSON_PENDING",
  createDeceasedPersonSuccess = "CREATE_DECEASED_PERSON_SUCCESS",
  createDeceasedPersonError = "CREATE_DECEASED_PERSON_ERROR",

  createMultiplePending = "CREATE_MULTIPLE_PENDING",
  createMultipleSuccess = "CREATE_MULTIPLE_SUCCESS",
  createMultipleError = "CREATE_MULTIPLE_ERROR",

  resetStateFlagsAction = "RESET_STATE_FLAGS",
}

// Search Deceased Person Actions
export const searchDeceasedPersonPending =
  createAction<IDeceasedPersonStateContext>(
    DeceasedPersonActionEnums.searchDeceasedPersonPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
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
  })
);
export const searchDeceasedPersonError =
  createAction<IDeceasedPersonStateContext>(
    DeceasedPersonActionEnums.searchDeceasedPersonError,
    () => ({ isPending: false, isSuccess: false, isError: true })
  );

// Get Deceased Person by User ID Actions
export const getByUserIdPending = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.getByUserIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);
export const getByUserIdSuccess = createAction<
  IDeceasedPersonStateContext,
  IDeceasedPerson[]
>(
  DeceasedPersonActionEnums.getByUserIdSuccess,
  (registeredDeceasedPersons: IDeceasedPerson[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    registeredDeceasedPersons,
  })
);
export const getByUserIdError = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.getByUserIdError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

// Create Deceased Person Actions
export const createDeceasedPersonPending =
  createAction<IDeceasedPersonStateContext>(
    DeceasedPersonActionEnums.createDeceasedPersonPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
  );
export const createDeceasedPersonSuccess = createAction<
  IDeceasedPersonStateContext,
  IDeceasedPerson
>(DeceasedPersonActionEnums.createDeceasedPersonSuccess, () => ({
  isPending: false,
  isSuccess: true,
  isError: false,
}));
export const createDeceasedPersonError =
  createAction<IDeceasedPersonStateContext>(
    DeceasedPersonActionEnums.createDeceasedPersonError,
    () => ({ isPending: false, isSuccess: false, isError: true })
  );

export const createMultiplePending = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.createMultiplePending,
  () => ({
    isPending: true,
    isSuccess: false,
    isError: false,
  })
);

export const createMultipleSuccess = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.createMultipleSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  })
);

export const createMultipleError = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.createMultipleError,
  () => ({
    isPending: false,
    isSuccess: false,
    isError: true,
  })
);

// Reset State Flags Action
export const resetStateFlagsAction = createAction<IDeceasedPersonStateContext>(
  DeceasedPersonActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false })
);
