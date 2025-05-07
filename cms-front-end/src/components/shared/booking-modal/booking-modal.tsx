"use client";
import { Modal, message } from "antd";
import { useEffect, useState } from "react";
import { IBooking } from "@/providers/booking/context";

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

  const formatDateForInput = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 16);
  };

  const formatDateForDisplay = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "N/A" : date.toLocaleString();
  };

  const handleOk = async () => {
    if (!currentBooking) return;

    if (!currentBooking.dateAndTimeOfFuneral) {
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
      destroyOnClose
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
            <strong>Funeral Date & Time:</strong>
            {editMode ? (
              <input
                type="datetime-local"
                value={formatDateForInput(currentBooking.dateAndTimeOfFuneral)}
                onChange={(e) =>
                  setCurrentBooking({
                    ...currentBooking,
                    dateAndTimeOfFuneral: e.target.value,
                  })
                }
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            ) : (
              <div>
                {formatDateForDisplay(currentBooking.dateAndTimeOfFuneral)}
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
