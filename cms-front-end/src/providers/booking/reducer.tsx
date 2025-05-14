import { handleActions } from "redux-actions";
import { INITIAL_STATE, IBookingStateContext } from "./context";
import { BookingActionEnums } from "./actions";

export const BookingReducer = handleActions<IBookingStateContext>(
  {
    // Handling get all actions
    [BookingActionEnums.getAllBookingsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.getAllBookingsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.getAllBookingsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling get by id actions
    [BookingActionEnums.getBookingByIdPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.getBookingByIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.getBookingByIdError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling get by user id actions
    [BookingActionEnums.getBookingsByUserIdPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.getBookingsByUserIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.getBookingsByUserIdError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling create actions
    [BookingActionEnums.createBookingPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.createBookingSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.createBookingError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    // Handling update actions
    [BookingActionEnums.updateBookingPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.updateBookingSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.updateBookingError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling delete actions
    [BookingActionEnums.deleteBookingPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.deleteBookingSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [BookingActionEnums.deleteBookingError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),

    // Handling reset state flags actions
    [BookingActionEnums.resetStateFlagsAction]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE,
);
