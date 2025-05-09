"use client";

import SectionSquare from "@/components/shared/section-square/section-square";
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sections.map((section) => (
            <SectionSquare key={section.name} name={section.name} />
          ))}
        </div>
      ) : (
        <p>Loading sections...</p>
      )}
    </div>
  );
};

export default PublicUserPage;
