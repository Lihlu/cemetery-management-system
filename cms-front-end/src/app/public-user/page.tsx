"use client";
import CemeteryMap from "@/components/shared/cemetery-map/cemetery-map";
import {
  useCemeterySectionActions,
  useCemeterySectionState,
} from "@/providers/cemetery-section";
import { Spin } from "antd";
import React, { useEffect } from "react";
import { useStyles } from "./style/style";

const PublicUserPage = () => {
  const { sections } = useCemeterySectionState();
  const { getAllSections } = useCemeterySectionActions();
  const { styles } = useStyles();

  useEffect(() => {
    if (sections === undefined) {
      getAllSections();
    }
  }, [sections]);

  return (
    <div className="p-4">
      {sections ? (
        <main className="p-4">
          <h1 className="text-2xl font-bold">Cemetery Map</h1>
          <CemeteryMap sections={sections} />
        </main>
      ) : (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default PublicUserPage;
