"use client";
import { useContext, useReducer } from "react";
import { BookingReducer } from "./reducer";
import {
  BookingActionContext,
  BookingStateContext,
  INITIAL_STATE,
} from "./context";
import {
  resetStateFlagsAction,
  getAllBookingsError,
  getAllBookingsPending,
  getAllBookingsSuccess,
  getBookingByIdError,
  getBookingByIdPending,
  getBookingByIdSuccess,
  getBookingsByUserIdError,
  getBookingsByUserIdPending,
  getBookingsByUserIdSuccess,
  createBookingError,
  createBookingPending,
  createBookingSuccess,
  updateBookingError,
  updateBookingPending,
  updateBookingSuccess,
  deleteBookingError,
  deleteBookingPending,
  deleteBookingSuccess,
} from "./actions";
import { getAxiosInstance } from "@/utils/axios-instance";
import { IBooking } from "./context";

export const BookingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(BookingReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getAllBookings = async () => {
    dispatch(getAllBookingsPending());

    const endpoint: string = `/api/services/app/Booking/GetAll`;

    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getAllBookingsSuccess(response.data.result.items));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getAllBookingsError());
      });
  };
  const getBookingById = async (id: string) => {
    dispatch(getBookingByIdPending());

    const endpoint: string = `/api/services/app/Booking/Get?Id=${id}`;

    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getBookingByIdSuccess(response.data.result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getBookingByIdError());
      });
  };
  const getBookingsByUserId = async (userId: string) => {
    dispatch(getBookingsByUserIdPending());

    const endpoint: string = `/api/services/app/Booking/GetByUserId?UserId=${userId}`;

    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getBookingsByUserIdSuccess(response.data.result.items));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getBookingsByUserIdError());
      });
  };
  const createBooking = async (booking: IBooking) => {
    dispatch(createBookingPending());

    const endpoint: string = `/api/services/app/Booking/Create`;

    await instance
      .post(endpoint, booking)
      .then((response) => {
        dispatch(createBookingSuccess(response.data.result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createBookingError());
      });
  };
  const updateBooking = async (booking: IBooking) => {
    dispatch(updateBookingPending());

    const endpoint: string = `/api/services/app/Booking/Update`;

    await instance
      .put(endpoint, booking)
      .then((response) => {
        dispatch(updateBookingSuccess(response.data.result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateBookingError());
      });
  };
  const deleteBooking = async (id: string) => {
    dispatch(deleteBookingPending());

    const endpoint: string = `/api/services/app/Booking/Delete?Id=${id}`;

    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteBookingSuccess(response.data.result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteBookingError());
      });
  };
  const resetStateFlags = () => {
    dispatch(resetStateFlagsAction());
  };
  return (
    <BookingStateContext.Provider value={state}>
      <BookingActionContext.Provider
        value={{
          getAllBookings,
          getBookingById,
          getBookingsByUserId,
          createBooking,
          updateBooking,
          deleteBooking,
          resetStateFlags,
        }}
      >
        {children}
      </BookingActionContext.Provider>
    </BookingStateContext.Provider>
  );
};
export const useBookingState = () => {
  const context = useContext(BookingStateContext);
  if (context === undefined) {
    throw new Error("useBookingState must be used within a BookingProvider");
  }
  return context;
};
export const useBookingActions = () => {
  const context = useContext(BookingActionContext);
  if (context === undefined) {
    throw new Error("useBookingAction must be used within a BookingProvider");
  }
  return context;
};
