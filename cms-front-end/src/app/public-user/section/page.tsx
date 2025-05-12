"use client";
import React, { useEffect, useState } from "react";
import { useCemeterySectionState } from "@/providers/cemetery-section";
import { useRouter } from "next/navigation";
import Tombstone from "@/components/shared/tombstone/tombstone";
import { useGravesiteActions, useGravesiteState } from "@/providers/gravesite";
import { Modal, Button, Spin, Tag } from "antd";
import { IGravesite } from "@/providers/gravesite/context";
import PaymentForm from "@/components/shared/payment-form/payment-form";
import { useStyles } from "./style/style";

const SectionPage = () => {
  const { selectedSection } = useCemeterySectionState();
  const { gravesiteList, isPending, isSuccess, isError } = useGravesiteState();
  const { getByCemeterySectionId } = useGravesiteActions();
  const { styles } = useStyles();
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
    return <Tag color="blue">No section selected. Redirecting...</Tag>;
  }

  if (isError) {
    return <Tag color="red">Failed to load gravesites.</Tag>;
  }

  const { id, name, type } = selectedSection;

  const filteredSites = gravesiteList?.filter(
    (site) => site.cemeterySectionId === id,
  );

  const maxCol =
    filteredSites === undefined
      ? 0
      : Math.max(...filteredSites.map((site) => site.column));
  const maxRow =
    filteredSites === undefined
      ? 0
      : Math.max(...filteredSites.map((site) => site.row));

  const grid = Array.from({ length: maxRow }, () => Array(maxCol).fill(null));

  if (filteredSites) {
    filteredSites.forEach((site) => {
      const rowIndex = site.row - 1;
      const colIndex = site.column - 1;
      if (grid[rowIndex]) {
        grid[rowIndex][colIndex] = site;
      }
    });
  }
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {isPending && (
        <div className={styles.loadingOverlay}>
          <Spin size="large" />
        </div>
      )}

      {isSuccess && (
        <>
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
                {row.map((site: IGravesite, colIndex) => {
                  if (!site) {
                    return <div key={`empty-${rowIndex}-${colIndex}`} />;
                  }
                  return (
                    <Tombstone
                      key={site.id}
                      isReserved={site.isReserved}
                      isSelected={site.id === selectedGravesite?.id}
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
        </>
      )}

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
            disabled={selectedGravesite?.isReserved}
          >
            Buy Grave
          </Button>,
        ]}
        centered
        width={500}
      >
        {selectedGravesite &&
          (!selectedGravesite.isReserved ? (
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
          ) : (
            <Tag color="red">This gravesite is not available.</Tag>
          ))}
      </Modal>
      <Modal
        title="Payment"
        open={isPaymentModalOpen}
        onCancel={() => setIsPaymentModalOpen(false)}
        footer={null}
        centered
        width={600}
      >
        <PaymentForm
          gravesiteName={selectedGravesite?.siteNumber || ""}
          gravesitePrice={150000}
        />
      </Modal>
    </div>
  );
};

export default SectionPage;
