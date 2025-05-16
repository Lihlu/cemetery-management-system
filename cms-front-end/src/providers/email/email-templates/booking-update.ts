import {
  BookingStatusLabels,
  BookingTypeLabels,
  IBooking,
} from "@/providers/booking/models";

export const bookingUpdateTemplate = (
  name: string,
  updatedBooking: IBooking,
): string => {
  const statusLabel =
    BookingStatusLabels[updatedBooking.bookingStatus] || "N/A";
  const bookingTypeLabel =
    BookingTypeLabels[updatedBooking.bookingType] || "N/A";
  const deceasedPerson = updatedBooking.deceasedPerson;

  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #4B8B3B;">🌿 Booking Update Notification</h2>
      <p>Dear ${name},</p>

      <p>We would like to inform you that your booking with <strong>Memoria</strong> has been successfully <strong>updated</strong>.</p>

      <h3 style="color: #4B8B3B;">📋 Updated Booking Details:</h3>
      <ul>
        <li><strong>Deceased Person:</strong> ${deceasedPerson?.firstName ?? ""} ${deceasedPerson?.lastName ?? ""}</li>
        <li><strong>Service Date & Time:</strong> ${new Date(updatedBooking.serviceDateTime).toLocaleString()}</li>
        <li><strong>Booking Type:</strong> ${bookingTypeLabel}</li>
        <li><strong>Status:</strong> ${statusLabel}</li>
        <li><strong>Special Request:</strong> ${updatedBooking.specialRequest || "None"}</li>
      </ul>

      <p>If you have any questions or further changes to request, please don’t hesitate to contact our team.</p>

      <br />
      <p>Warm regards,<br/>The Memoria Team</p>
    </div>
  `;
};
