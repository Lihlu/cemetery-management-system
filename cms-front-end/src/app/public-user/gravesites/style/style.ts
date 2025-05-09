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
    pageTitle: css`
      color: ${colors.mainText};
      margin-bottom: 24px;
      font-weight: 600;
    `,
    loadingContainer: css`
      text-align: center;
      margin-top: 50px;
    `,
    emptyState: css`
      text-align: center;
      margin-top: 40px;
      padding: 30px;
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

      .ant-alert-message {
        color: ${colors.mainText};
        font-weight: 500;
      }

      .ant-alert-icon {
        color: ${colors.primary};
      }
    `,
    errorState: css`
      .ant-alert-message {
        color: #cf1322;
        font-weight: 500;
      }
    `,
  };
});
