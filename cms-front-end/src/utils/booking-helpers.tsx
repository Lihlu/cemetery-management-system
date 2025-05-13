import {
  ReflistBookingStatus,
  ReflistBookingType,
} from "@/providers/booking/models";
import { Tag } from "antd";

export const getStatusTag = (status: ReflistBookingStatus) => {
  switch (status) {
    case ReflistBookingStatus.Pending:
      return <Tag color="orange">Pending</Tag>;
    case ReflistBookingStatus.Confirmed:
      return <Tag color="blue">Confirmed</Tag>;
    case ReflistBookingStatus.Cancelled:
      return <Tag color="red">Cancelled</Tag>;
    case ReflistBookingStatus.Completed:
      return <Tag color="green">Completed</Tag>;
    default:
      return <Tag>Unknown</Tag>;
  }
};

export const getTypeTag = (type: ReflistBookingType) => {
  switch (type) {
    case ReflistBookingType.Burial:
      return <Tag color="gold">Burial</Tag>;
    case ReflistBookingType.Cremation:
      return <Tag color="volcano">Cremation</Tag>;
    case ReflistBookingType.Exhumation:
      return <Tag color="purple">Exhumation</Tag>;
    default:
      return <Tag>Unknown</Tag>;
  }
};
