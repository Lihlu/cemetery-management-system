"use client";
import { IBooking } from "@/providers/booking/models";
import { Modal, message } from "antd";
import { useEffect, useState } from "react";

interface BookingModalProps {
  visible: boolean;
  booking: IBooking | null;
  editMode: boolean;
  onClose: () => void;
  onSave: (booking: IBooking) => Promise<void>;
}

const BookingModal = ({
  visible,
  booking,
  editMode,
  onClose,
  onSave,
}: BookingModalProps) => {
  const [currentBooking, setCurrentBooking] = useState<IBooking | null>(
    booking,
  );
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setCurrentBooking(booking);
  }, [booking]);

  const formatDateForDisplay = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "N/A" : date.toLocaleString();
  };

  const handleOk = async () => {
    if (!currentBooking) return;

    if (!currentBooking.dateAndTimeOfService) {
      message.error("Funeral date and time is required.");
      return;
    }

    setIsSaving(true);
    try {
      await onSave(currentBooking);
      message.success("Booking updated successfully!");
      onClose();
    } catch {
      message.error("Failed to update booking.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal
      title={editMode ? "Edit Booking" : "Booking Details"}
      open={visible}
      onCancel={onClose}
      onOk={editMode ? handleOk : onClose}
      okText={editMode ? "Save" : "OK"}
      confirmLoading={isSaving}
      destroyOnHidden
    >
      {currentBooking && (
        <div>
          <div style={{ marginBottom: 16 }}>
            <p>
              <strong>Deceased Person:</strong>{" "}
              {`${currentBooking.deceasedPerson?.firstName ?? ""} ${currentBooking.deceasedPerson?.lastName ?? ""}`}
            </p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <strong>Service Date & Time:</strong>
            {editMode ? (
              <input
                type="datetime-local"
                onChange={(e) =>
                  setCurrentBooking({
                    ...currentBooking,
                    dateAndTimeOfService: e.target.value,
                  })
                }
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            ) : (
              <div>
                {formatDateForDisplay(currentBooking.dateAndTimeOfService)}
              </div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            {editMode ? (
              <>
                <strong>Special Requests:</strong>
                <textarea
                  value={currentBooking.specialRequest || ""}
                  onChange={(e) =>
                    setCurrentBooking({
                      ...currentBooking,
                      specialRequest: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    minHeight: 80,
                    padding: 8,
                    marginTop: 4,
                  }}
                />
              </>
            ) : (
              <>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {formatDateForDisplay(
                    currentBooking.deceasedPerson?.dateOfBirth,
                  )}
                </p>
                <p>
                  <strong>Date of Death:</strong>{" "}
                  {formatDateForDisplay(
                    currentBooking.deceasedPerson?.dateOfDeath,
                  )}
                </p>
                <p>
                  <strong>Special Requests:</strong>{" "}
                  {currentBooking.specialRequest || "None"}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default BookingModal;
