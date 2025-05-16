"use client";
import {
  useCemeterySectionActions,
  useCemeterySectionState,
} from "@/providers/cemetery-section";
import { Spin } from "antd";
import React, { useEffect } from "react";
import { useStyles } from "./style/style";
import CemeteryCharts from "@/components/employee/cemetery-charts/cemetery-charts";

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
      <h1>Overview</h1>
      {sections ? (
        <CemeteryCharts sections={sections} />
      ) : (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default EmployeePage;
