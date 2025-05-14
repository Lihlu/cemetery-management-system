"use client";
import { useEffect } from "react";
import { Button, Spin, Row, Col } from "antd";
import { useAuthState } from "@/providers/auth";
import {
  useDeceasedPersonActions,
  useDeceasedPersonState,
} from "@/providers/deceased-person";
import DeceasedCard from "@/components/public-user/deceased-card/deceased-card";

const DeceasedPage = () => {
  const { registeredDeceasedPersons, isPending } = useDeceasedPersonState();
  const { getByUserId } = useDeceasedPersonActions();
  const { currentUser } = useAuthState();

  useEffect(() => {
    if (currentUser?.id) {
      getByUserId(currentUser.id);
    }
  }, [currentUser]);

  const handleRegisterNew = () => {
    //TODO: Implement the logic to navigate to the registration page
  };

  return (
    <>
      <Button
        type="primary"
        onClick={handleRegisterNew}
        style={{ marginBottom: 16 }}
      >
        Register New Person
      </Button>

      {isPending ? (
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {registeredDeceasedPersons?.map((person) => (
            <Col key={person.id} xs={24} sm={12} md={8} lg={6}>
              <DeceasedCard person={person} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default DeceasedPage;
