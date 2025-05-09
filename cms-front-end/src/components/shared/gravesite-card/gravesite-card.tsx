"use client";
import { Card } from "antd"; // Adjust the import path if necessary
import { useStyles } from "./style/style";
import { IGravesite } from "@/providers/gravesite/context";

interface GravesiteCardProps {
  gravesite: IGravesite;
  getSectionName: (sectionId: string) => string;
}

const GravesiteCard = ({ gravesite, getSectionName }: GravesiteCardProps) => {
  const { styles } = useStyles();

  return (
    <Card
      title={`Site #${gravesite.siteNumber}`}
      bordered={false}
      hoverable
      className={styles.gravesiteCard}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Section Name:</span>
          <span className={styles.cardValue}>
            {getSectionName(gravesite.cemeterySectionId)}
          </span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Site Number:</span>
          <span className={styles.cardValue}>{gravesite.siteNumber}</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Type:</span>
          <span>
            {gravesite.isExtraDeep ? (
              <span className={styles.extraDeepBadge}>Extra Deep</span>
            ) : (
              <span className={styles.regularBadge}>Standard</span>
            )}
          </span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Occupant 1:</span>
          <span className={styles.cardValue}>
            {gravesite.occupant1IdNumber || "—"}
          </span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Occupant 2:</span>
          <span className={styles.cardValue}>
            {gravesite.occupant2IdNumber || "—"}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default GravesiteCard;
