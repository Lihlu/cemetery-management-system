import { useState } from "react";
import { Button, Modal, Form, Input, DatePicker, Switch } from "antd";
import { IDeceasedPerson } from "@/providers/deceased-person/context";
import { useDeceasedPersonActions } from "@/providers/deceased-person";
import { useAuthState } from "@/providers/auth";

const RegisterDeceasedModal: React.FC = () => {
  const { createDeceasedPerson } = useDeceasedPersonActions();
  const { currentUser } = useAuthState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleFinish = (values: IDeceasedPerson) => {
    const newDeceasedPerson: IDeceasedPerson = {
      ...values,
      registeredBy: currentUser?.id,
    };
    createDeceasedPerson(newDeceasedPerson);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
        Register New Person
      </Button>

      <Modal
        title="Register New Deceased Person"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        okText="Register"
      >
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter last name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="ID Number"
            name="idNumber"
            rules={[{ required: true, message: "Please enter ID number" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Date of Birth" name="dateOfBirth">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Date of Death" name="dateOfDeath">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Date of Funeral" name="dateOfFuneral">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Grave Number" name="graveNumber">
            <Input />
          </Form.Item>

          <Form.Item label="Section" name="section">
            <Input />
          </Form.Item>

          <Form.Item
            label="Is Buried"
            name="isBuried"
            valuePropName="checked"
            initialValue={false}
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default RegisterDeceasedModal;
