"use client";
import { useBookingActions, useBookingState } from "@/providers/booking";
import { Spin, Table } from "antd";
import { useEffect } from "react";

const BookingsPage = () => {
  const { fullBookingList, isPending } = useBookingState();
  const { getAllBookings } = useBookingActions();

  useEffect(() => {
    getAllBookings();
  }, []);

  return isPending ? (
    <div className="loadingOverlay">
      <Spin size="large" />
    </div>
  ) : (
    <Table
      dataSource={fullBookingList}
      loading={isPending}
      rowKey="id"
      columns={[
        {
          title: "Date & Time",
          dataIndex: "dateAndTimeOfFuneral",
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
          title: "Special Request",
          dataIndex: "specialRequest",
        },
      ]}
    />
  );
};

export default BookingsPage;
