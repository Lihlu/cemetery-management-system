"use client";
import { useBookingActions, useBookingState } from "@/providers/booking";
import { Spin, Table, Select, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { useStyles } from "./style/style";
import dayjs from "dayjs";
import {
  IBooking,
  ReflistBookingStatus,
  ReflistBookingType,
} from "@/providers/booking/models";
import { getTypeTag } from "@/utils/booking-helpers";
import { toast } from "@/providers/toast/toast";

const { Option } = Select;

const BookingsPage = () => {
  const { fullBookingList, isPending } = useBookingState();
  const { getAllBookings, updateBooking } = useBookingActions();
  const [selectedStatus, setSelectedStatus] =
    useState<ReflistBookingStatus | null>(null);

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
          dataIndex: "serviceDateTime",
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
          render: (type: ReflistBookingType) => getTypeTag(type),
        },
        {
          title: "Status",
          dataIndex: "bookingStatus",
          render: (status: ReflistBookingStatus, record: IBooking) => {
            const confirmChange = async () => {
              if (
                selectedStatus == null ||
                selectedStatus === record.bookingStatus
              )
                return;
              try {
                await updateBooking({
                  ...record,
                  bookingStatus: selectedStatus,
                });
                toast("Status updated successfully", "success");
                getAllBookings();
              } catch (error) {
                console.error("Error updating status:", error);
                toast("Failed to update status", "error");
              }
            };

            return (
              <Popconfirm
                title="Change booking status?"
                onConfirm={confirmChange}
                onCancel={() => setSelectedStatus(null)}
                okText="Yes"
                cancelText="No"
              >
                <Select
                  defaultValue={status}
                  onChange={(value: ReflistBookingStatus) =>
                    setSelectedStatus(value)
                  }
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: 130 }}
                >
                  <Option value={ReflistBookingStatus.Pending}>Pending</Option>
                  <Option value={ReflistBookingStatus.Confirmed}>
                    Confirmed
                  </Option>
                  <Option value={ReflistBookingStatus.Cancelled}>
                    Cancelled
                  </Option>
                  <Option value={ReflistBookingStatus.Completed}>
                    Completed
                  </Option>
                </Select>
              </Popconfirm>
            );
          },
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
