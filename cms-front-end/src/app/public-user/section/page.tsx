"use client";

import React, { useEffect } from "react";
import { useCemeterySectionState } from "@/providers/cemetery-section";
import { useRouter } from "next/navigation";
import Tombstone from "@/components/shared/tombstone/tombstone";
import { useGravesiteActions, useGravesiteState } from "@/providers/gravesite";

const SectionPage = () => {
  const { selectedSection } = useCemeterySectionState();
  const { gravesiteList, isSuccess, isPending } = useGravesiteState();
  const { getByCemeterySectionId } = useGravesiteActions();
  const router = useRouter();

  useEffect(() => {
    if (selectedSection) {
      getByCemeterySectionId(selectedSection.id);
    }
  }, [selectedSection]);

  if (!selectedSection) {
    if (typeof window !== "undefined") {
      router.push("/public-user");
    }
    return (
      <p className="text-center mt-10">No section selected. Redirecting...</p>
    );
  }

  if (isPending) {
    return <p className="text-center mt-10">Loading gravesites...</p>;
  }

  if (!isSuccess) {
    return <p className="text-center mt-10">Failed to load gravesites.</p>;
  }

  const { id, name, type, totalCapacity, numberOfAvailableSites } =
    selectedSection;

  const filteredSites = gravesiteList.filter(
    (site) => site.cemeterySectionId === id,
  );

  const maxCol = Math.max(...filteredSites.map((site) => site.column));
  const maxRow = Math.max(...filteredSites.map((site) => site.row));

  const grid = Array.from({ length: maxRow }, () => Array(maxCol).fill(null));

  filteredSites.forEach((site) => {
    const rowIndex = site.row - 1;
    const colIndex = site.column - 1;
    if (grid[rowIndex]) {
      grid[rowIndex][colIndex] = site;
    }
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <button
        onClick={() => router.back()}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-1">{name}</h1>
      <p className="text-gray-600 italic mb-2">{type}</p>
      <p className="text-gray-700 mb-6">
        Showing {numberOfAvailableSites} available out of {totalCapacity} total
        sites
      </p>

      <div className="space-y-2">
        {grid.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${maxCol}, minmax(24px, 1fr))`,
            }}
          >
            {row.map((site, colIndex) => {
              if (!site) {
                return <div key={`empty-${rowIndex}-${colIndex}`} />;
              }
              const status =
                site.occupant1IdNumber || site.occupant2IdNumber
                  ? "reserved"
                  : "available";
              return (
                <Tombstone
                  key={site.id}
                  x={site.column}
                  y={site.row}
                  status={status}
                  onClick={() => {}}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionPage;
