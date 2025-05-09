import { createStyles } from "antd-style";

// Define our color palette
const colors = {
  background: "#F8F9FA", // Soft White
  mainText: "#1D2D44", // Deep Navy Blue
  secondaryText: "#B0B8C1", // Ash Gray
  primary: "#C8A96B", // Muted Gold
  secondary: "#D9D6EA", // Gentle Lavender
  cardBorder: "#F0F0F0", // Light Gray for card borders
  success: "#6BAC8A", // Soft Green for success messages
};

export const useStyles = createStyles(({ css }) => {
  return {
    gravesiteCard: css`
      height: 100%;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
      transition: all 0.3s;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }

      .ant-card-head {
        background-color: ${colors.primary};
        color: white;
        border-radius: 12px 12px 0 0;
        border-bottom: none;
      }

      .ant-card-head-title {
        font-weight: 600;
      }
    `,
    cardContent: css`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `,
    cardRow: css`
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${colors.cardBorder};
      padding-bottom: 6px;

      &:last-child {
        border-bottom: none;
      }
    `,
    cardLabel: css`
      color: ${colors.secondaryText};
      font-weight: 500;
    `,
    cardValue: css`
      color: ${colors.mainText};
      font-weight: 600;
    `,
    extraDeepBadge: css`
      background-color: ${colors.success};
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
    `,
    regularBadge: css`
      background-color: ${colors.secondaryText};
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
    `,
  };
});
