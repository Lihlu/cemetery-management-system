"use client";

import React, { useEffect, useState } from "react";
import { useCemeterySectionState } from "@/providers/cemetery-section";
import { useRouter } from "next/navigation";
import Tombstone from "@/components/shared/tombstone/tombstone";
import { useGravesiteActions, useGravesiteState } from "@/providers/gravesite";
import { Modal, Button } from "antd";
import { IGravesite } from "@/providers/gravesite/context";
import PaymentForm from "@/components/shared/payment-form/payment-form";

const SectionPage = () => {
  const { selectedSection } = useCemeterySectionState();
  const { gravesiteList, isSuccess, isPending } = useGravesiteState();
  const { getByCemeterySectionId } = useGravesiteActions();
  const router = useRouter();

  const [selectedGravesite, setSelectedGravesite] = useState<IGravesite | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

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

  const { id, name, type } = selectedSection;

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
                  onClick={() => {
                    setSelectedGravesite(site);
                    setIsModalOpen(true);
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Gravesite Details Modal */}
      <Modal
        title="Gravesite Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
          <Button
            key="buy"
            type="primary"
            onClick={() => {
              setIsModalOpen(false);
              setIsPaymentModalOpen(true);
            }}
          >
            Buy Grave
          </Button>,
        ]}
        centered
        width={500}
      >
        {selectedGravesite && (
          <div className="space-y-2">
            <p>
              <strong>Row:</strong> {selectedGravesite.row}
            </p>
            <p>
              <strong>Column:</strong> {selectedGravesite.column}
            </p>
            <p>
              <strong>Price:</strong> R1500.00
            </p>
          </div>
        )}
      </Modal>
      <Modal
        title="Payment"
        open={isPaymentModalOpen}
        onCancel={() => setIsPaymentModalOpen(false)}
        footer={null}
        centered
        width={600}
      >
        {/* Replace with your actual PaymentForm */}
        <PaymentForm
          gravesiteName={selectedGravesite?.siteNumber || ""}
          gravesitePrice={150000}
        />
      </Modal>
    </div>
  );
};

export default SectionPage;
