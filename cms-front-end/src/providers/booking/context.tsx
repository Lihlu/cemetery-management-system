"use client";
import { createContext } from "react";

export interface IBooking {
    id: string;
    bookerId: string;
    deceasedPersonId: string;
    gravesiteId: string;
    dateAndTimeOfService: string;
    specillRequests: string;
}

export interface IBookingStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    booking?: IBooking;
    bookingList?: IBooking[];
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