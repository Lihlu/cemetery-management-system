import { Card, Button, Typography, Space } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import { BookingStatusLabels, BookingTypeLabels, IBookingWithBookerInfo } from "@/providers/booking/models";
import dayjs from "dayjs";
import React from "react";

const { Text, Title } = Typography;

interface Props {
  bookings: IBookingWithBookerInfo[];
  onEdit: (booking: IBookingWithBookerInfo) => void;
  onView: (booking: IBookingWithBookerInfo) => void;
  styles: Record<string, string>;
}

const BookingCardList = ({ bookings, onEdit, onView, styles }: Props) => {
  return (
    <div className={styles.cardContainer}>
      {bookings.map((booking) => (
        <Card
          key={booking.id}
          title={
            <div className={styles.cardHeader}>
              <Title level={5} style={{ margin: 0 }}>
                {booking.bookerName}
              </Title>
              <div className={styles.cardActions}>
                <Button
                  icon={<EyeOutlined />}
                  onClick={() => onView(booking)}
                  className={styles.viewButton}
                />
                <Button
                  icon={<EditOutlined />}
                  onClick={() => onEdit(booking)}
                  className={styles.editButton}
                />
              </div>
            </div>
          }
          className={styles.card}
        >
          <Space direction="vertical" size="small">
            <Text>
              <strong>Deceased:</strong> {booking.deceasedPersonName}
            </Text>
            <Text>
              <strong>Email:</strong> {booking.bookerEmail}
            </Text>
            <Text>
              <strong>Grave Site:</strong> {booking.graveSiteNumber}
            </Text>
            <Text>
              <strong>Date & Time:</strong>{" "}
              {dayjs(booking.dateAndTimeOfService).format("DD MMM YYYY, h:mm A")}
            </Text>
            <Text>
              <strong>Booking Type:</strong>{" "}
              {BookingTypeLabels[booking.bookingType]}
            </Text>
            <Text>
              <strong>Status:</strong>{" "}
              {BookingStatusLabels[booking.bookingStatus]}
            </Text>
          </Space>
        </Card>
      ))}
    </div>
  );
};

export default BookingCardList;
