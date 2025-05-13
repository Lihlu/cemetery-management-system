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
    sider: css`
      height: 100vh;
      background: #ffffff;
      color: ${colors.primary} !important;
    `,

    mainLayout: css`
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100vh;
      overflow: hidden;
    `,

    menu: css`
      height: 100%;
      border-right: none;
      color: ${colors.primary} !important;

      .ant-menu-item-selected {
        background-color: ${colors.primary} !important;
        color: white !important;
      }
    `,
  };
});
