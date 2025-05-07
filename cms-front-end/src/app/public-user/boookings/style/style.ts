import { createStyles } from "antd-style";

// Define our color palette
const colors = {
  background: "#F8F9FA", // Soft White
  mainText: "#1D2D44", // Deep Navy Blue
  secondaryText: "#B0B8C1", // Ash Gray
  primary: "#C8A96B", // Muted Gold
  secondary: "#D9D6EA", // Gentle Lavender
};

export const useStyles = createStyles(({ css, token }) => {
  // Override Ant Design's default token colors
  token.colorPrimary = colors.primary;
  return {
    pageContainer: css`
      min-height: 100vh;
      background: linear-gradient(
        135deg,
        ${colors.background} 0%,
        ${colors.secondary} 100%
      );
      padding: 24px;
    `,
    contentCard: css`
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
      padding: 32px;
      background: white;
    `,
    loadingContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
    `,
    emptyState: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 0;

      .ant-btn {
        margin-top: 16px;
      }
    `,
    pageHeader: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    `,
    formTitle: css`
      color: ${colors.mainText};
      font-weight: 600;
      margin: 0;
    `,
    submitButton: css`
      border-radius: 6px;
      font-weight: 500;
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      &:hover {
        background-color: ${colors.primary}ee;
        border-color: ${colors.primary}ee;
      }
    `,
    primaryText: css`
      color: ${colors.primary};
      &:hover {
        color: ${colors.primary}ee;
      }
    `,
    actionButtons: css`
      display: flex;
      gap: 8px;
    `,
    actionButton: css`
      color: ${colors.primary};
      &:hover {
        color: ${colors.primary}ee;
        background-color: ${colors.background};
      }
    `,
    table: css`
      .ant-table-thead > tr > th {
        background-color: ${colors.background};
        color: ${colors.mainText};
        font-weight: 600;
      }

      .ant-table-tbody > tr:hover > td {
        background-color: ${colors.background}80;
      }
    `,
    alert: css`
      margin-bottom: 24px;
    `,
    detailsSection: css`
      margin-bottom: 24px;
    `,
    detailsLabel: css`
      font-weight: 500;
      color: ${colors.secondaryText};
      margin-bottom: 4px;
    `,
    detailsValue: css`
      color: ${colors.mainText};
      font-size: 16px;
    `,
    detailsCard: css`
      background-color: ${colors.background};
      border-radius: 8px;
      padding: 16px;
      margin-top: 8px;
    `,
    buttonGroup: css`
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 24px;
    `,
    secondaryButton: css`
      border-radius: 6px;
      font-weight: 500;
      background-color: white;
      border-color: ${colors.primary};
      color: ${colors.primary};
      &:hover {
        background-color: ${colors.background};
        border-color: ${colors.mainText};
        color: ${colors.mainText};
      }
    `,
    deleteButton: css`
      border-radius: 6px;
      font-weight: 500;
      background-color: #f5e1e1;
      border-color: #d46b6b;
      color: #d46b6b;
      &:hover {
        background-color: #f5d6d6;
        border-color: #c25555;
        color: #c25555;
      }
    `,
    formSection: css`
      margin-bottom: 24px;
    `,
    formLabel: css`
      font-weight: 500;
      color: ${colors.mainText};
    `,
    input: css`
      border-radius: 6px;
      border-color: ${colors.secondary};

      &:hover,
      &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 0 2px ${colors.primary}20;
      }
    `,
    statusTagConfirmed: css`
      background-color: #e1f5e1;
      color: #55c255;
      border-color: #55c255;
    `,
    statusTagPending: css`
      background-color: #f5f1e1;
      color: #c2b055;
      border-color: #c2b055;
    `,
    statusTagCancelled: css`
      background-color: #f5e1e1;
      color: #c25555;
      border-color: #c25555;
    `,
    statusTagCompleted: css`
      background-color: #e1e1f5;
      color: #5555c2;
      border-color: #5555c2;
    `,
  };
});
