import { IDeceasedPerson } from "../deceased-person/context";

export enum ReflistBookingStatus {
  Pending = 1,
  Confirmed = 2,
  Cancelled = 3,
  Completed = 4,
}

export enum ReflistBookingType {
  Burial = 1,
  Cremation = 2,
  Exhumation = 3,
}

export interface IBooking {
  id?: string;
  bookerId: string;
  deceasedPersonId: string;
  deceasedPerson?: IDeceasedPerson;
  graveSiteId: string;
  dateAndTimeOfService: string;
  bookingType: ReflistBookingType;
  bookingStatus: ReflistBookingStatus;
  specialRequest: string;
}

export interface IBookingWithBookerInfo extends IBooking {
  bookerName: string;
  deceasedPersonName: string;
  bookerEmail: string;
  graveSiteNumber: string;
}
export const BookingStatusLabels: Record<ReflistBookingStatus, string> = {
  [ReflistBookingStatus.Pending]: "Pending",
  [ReflistBookingStatus.Confirmed]: "Confirmed",
  [ReflistBookingStatus.Cancelled]: "Cancelled",
  [ReflistBookingStatus.Completed]: "Completed",
};

export const BookingTypeLabels: Record<ReflistBookingType, string> = {
  [ReflistBookingType.Burial]: "Burial",
  [ReflistBookingType.Cremation]: "Cremation",
  [ReflistBookingType.Exhumation]: "Exhumation",
};
