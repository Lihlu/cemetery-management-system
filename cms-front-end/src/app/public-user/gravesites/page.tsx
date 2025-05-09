"use client";
import { useEffect } from "react";
import { useAuthState } from "@/providers/auth";
import { useGravesiteActions, useGravesiteState } from "@/providers/gravesite";
import { useStyles } from "./style/style";
import {
  useCemeterySectionActions,
  useCemeterySectionState,
} from "@/providers/cemetery-section";
import { Typography, Row, Col, Spin, Alert } from "antd";
import GravesiteCard from "@/components/shared/gravesite-card/gravesite-card";

const { Title } = Typography;

const GravesitesPage = () => {
  const { styles } = useStyles();
  const { gravesiteList, isPending, isError } = useGravesiteState();
  const { getByOwnerId } = useGravesiteActions();
  const { sections } = useCemeterySectionState();
  const { getAllSections } = useCemeterySectionActions();
  const { currentUser } = useAuthState();

  useEffect(() => {
    if (currentUser?.id) {
      getAllSections();
      getByOwnerId(currentUser.id);
    }
  }, [currentUser]);

  const getSectionName = (sectionId: string) => {
    const section = sections.find((sec) => sec.id === sectionId);
    return section ? section.name : "Unknown Section";
  };

  return (
    <>
      <Title level={2} className={styles.pageTitle}>
        My Gravesites
      </Title>

      {isPending && (
        <div className={styles.loadingContainer}>
          <Spin size="large" />
        </div>
      )}

      {isError && (
        <Alert
          message="Failed to load gravesites."
          type="error"
          showIcon
          className={styles.errorState}
        />
      )}

      {
        <>
          {gravesiteList?.length === 0 ? (
            <div className={styles.emptyState}>
              <Alert
                message="No gravesites found for you."
                type="info"
                showIcon
              />
            </div>
          ) : (
            <Row gutter={[24, 24]}>
              {gravesiteList?.map((gravesite) => (
                <Col key={gravesite.id} xs={24} sm={12} md={8} lg={6}>
                  <GravesiteCard
                    gravesite={gravesite}
                    getSectionName={getSectionName}
                  />
                </Col>
              ))}
            </Row>
          )}
        </>
      }
    </>
  );
};

export default GravesitesPage;
