"use client";
import { useEffect, useState } from "react";
import { useAuthState } from "@/providers/auth";
import { useBookingActions } from "@/providers/booking";
import { useGravesiteActions, useGravesiteState } from "@/providers/gravesite";
import {
  useDeceasedPersonActions,
  useDeceasedPersonState,
} from "@/providers/deceased-person";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Typography,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  IBooking,
  ReflistBookingStatus,
  ReflistBookingType,
} from "@/providers/booking/models";
import { IDeceasedPerson } from "@/providers/deceased-person/context";
import { IGravesite } from "@/providers/gravesite/context";

const { Title } = Typography;

const NewBookingPage = () => {
  const { currentUser } = useAuthState();
  const { createBooking } = useBookingActions();
  const { gravesiteList } = useGravesiteState();
  const { getByOwnerId } = useGravesiteActions();
  const { registeredDeceasedPersons } = useDeceasedPersonState();
  const { getByUserId } = useDeceasedPersonActions();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();

  useEffect(() => {
    if (currentUser?.id) {
      getByOwnerId(currentUser.id);
      getByUserId(currentUser.id);
    }
  }, [currentUser]);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const booking: IBooking = {
        bookerId: currentUser!.id.toString(),
        deceasedPersonId: values.deceasedPersonId,
        graveSiteId: values.graveSiteId,
        serviceDateTime: values.serviceDateTime.toISOString(),
        bookingType: values.bookingType,
        bookingStatus: ReflistBookingStatus.Pending,
        specialRequest: values.specialRequest || "",
      };

      await createBooking(booking);
      message.success("Booking created successfully");
      router.push("/public-user/bookings");
    } catch (error) {
      console.error(error);
      message.error("Failed to create booking");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <Title level={3}>Create New Booking</Title>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        disabled={isSubmitting}
      >
        <Form.Item
          name="deceasedPersonId"
          label="Select Deceased Person"
          rules={[
            { required: true, message: "Please select a deceased person" },
          ]}
        >
          <Select placeholder="Select deceased">
            {registeredDeceasedPersons?.map((person: IDeceasedPerson) => (
              <Select.Option key={person.id} value={person.id}>
                {person.firstName} {person.lastName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="graveSiteId"
          label="Select Gravesite"
          rules={[{ required: true, message: "Please select a gravesite" }]}
        >
          <Select placeholder="Select gravesite">
            {gravesiteList?.map((site: IGravesite) => (
              <Select.Option key={site.id} value={site.id}>
                Site {site.siteNumber}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="serviceDateTime"
          label="Date and Time of Service"
          rules={[{ required: true, message: "Please select date and time" }]}
        >
          <DatePicker showTime style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="bookingType"
          label="Booking Type"
          rules={[{ required: true, message: "Please select booking type" }]}
        >
          <Select placeholder="Select booking type">
            <Select.Option value={ReflistBookingType.Burial}>
              Burial
            </Select.Option>
            <Select.Option value={ReflistBookingType.Exhumation}>
              Exhumation
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="specialRequest" label="Special Request">
          <Input.TextArea rows={3} placeholder="Optional special request" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            loading={isSubmitting}
          >
            Submit Booking
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewBookingPage;
