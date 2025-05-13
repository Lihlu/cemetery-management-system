"use client";
import CemeteryMap from "@/components/shared/cemetery-map/cemetery-map";
import {
  useCemeterySectionActions,
  useCemeterySectionState,
} from "@/providers/cemetery-section";
import { Spin } from "antd";
import React, { useEffect } from "react";
import { useStyles } from "./style/style";

const EmployeePage = () => {
  const { sections } = useCemeterySectionState();
  const { getAllSections } = useCemeterySectionActions();
  const { styles } = useStyles();

  useEffect(() => {
    if (sections === undefined) {
      getAllSections();
    }
  }, [sections]);
  return (
    <div>
      <h1>Employee Page</h1>
      {sections ? (
        <CemeteryMap sections={sections} />
      ) : (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default EmployeePage;
