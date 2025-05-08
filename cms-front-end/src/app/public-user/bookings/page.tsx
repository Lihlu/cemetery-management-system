"use client";
import { useEffect, useState } from "react";
import { useAuthState } from "@/providers/auth";
import { useBookingActions, useBookingState } from "@/providers/booking";
import Link from "next/link";
import { Button, Typography, Spin, Empty, Alert } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useStyles } from "./style/style";
import BookingModal from "@/components/shared/booking-modal/booking-modal";
import BookingTable from "@/components/shared/booking-table/booking-table";
import { IBooking } from "@/providers/booking/context";

const { Title } = Typography;

const BookingsPage = () => {
  const { styles } = useStyles();
  const { currentUser } = useAuthState();
  const { bookingList, isPending, isError } = useBookingState();
  const { getBookingsByUserId, updateBooking } = useBookingActions();

  const [selectedBooking, setSelectedBooking] = useState<IBooking | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (currentUser?.id && bookingList === undefined) {
      getBookingsByUserId(currentUser.id.toString());
    }
  }, [currentUser, bookingList]);

  const openModal = (booking: IBooking, editMode = false) => {
    setSelectedBooking(booking);
    setIsEditMode(editMode);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setIsEditMode(false);
    setIsModalVisible(false);
  };

  const handleSaveBooking = async (updatedBooking: IBooking) => {
    await updateBooking(updatedBooking);
  };

  const showContent = () => {
    return bookingList?.length ? (
      <BookingTable
        bookings={bookingList}
        onEdit={(b) => openModal(b, true)}
        onView={(b) => openModal(b, false)}
        styles={styles}
      />
    ) : (
      <div className={styles.emptyState}>
        <Empty
          description="You don't have any bookings yet"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
        <Link href="/public-user/bookings/new">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className={styles.submitButton}
          >
            Create your first booking
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div className={styles.contentCard}>
      <div className={styles.pageHeader}>
        <Title level={4} className={styles.formTitle}>
          My Bookings
        </Title>
        <Link href="/public-user/bookings/new">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className={styles.submitButton}
          >
            Create New Booking
          </Button>
        </Link>
      </div>

      {isError && (
        <Alert
          message="Error"
          description="An error occurred loading your bookings. Please try again."
          type="error"
          showIcon
          className={styles.alert}
        />
      )}

      {isPending ? (
        <div className={styles.loadingContainer}>
          <Spin size="large" />
        </div>
      ) : (
        showContent()
      )}

      <BookingModal
        visible={isModalVisible}
        booking={selectedBooking}
        editMode={isEditMode}
        onClose={closeModal}
        onSave={handleSaveBooking}
      />
    </div>
  );
};

export default BookingsPage;
