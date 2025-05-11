"use client";
import CemeteryMap from "@/components/shared/cemetery-map/cemetery-map";
import {
  useCemeterySectionActions,
  useCemeterySectionState,
} from "@/providers/cemetery-section";
import React, { useEffect } from "react";

const PublicUserPage = () => {
  const { sections } = useCemeterySectionState();
  const { getAllSections } = useCemeterySectionActions();

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
        <p>Loading sections...</p>
      )}
    </div>
  );
};

export default PublicUserPage;
