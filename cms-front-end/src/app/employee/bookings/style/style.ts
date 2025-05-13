import { createStyles } from "antd-style";

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
    table: css`
      .ant-table-thead {
        background-color: ${colors.background};
        color: ${colors.mainText} !important;
        font-weight: 600;
      }

      .ant-table-tbody > tr:hover > td {
        background-color: ${colors.background}80;
      }
    `,
    loadingOverlay: css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    `,
  };
});
