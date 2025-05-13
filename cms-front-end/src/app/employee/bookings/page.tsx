"use client";
import { useBookingActions, useBookingState } from "@/providers/booking";
import { Spin, Table } from "antd";
import { useEffect } from "react";
import { useStyles } from "./style/style";
import dayjs from "dayjs";
import {
  BookingStatusLabels,
  BookingTypeLabels,
} from "@/providers/booking/models";

const BookingsPage = () => {
  const { fullBookingList, isPending } = useBookingState();
  const { getAllBookings } = useBookingActions();
  const { styles } = useStyles();

  useEffect(() => {
    getAllBookings();
  }, []);

  return isPending ? (
    <div className={styles.loadingOverlay}>
      <Spin size="large" />
    </div>
  ) : (
    <Table
      className={styles.table}
      dataSource={fullBookingList}
      loading={isPending}
      rowKey="id"
      columns={[
        {
          title: "Date & Time",
          dataIndex: "dateAndTimeOfService",
          render: (value: string) =>
            value ? dayjs(value).format("YYYY-MM-DD HH:mm") : "N/A",
        },
        {
          title: "Booked By",
          dataIndex: "bookerName",
        },
        {
          title: "Deceased Person",
          dataIndex: "deceasedPersonName",
        },
        {
          title: "Grave Site",
          dataIndex: "graveSiteNumber",
        },
        {
          title: "Booking Type",
          dataIndex: "bookingType",
          render: (value) => BookingTypeLabels[value] || value,
        },
        {
          title: "Status",
          dataIndex: "bookingStatus",
          render: (value) => BookingStatusLabels[value] || value,
        },
        {
          title: "Special Request",
          dataIndex: "specialRequest",
          render: (value: string) => value || "None",
        },
      ]}
    />
  );
};

export default BookingsPage;
