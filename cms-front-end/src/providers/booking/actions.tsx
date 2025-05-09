import { createAction } from "redux-actions";
import { IBooking, IBookingStateContext } from "./context";

export enum BookingActionEnums {
  getAllBookingsPending = "GET_ALL_BOOKINGS_PENDING",
  getAllBookingsSuccess = "GET_ALL_BOOKINGS_SUCCESS",
  getAllBookingsError = "GET_ALL_BOOKINGS_ERROR",

  getBookingByIdPending = "GET_BOOKING_BY_ID_PENDING",
  getBookingByIdSuccess = "GET_BOOKING_BY_ID_SUCCESS",
  getBookingByIdError = "GET_BOOKING_BY_ID_ERROR",

  getBookingsByUserIdPending = "GET_BOOKINGS_BY_USER_ID_PENDING",
  getBookingsByUserIdSuccess = "GET_BOOKINGS_BY_USER_ID_SUCCESS",
  getBookingsByUserIdError = "GET_BOOKINGS_BY_USER_ID_ERROR",

  createBookingPending = "CREATE_BOOKING_PENDING",
  createBookingSuccess = "CREATE_BOOKING_SUCCESS",
  createBookingError = "CREATE_BOOKING_ERROR",

  updateBookingPending = "UPDATE_BOOKING_PENDING",
  updateBookingSuccess = "UPDATE_BOOKING_SUCCESS",
  updateBookingError = "UPDATE_BOOKING_ERROR",

  deleteBookingPending = "DELETE_BOOKING_PENDING",
  deleteBookingSuccess = "DELETE_BOOKING_SUCCESS",
  deleteBookingError = "DELETE_BOOKING_ERROR",

  resetStateFlagsAction = "RESET_STATE_FLAGS_ACTION",
}

export const getAllBookingsPending = createAction<IBookingStateContext>(
  BookingActionEnums.getAllBookingsPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);

export const getAllBookingsSuccess = createAction<
  IBookingStateContext,
  IBooking[]
>(BookingActionEnums.getAllBookingsSuccess, (bookings) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  bookings,
}));

export const getAllBookingsError = createAction<IBookingStateContext, string>(
  BookingActionEnums.getAllBookingsError,
  () => ({
    isPending: false,
    isSuccess: false,
    isError: true,
  }),
);

export const getBookingByIdPending = createAction<IBookingStateContext>(
  BookingActionEnums.getBookingByIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const getBookingByIdSuccess = createAction<
  IBookingStateContext,
  IBooking
>(BookingActionEnums.getBookingByIdSuccess, (booking) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  booking,
}));
export const getBookingByIdError = createAction<IBookingStateContext, string>(
  BookingActionEnums.getBookingByIdError,
  () => ({
    isPending: false,
    isSuccess: false,
    isError: true,
  }),
);
export const getBookingsByUserIdPending = createAction<IBookingStateContext>(
  BookingActionEnums.getBookingsByUserIdPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const getBookingsByUserIdSuccess = createAction<
  IBookingStateContext,
  IBooking[]
>(BookingActionEnums.getBookingsByUserIdSuccess, (bookingList) => ({
  isPending: false,
  isSuccess: true,
  isError: false,
  bookingList,
}));
export const getBookingsByUserIdError = createAction<
  IBookingStateContext,
  string
>(BookingActionEnums.getBookingsByUserIdError, () => ({
  isPending: false,
  isSuccess: false,
  isError: true,
}));
export const createBookingPending = createAction<IBookingStateContext>(
  BookingActionEnums.createBookingPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const createBookingSuccess = createAction<IBookingStateContext>(
  BookingActionEnums.createBookingSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  }),
);
export const createBookingError = createAction<IBookingStateContext, string>(
  BookingActionEnums.createBookingError,
  () => ({
    isPending: false,
    isSuccess: false,
    isError: true,
  }),
);
export const updateBookingPending = createAction<IBookingStateContext>(
  BookingActionEnums.updateBookingPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const updateBookingSuccess = createAction<IBookingStateContext>(
  BookingActionEnums.updateBookingSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  }),
);
export const updateBookingError = createAction<IBookingStateContext, string>(
  BookingActionEnums.updateBookingError,
  () => ({
    isPending: false,
    isSuccess: false,
    isError: true,
  }),
);

export const deleteBookingPending = createAction<IBookingStateContext>(
  BookingActionEnums.deleteBookingPending,
  () => ({ isPending: true, isSuccess: false, isError: false }),
);
export const deleteBookingSuccess = createAction<IBookingStateContext>(
  BookingActionEnums.deleteBookingSuccess,
  () => ({
    isPending: false,
    isSuccess: true,
    isError: false,
  }),
);
export const deleteBookingError = createAction<IBookingStateContext, string>(
  BookingActionEnums.deleteBookingError,
  () => ({
    isPending: false,
    isSuccess: false,
    isError: true,
  }),
);

export const resetStateFlagsAction = createAction<IBookingStateContext>(
  BookingActionEnums.resetStateFlagsAction,
  () => ({ isPending: false, isSuccess: false, isError: false }),
);
