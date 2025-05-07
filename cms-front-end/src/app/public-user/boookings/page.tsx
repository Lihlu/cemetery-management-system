"use client";
import { useEffect } from "react";
import { useAuthState } from "@/providers/auth";
import { useBookingActions, useBookingState } from "@/providers/booking/index";
import Link from "next/link";
import { Button, Table, Tag, Typography, Spin, Empty, Alert } from "antd";
import { PlusOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useStyles } from "./style/style";

const { Title, Text } = Typography;

const BookingsPage = () => {
  const { styles } = useStyles();
  const { currentUser } = useAuthState();
  const { bookingList, isPending, isError } = useBookingState();
  const { getBookingsByUserId } = useBookingActions();

  useEffect(() => {
    if (currentUser?.id) {
      getBookingsByUserId(currentUser.id.toString());
    }
  }, [currentUser]);

  const getStatusTag = (status: string) => {
    let className;
    switch (status) {
      case "Confirmed":
        className = styles.statusTagConfirmed;
        break;
      case "Pending":
        className = styles.statusTagPending;
        break;
      case "Cancelled":
        className = styles.statusTagCancelled;
        break;
      case "Completed":
        className = styles.statusTagCompleted;
        break;
      default:
        className = "";
    }

    return <Tag className={className}>{status}</Tag>;
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: any) => (
        <Link href={`/public-user/bookings/${record.id}`}>
          <Text strong className={styles.primaryText}>
            {text}
          </Text>
        </Link>
      ),
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <div className={styles.actionButtons}>
          <Link href={`/public-user/bookings/edit/${record.id}`}>
            <Button
              type="text"
              icon={<EditOutlined />}
              className={styles.actionButton}
            >
              Edit
            </Button>
          </Link>
          <Link href={`/public-user/bookings/${record.id}`}>
            <Button
              type="text"
              icon={<EyeOutlined />}
              className={styles.actionButton}
            >
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  const renderContent = () => {
    if (isPending && !bookingList.length) {
      return (
        <div className={styles.loadingContainer}>
          <Spin size="large" />
        </div>
      );
    }

    if (bookingList.length === 0) {
      return (
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
    }

    return (
      <Table
        columns={columns}
        dataSource={bookingList.map((booking) => ({
          ...booking,
          key: booking.id,
        }))}
        className={styles.table}
        pagination={{ pageSize: 10 }}
      />
    );
  };

  return (
    <div className={styles.pageContainer}>
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

        {renderContent()}
      </div>
    </div>
  );
};

export default BookingsPage;
