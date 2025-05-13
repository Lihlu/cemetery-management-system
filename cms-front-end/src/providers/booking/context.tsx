"use client";
import { createContext } from "react";
import { IDeceasedPerson } from "../deceased-person/context";

export interface IBooking {
  id: string;
  bookerId: string;
  deceasedPersonId: string;
  deceasedPerson: IDeceasedPerson;
  gravesiteId: string;
  dateAndTimeOfFuneral: string;
  specialRequest: string;
}

export interface IBookingWithBookerInfo extends IBooking {
  bookerName: string;
  deceasedPersonName: string;
}

export interface IBookingStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  booking?: IBooking;
  bookingList?: IBooking[];
  fullBookingList?: IBookingWithBookerInfo[];
}
export interface IBookingActionContext {
  getAllBookings: () => Promise<void>;
  getBookingById: (id: string) => Promise<void>;
  getBookingsByUserId: (userId: string) => Promise<void>;
  createBooking: (booking: IBooking) => Promise<void>;
  updateBooking: (booking: IBooking) => Promise<void>;
  deleteBooking: (id: string) => Promise<void>;
  resetStateFlags: () => void;
}

export const INITIAL_STATE: IBookingStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};
export const BookingStateContext =
  createContext<IBookingStateContext>(INITIAL_STATE);
export const BookingActionContext =
  createContext<IBookingActionContext>(undefined);
