"use client";
import { Table, Button } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { IBooking } from "@/providers/booking/models";

interface BookingTableProps {
  bookings: IBooking[];
  onView: (booking: IBooking) => void;
  onEdit: (booking: IBooking) => void;
  styles;
}

const BookingTable = ({
  bookings,
  onView,
  onEdit,
  styles,
}: BookingTableProps) => {
  const columns = [
    {
      title: "Deceased Person",
      dataIndex: ["deceasedPerson", "fullName"],
      key: "deceasedPerson",
      render: (_, record: IBooking) => (
        <p>{record.deceasedPerson?.firstName || "N/A"}</p>
      ),
    },
    {
      title: "Funeral Date & Time",
      dataIndex: "dateAndTimeOfFuneral",
      key: "dateAndTimeOfService",
      render: (text: string) => {
        const date = new Date(text);
        return isNaN(date.getTime()) ? "N/A" : date.toLocaleString();
      },
    },
    {
      title: "Special Requests",
      dataIndex: "specialRequest",
      key: "specialRequest",
      render: (text: string) => <p>{text || "None"}</p>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: IBooking) => (
        <div className={styles.actionButtons}>
          <Button
            type="text"
            icon={<EditOutlined />}
            className={styles.actionButton}
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="text"
            icon={<EyeOutlined />}
            className={styles.actionButton}
            onClick={() => onView(record)}
          >
            View
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={bookings.map((b) => ({ ...b, key: b.id }))}
      pagination={{ pageSize: 10 }}
      className={styles.table}
    />
  );
};

export default BookingTable;
